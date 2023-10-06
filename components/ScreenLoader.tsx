import { StyleSheet, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const ScreenLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AnimatedLottieView
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
  },
});

export default ScreenLoader;
