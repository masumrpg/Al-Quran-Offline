import React from "react";
import QuranKemenag from "quran-kemenag";
import { Surah } from "quran-kemenag/dist/intefaces";
import Images from "../../assets/bg";
import Colors from "../../constants/Colors";
import { FlashList } from "@shopify/flash-list";
import { Image, Pressable, Text, View, useColorScheme } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  // get data
  const [listOfSurah, setListOfsurah]: [
    listOfSurah: Surah[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setListOfsurah: (value: any) => void
  ] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const quran = new QuranKemenag();
    const data = await quran.getListSurah();
    setListOfsurah(data);
  };

  // route
  const route = useRouter();

  // dark and light color
  const colorScheme = useColorScheme();
  let txtColor = "light";
  let txtSambutan = Colors.light.text;
  let bgColor = Colors.light.background;

  if (colorScheme === "dark") {
    txtColor = Colors.dark.text;
    bgColor = Colors.dark.background;
    txtSambutan = "#A19CC5";
  } else {
    txtColor = Colors.light.text;
    bgColor = Colors.light.background;
    txtSambutan = "#8789A3";
  }

  return (
    <>
      <View
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: bgColor,
        }}
      >
        <Text
          style={{ color: txtSambutan, fontSize: 18, marginHorizontal: 45 }}
        >
          Asslamualaikum
        </Text>
        <Text
          style={{
            fontSize: 24,
            marginHorizontal: 45,
            marginBottom: 17,
            fontWeight: "bold",
            color: txtColor,
          }}
        >
          Ma'sum
        </Text>
        <View>
          <Image
            source={Images.card_home}
            style={{
              width: 326,
              height: 131,
              alignSelf: "center",
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: Colors.primary,
            borderBottomWidth: 2.5,
            borderRadius: 2,
            marginHorizontal: 45,
            marginTop: 25,
          }}
        />
      </View>
      <FlashList
        data={listOfSurah}
        keyExtractor={(s) => `${s.surah_id}`}
        renderItem={({ item, index }) => {
          const onPress = () => {
            // push and send params
            route.push({
              pathname: "/surah",
              params: { surahNumber: item.surah_id },
            });
          };
          return <SurahItem key={index} data={item} onPress={onPress} />;
        }}
        estimatedItemSize={200}
      />
    </>
  );
};

interface SurahItemProps {
  data: Surah;
  onPress: () => void;
}

const SurahItem = (props: SurahItemProps) => {
  // dark and light color
  const colorScheme = useColorScheme();
  let txtColor = "light";
  let bgColor = Colors.light.background;

  if (colorScheme === "dark") {
    txtColor = Colors.dark.text;
    bgColor = Colors.dark.background;
  } else {
    txtColor = Colors.light.text;
    bgColor = Colors.light.background;
  }

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <View style={{ backgroundColor: bgColor }}>
        <View
          style={{
            margin: 10,
            marginHorizontal: 25,
            paddingVertical: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 19,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                justifyContent: "center",
                marginLeft: 15,
                marginRight: 15,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={Images.num_bg}
                  style={{ resizeMode: "contain", height: 40, width: 40 }}
                />
                <Text style={{ position: "absolute", color: txtColor }}>
                  {props.data.surah_id}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 17, color: txtColor }}>
                {props.data.surah_name}
              </Text>
              <Text style={{ fontSize: 15, color: txtColor }}>
                {props.data.surah_verse_count} Ayat
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center", marginRight: 15 }}>
            <Text style={{ fontSize: 20, color: txtColor }}>
              {props.data.surah_name_arabic}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 45,
            borderBottomColor: Colors.semi,
            borderBottomWidth: 1.5,
            width: "auto",
          }}
        />
      </View>
    </Pressable>
  );
};

export default HomeScreen;
