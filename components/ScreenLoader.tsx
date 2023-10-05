import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const ScreenLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require("../assets/animation/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default ScreenLoader;
