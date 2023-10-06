/* eslint-disable @typescript-eslint/no-explicit-any */
import QuranKemenag from "quran-kemenag";
import React from "react";
import { View } from "../components/Themed";
import { Image, ScrollView, Text, useColorScheme } from "react-native";
import Images from "../assets/bg";
import Colors from "../constants/Colors";
import { useLocalSearchParams } from "expo-router";
import ScreenLoader from "../components/ScreenLoader";

const SurahDetail = () => {
  // TEST
  const [loading, setLoading] = React.useState(true);

  // getParams
  const { surahNumber } = useLocalSearchParams();
  const data = Number(surahNumber);

  // useState
  const [surah, setSurah]: [surah: any, setSurah: any] = React.useState("");
  const [verses, setVerses]: [verses: any[], setVerses: any] = React.useState(
    []
  );

  React.useEffect(() => {
    getData(data);
    setLoading(false); // test
  }, []);

  const getData = async (surah_id: number) => {
    const quran = new QuranKemenag();
    const data = await quran.getSurah(surah_id);
    setSurah(data);
    setVerses(data.verses || []);
  };

  //color
  const colorScheme = useColorScheme();
  let txtColor = Colors.light.text;
  let backGroundVerse = "rgba(46, 23, 59, 0.05)";
  let cardTextColor = Colors.dark.text;

  if (colorScheme === "dark") {
    txtColor = Colors.dark.text;
    backGroundVerse = "rgba(82, 71, 88, 0.4)";
    cardTextColor = Colors.dark.text;
  } else {
    txtColor = Colors.light.text;
    backGroundVerse = "rgba(46, 23, 59, 0.05)";
    cardTextColor = Colors.dark.text;
  }

  return (
    <ScrollView>
      <View>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* card */}
          <View style={{ justifyContent: "center" }}>
            <Image
              source={Images.card}
              style={{
                width: 360,
                height: 290,
                alignSelf: "center",
                marginVertical: 25,
              }}
            />
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <Text
                style={{
                  color: cardTextColor,
                  fontWeight: "bold",
                  fontSize: 26,
                  alignSelf: "center",
                }}
              >
                {surah.surah_name}
              </Text>
              <Text
                style={{
                  color: cardTextColor,
                  fontSize: 16,
                  alignSelf: "center",
                }}
              >
                {surah.surah_name_bahasa}
              </Text>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBlockColor: cardTextColor,
                  marginVertical: 15,
                }}
              />
              <Text
                style={{
                  color: cardTextColor,
                  fontSize: 16,
                  alignSelf: "center",
                }}
              >
                {surah.surah_verse_count} Ayat
              </Text>
              <Image style={{ marginTop: 20 }} source={Images.bismillah} />
            </View>
          </View>
          <View>
            {verses.map((item, index) => (
              <View
                key={index}
                style={{ alignSelf: "center", marginVertical: 5 }}
              >
                <View>
                  <View
                    style={{
                      backgroundColor: backGroundVerse,
                      borderRadius: 10,
                      width: 360,
                      height: 47,
                      // opacity: 0.4,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#863ED5",
                        width: 27,
                        height: 27,
                        borderRadius: 13.5,
                        alignSelf: "flex-start",
                        justifyContent: "center",
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          position: "absolute",
                          textAlign: "center",
                          alignSelf: "center",
                        }}
                      >
                        {item.verse_number}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    marginHorizontal: 15,
                    width: 327,
                    height: "auto",
                    borderBottomWidth: 1,
                    borderBottomColor: backGroundVerse,
                    borderRadius: 13.5,
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "flex-end",
                      // marginRight: -12,
                      color: txtColor,
                      fontSize: 20,
                      marginBottom: 40,
                    }}
                  >
                    {item.verse_arabic}
                  </Text>
                  <Text
                    style={{
                      // marginLeft: 25,
                      textAlign: "justify",
                      color: txtColor,
                      fontSize: 15,
                      marginBottom: 20,
                    }}
                  >
                    {item.verse_bahasa}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {loading ? <ScreenLoader /> : false}
      </View>
    </ScrollView>
  );
};

export default SurahDetail;
