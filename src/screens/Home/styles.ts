import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;

  width: ${windowWidth}px;
  height: ${windowHeight}px;

  align-items: center;
  padding: 0 4px;

  background-color: ${({theme}) => theme.colors.title};
`;