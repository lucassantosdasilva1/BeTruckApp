import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 15px;

  justify-content: center;
  align-items:center;

  background-color: 'rgba(52, 52, 52, 0.8)';
`;

export const Body = styled.View`
  justify-content: space-between;

  height: 120px;
  width: 100%;

  padding: 15px;

  border-width: 1px;
  border-radius: 5px;
  border-color: #808080;

  background-color: white;
`;
export const QuestionContainer = styled.View`
    
`;

export const ConfirmDelete = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.primary_700};
    //margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`

  flex-direction: row;
  justify-content: flex-end;
`;

export const YesButton = styled(TouchableOpacity)`
  height: 30px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background-color: red;
  background-color: #F6F6F6;
  border-width: 1px;

  margin-right: 15px;
`;

export const YesText = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};

`;

export const NoButton = styled(TouchableOpacity)`
  height: 30px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background-color: #6558F5;
  border-width: 1px;

  margin-right: 15px;
`;

export const NoText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;