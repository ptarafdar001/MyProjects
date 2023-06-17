import { Stack } from "expo-router";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import LogoScreen from "../components/home/LogoScreen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const [logoDisplay, setLogoDisplay] = useState(true);

  const onLayoutRootView = useCallback(async () => {
    if (fontsloaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  if (logoDisplay) {
    setTimeout(() => {
      setLogoDisplay(false);
    }, 1500);
    return <LogoScreen />;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
