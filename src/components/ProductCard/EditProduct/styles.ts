import { TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface PropsButton extends TouchableOpacityProps {
    colorBackground: string;
}

interface PropsText extends TextProps {
    colorText: "white" |  "black" ,
}


export const Container = styled.View`
    flex: 1;
    margin-top: 5px;
    background-color: 'rgba(52, 52, 52, 0.8)';

    justify-content: center;
`;



export const ContainerPostCreation = styled.View`
    height: 360px;
    width: 100%;
    
    padding: 15px 15px;
    
    border-width: 1px;
    border-color: #808080;
    background-color: white;
    
    justify-content: space-between;
`;

export const Body = styled.View`
    
`;

export const Header = styled.View`

    
`;

export const TitleHeader = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.primary_700};
    margin-bottom: 10px;
`;

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.background_secondary};

    background-color: ${({ theme }) => theme.colors.text_detail};

    border-radius: 5px;
    padding: 2px 5px;
`;

export const ContentWrap = styled.View`
    flex-direction: row;

    margin-top: 10px;

    justify-content: flex-end;
    align-items: center;
`;

export const ContentInput = styled(TextInput)`
    height: 40px;
    width: 300px;

    border-radius: 5px;
    border-width: 1px;
    border-color: #808080;

    padding: 10px;
    margin-left: 10px;

    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_detail};
`;

export const Footer = styled.View`
    height: 40px;
    width: 100%;

    margin-bottom: 5px;
    
    flex-direction: row;

    justify-content: flex-end;

    background-color: white;
`;

export const Button = styled(TouchableOpacity)<PropsButton>`
    height: 40px;
    width: 100px;
    border-radius: 5px;

    margin-left: 5px;
    
    justify-content: center;
    align-items: center;
    
    background-color: ${({ colorBackground }) => colorBackground};
`;


export const ButtonText = styled.Text<PropsText>`

    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(14)}px;
    color: ${({ colorText }) => colorText};
`;