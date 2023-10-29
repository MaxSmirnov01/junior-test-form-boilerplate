import Error from '../Error/Error';
import request from '../../requests';

import { InputWrapper, LabelWrapper } from './styles';

const InputURL = ({ register, errors }) => (
  <div>
    <LabelWrapper htmlFor="url">Ссылка на фото</LabelWrapper>
    <InputWrapper
      placeholder={request.getExampleURL()}
      name="url"
      id="url"
      {...register('url')}
    />
    {errors.url && <Error error={errors.url.message} />}
  </div>
);

export default InputURL;
