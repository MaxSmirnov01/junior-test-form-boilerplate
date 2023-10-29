import { useDispatch } from 'react-redux';

import iconDelete1 from '../../assets/iconDelete1.png';
import { removeImage } from '../../slices/imgSlice';

import {
  ButtonWrapper,
  H3Wrapper,
  ImgContainer,
  ImgWrapper,
  LiWrapper,
  PWrapper,
} from './styles';

const Image = ({ image }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeImage(id));
  };

  return (
    <ImgContainer>
      <LiWrapper>
        <H3Wrapper>{image.name}</H3Wrapper>
        <PWrapper>
          <b>Дата добавления:</b> {image.date}
        </PWrapper>
        <PWrapper>
          <b>Описание:</b> {image.description}
        </PWrapper>
        <ImgWrapper src={image.url} alt="изображение"></ImgWrapper>
        <ButtonWrapper onClick={() => handleClick(image.id)}>
          <img src={iconDelete1} alt="удалить" />
        </ButtonWrapper>
      </LiWrapper>
    </ImgContainer>
  );
};

export default Image;
