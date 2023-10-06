import { Image, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Images from "../../assets/bg";
import React from "react";
import Hyperlink from "react-native-hyperlink";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Al-Quran App</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.isiText}>Built by Ma'sum with React Native</Text>
      <View
        style={{
          borderRadius: 100,
        }}
      >
        <Image
          source={Images.profile}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 3,
          }}
        />
      </View>
      <Text style={styles.isiText}>App on development and will be update</Text>
      <Text style={{ fontSize: 18, marginTop: 20 }}>UI/UX from</Text>
      <Hyperlink
        onPress={(url) => alert(url + "")}
        linkText={(url) =>
          url === "https://www.instagram.com/tanvir_ux/" ? "tanvir_ux" : url
        }
      >
        <Text style={{ color: "rgba(0,0,200,1)", marginTop: 15 }}>
          https://www.instagram.com/tanvir_ux/
        </Text>
      </Hyperlink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  isiText: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
