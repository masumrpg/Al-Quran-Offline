/* eslint-disable @typescript-eslint/no-explicit-any */
import QuranKemenag from "quran-kemenag";
import { Surah, Verse } from "quran-kemenag/dist/intefaces";
import React from "react";
// import { FlashList } from "@shopify/flash-list";
// import Icons from "../../assets/icons";
// import Images from "../../assets/bg";
// import Colors from "../../constants/color.constant";
import { View } from "../../components/Themed";
import { Image, ScrollView, Text } from "react-native";
import Images from "../../assets/bg";
import Colors from "../../constants/color.constant";

const DetailScreen = () => {
  //   const [listOfVerse, setListOfVerse]: [
  //     listOfSurah: Verse[],
  //     setListOfsurah: (value: any) => void
  //   ] = React.useState([]);

  //   React.useEffect(() => {
  //     getData();
  //   }, []);

  //   const getData = async () => {
  //     const quran = new QuranKemenag();
  //     const data = await quran.getListSurah();
  //     setListOfVerse(data);
  //   };

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

  return (
    <ScrollView>
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          source={Images.card}
          style={{ alignSelf: "center", marginVertical: 25 }}
        />
        <View>
          {listOfSurah.map((item, index) => (
            <View
              key={index}
              style={{ alignSelf: "center", marginVertical: 5 }}
            >
              <View>
                <View
                  style={{
                    backgroundColor: "rgba(46, 23, 59, 0.05)",
                    borderRadius: 10,
                    width: 327,
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
                        color: Colors.white,
                        position: "absolute",
                        textAlign: "center",
                        alignSelf: "center",
                      }}
                    >
                      {item.surah_verse_count}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  width: 327,
                  height: 112,
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(46, 23, 59, 0.05)",
                  borderRadius: 13.5,
                }}
              >
                <Text>{item.surah_name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
