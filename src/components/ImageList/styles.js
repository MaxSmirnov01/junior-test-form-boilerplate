import styled from 'styled-components';

export const ImgContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  position: relative;
`;

export const UlWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  list-style-type: none;
  margin: 0;
  padding: 10px;
`;

export const LiWrapper = styled.li`
  padding: 15px;
`;

export const ImgWrapper = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

export const H3Wrapper = styled.h3`
  margin: 0;
`;

export const PWrapper = styled.p`
  opacity: 0.7;
`;

export const ButtonWrapper = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
