import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ marginTop: Constants.statusBarHeight }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="dark" />
      </SafeAreaProvider>
    );
  }
}
