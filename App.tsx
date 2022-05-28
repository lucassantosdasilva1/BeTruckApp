import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

import { ThemeProvider } from 'styled-components';
import themeStyled from './src/styles/themeStyled';

import { default as theme } from './src/styles/theme.json'; // <-- Import app theme

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={themeStyled}>
      <ApplicationProvider theme={{ ...eva.light, ...theme }} mapping={eva.mapping}>
        <View style={styles.container}>
          <Home />
          <StatusBar style="auto" />
        </View>
      </ApplicationProvider>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
