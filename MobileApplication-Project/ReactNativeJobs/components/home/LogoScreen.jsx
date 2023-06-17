import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";

function WellcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/search.png")}
        />
        <Text style={styles.tagLine}>JobSearcher</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 300,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 15,
    textAlign: "center",
    color: "#0000b3",
  },
});

export default WellcomeScreen;
