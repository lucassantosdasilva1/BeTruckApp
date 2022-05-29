import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

import { Container } from './styles';


export function Header(){
    return (
        <Container>
            <View>
                <Text category='h6' appearance='alternative'>BeTruckAPP</Text>
            </View>
        </Container>
    )
};