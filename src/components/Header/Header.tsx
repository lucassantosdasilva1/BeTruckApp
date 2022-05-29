import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import { Container, Logo } from './styles';


export function Header(){
    return (
        <Container>
            <View>
                <Logo source={require('../../assets/betrucklogo.png')}/>
            </View>
        </Container>
    )
};