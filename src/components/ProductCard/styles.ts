import styled from 'styled-components/native';
import themeStyled from '../../styles/themeStyled';

export const Container = styled.View`
  width: 100%;
  height: 100px;

  background-color: #FFFF;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 5px;

  padding: 10px;

  border-width: 2px;
  border-color: ${({theme}) => theme.colors.line};
  
`;

export const WrapPhoto = styled.View`
  width: 30%;
  height: 100%;

  background-color: cadetblue;
  //padding: 10px;

  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const WrapInfos = styled.View`
  width: 70%;
  height: 100%;

  padding-left: 10px;

  justify-content: space-between;
`;

export const WrapTitleOptionsType = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapTitleType = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;



export const Title = styled.Text`
`;

export const Type = styled.Text`
  margin-left: 5px;
`;

export const WrapOptions = styled.View``;

export const Options = styled.Text`
`;

export const WrapDescription = styled.View``;

export const Description = styled.Text``;

export const WrapRatingPrice = styled.View`

  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled.Text`
`;

export const Price = styled.Text`
`;
