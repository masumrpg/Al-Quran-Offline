import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Images from "../assets/bg";
import { useRouter } from "expo-router";
import Colors from "../constants/Colors";

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
              width: 150,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              marginTop: 50,
              backgroundColor: pressed ? Colors.button_pressed : Colors.button,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: Colors.primary,
              }}
            >
              Lanjut
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default index;
