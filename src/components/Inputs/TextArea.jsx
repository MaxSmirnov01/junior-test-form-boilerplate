import Error from '../Error/Error';

import { LabelWrapper, TextAreaWrapper } from './styles';

const TextArea = ({ register, errors }) => {
  return (
    <div>
      <LabelWrapper htmlFor="description">Описание</LabelWrapper>
      <TextAreaWrapper
        name="description"
        id="description"
        {...register('description')}
      />
      {errors.description && <Error error={errors.description.message} />}
    </div>
  );
};

export default TextArea;
