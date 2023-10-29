import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getData from '../../api/getData';

import Image from './Image';
import { UlWrapper } from './styles';

const apiKey = process.env.REACT_APP_UNSPLASH_TOKEN;

export const ImageList = () => {
  const dispath = useDispatch();

  const { images, errors } = useSelector((state) => state.images);

  useEffect(() => {
    dispath(getData(apiKey));
  }, [dispath]);

  if (errors && errors.message) {
    // в ошибке нет свойств status и response, можно обработать через свойство code: 'ERR_BAD_REQUEST' и другие
    // или вырезать код ошибки из сообщения, но выглядит как-то не очень, поэтому вывел общее сообщение для всех
    return (
      <div style={{ textAlign: 'center', color: 'red' }}>
        Произошла ошибка: {errors.message}
      </div>
    );
  }

  return (
    <div>
      <UlWrapper>
        {images.map((image) => (
          <Image image={image} key={image.id} />
        ))}
      </UlWrapper>
    </div>
  );
};
