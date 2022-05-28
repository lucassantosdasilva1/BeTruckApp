import styled from 'styled-components/native';

import { getStatusBarHeight} from "react-native-iphone-x-helper"


export const Container = styled.View`
  width: 100%;
  height: 80px;
  margin-top: ${getStatusBarHeight()}px;

  align-items: center;
  justify-content: center;

`;