import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getData from '../../api/getData';
import handleError from '../../api/handleError';

import Image from './Image';
import { UlWrapper } from './styles';

const apiKey = process.env.REACT_APP_UNSPLASH_TOKEN;

export const ImageList = () => {
  const dispath = useDispatch();

  const { images, error } = useSelector((state) => state.images);

  useEffect(() => {
    dispath(getData(apiKey));
  }, [dispath]);

  if (error && error.status) {
    const message = handleError(error);

    return (
      <div style={{ textAlign: 'center', color: 'red' }}>
        Произошла ошибка: {message}
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
