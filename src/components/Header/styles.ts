import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

import { getStatusBarHeight} from "react-native-iphone-x-helper"


export const Container = styled.View`
  width: 100%;
  height: 80px;
  margin-top: ${getStatusBarHeight()}px;

  align-items: center;
  justify-content: center;
`;

export const WrapAll = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 167px;
  height: 85px;
`;

export const ButtonReload = styled.TouchableOpacity`
  margin-left: 30px;
  height: 30px;
  width: 30px;
`;

export const Icon = styled(AntDesign)``;