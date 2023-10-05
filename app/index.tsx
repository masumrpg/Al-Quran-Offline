import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Images from "../assets/bg";
import { useRouter } from "expo-router";

const index = () => {
  const route = useRouter();

  return (
    <View
      style={{
        height: "100%",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 15,
          color: "#672CBC",
        }}
      >
        Quran App
      </Text>
      <View style={{ marginBottom: 40, width: "50%" }}>
        <Text style={{ textAlign: "center", color: "#8789A3", fontSize: 17 }}>
          Learn Quran and Recite once everyday
        </Text>
      </View>
      <View>
        <Image source={Images.splash} />
      </View>
      <Pressable onPress={() => route.push("/(tabs)")}>
        {({ pressed }) => (
          <View
            style={{
              alignItems: "center",
              marginTop: -30,
            }}
          >
            <Image
              source={Images.button}
              style={{ position: "absolute", opacity: pressed ? 0.9 : 1 }}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default index;
