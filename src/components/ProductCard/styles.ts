import styled from "styled-components/native";

import { FontAwesome5, Octicons } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from "react-native";

export const EditButton = styled.TouchableOpacity``;

export const Container = styled.View`
  height: 150px;
  background-color: #ffff;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 10px;

  padding: 10px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.line};
`;

export const WrapPhoto = styled.View`
  width: 35%;
  background-color: cadetblue;

  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const WrapInfos = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 10px;
`;

export const WrapTitlesType = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  background-color: ${({ theme }) => theme.colors.background_primary};

  border-radius: 5px;
  padding: 2px 5px;

  flex-wrap: wrap;
`;

export const Type = styled.Text`
  height: 27px;
  margin-left: 10px;

  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.background_secondary};

  background-color: ${({ theme }) => theme.colors.text_detail};

  border-radius: 5px;
  padding: 2px 5px;
  flex-wrap: wrap;
`;

export const WrapDescription = styled.View``;

export const Description = styled.Text``;

export const WrapRatingPrice = styled.View``;

export const WrapRate = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RateComponent = styled(Octicons)`
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapOptionsPrice = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const WrapOptions = styled.View``;

export const DeleteButton = styled.View``;

export const DeleteIcon = styled.View``;

export const Options = styled.View``;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;
