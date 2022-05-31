import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";

import { ThemeProvider } from "styled-components";
import themeStyled from "./src/styles/themeStyled";

import { default as theme } from "./src/styles/theme.json"; // <-- Import app theme

import { Provider } from "react-redux";
import { store } from "./src/redux";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator
      color='white'
      size="large"
      style={{ flex: 1}}
      />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeStyled}>
        <ApplicationProvider
          theme={{ ...eva.light, ...theme }}
          mapping={eva.mapping}
        >
          <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
          </View>
        </ApplicationProvider>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme["color-basic-100"],
    alignItems: "center",
    justifyContent: "center",
  },
});
