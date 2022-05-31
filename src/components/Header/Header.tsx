import React from 'react';
import { Image, } from 'react-native';
import { Text } from '@ui-kitten/components';

import { ButtonReload, Container, Logo, Icon, WrapAll } from './styles';

import RestartType  from 'react-native-restart';

//<ButtonReload><Icon name="reload1" size={24} color="white" /></ButtonReload>

export function Header() {

    return (
        <Container>
            <WrapAll>
                <Logo source={require('../../assets/betrucklogo.png')} />
                
            </WrapAll>
        </Container>
    )
};