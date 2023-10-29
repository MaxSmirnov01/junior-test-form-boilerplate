import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import * as yup from 'yup';

import InputText from '../Inputs/InputText';
import InputURL from '../Inputs/InputURL';
import TextArea from '../Inputs/TextArea';
import Button from '../Button/Button';
import { addImage } from '../../slices/imgSlice';
import formattedDate from '../../formattedDate';

import { InputContainer } from './styles';

export const Form = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  //react-hook-form поддерживает интеграцию с yup поэтому решил валидировать им
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Обязательно')
      .min(5, 'Минимум 5 символов')
      .max(20, 'Максимум 20 символов'),
    url: yup.string().url('Некорректный URL').required('Обязательно'),
    description:
      checked &&
      yup.string().required('Обязательно').min(5, 'Минимум 5 символов'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = ({ name, url, description }) => {
    dispatch(
      addImage({
        name,
        url,
        description,
        id: _.uniqueId(),
        date: formattedDate(),
      }),
    );

    reset();
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputText register={register} errors={errors} />
        <InputURL register={register} errors={errors} />
        <div>
          <label>
            Есть описание
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckbox}
              style={{ verticalAlign: 'middle' }}
            />
          </label>
        </div>
        {checked && <TextArea register={register} errors={errors} />}
        <Button type="submit">Добавить фото</Button>
      </InputContainer>
    </form>
  );
};
