import Error from '../Error/Error';

import { InputWrapper, LabelWrapper } from './styles';

const InputText = ({ register, errors }) => {
  return (
    <div>
      <LabelWrapper htmlFor="name">Название фото</LabelWrapper>
      <InputWrapper
        placeholder="Yosemite National Park"
        name="name"
        id="name"
        autoFocus
        {...register('name')}
      />
      {errors.name && <Error error={errors.name.message} />}
    </div>
  );
};

export default InputText;
