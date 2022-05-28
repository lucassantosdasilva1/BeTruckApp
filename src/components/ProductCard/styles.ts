import styled from 'styled-components/native';
import themeStyled from '../../styles/themeStyled';

import { Octicons } from '@expo/vector-icons';

import { Rating } from 'react-native-ratings';
import {SwipeRatingProps} from 'react-native-ratings';
import { RFValue } from 'react-native-responsive-fontsize';

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

  align-items: center;
`;

export const Title = styled.Text`

  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};

  background-color: ${({theme}) => theme.colors.background_primary};

  border-radius: 5px;
  padding: 2px 5px;
`;

export const Type = styled.Text`
  margin-left: 10px;

  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.background_secondary};

  background-color: ${({theme}) => theme.colors.text_detail};

  border-radius: 5px;
  padding: 2px 5px;
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

//possívelmente apagar

// export const RateComp = styled(Rating as React.ComponentClass<SwipeRatingProps>).attrs({
//   // type: 'star',
//   // ratingColor: '#3498db',
//   // ratingBackgroundColor: '#c8c7c8',
//   // ratingCount: 5,
//   // imageSize: 15
// })``;

export const WrapRate = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;

export const RateComponent = styled(Octicons)`
    margin-right: 2px;
    color: ${({theme}) => theme.colors.text}
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
`;
