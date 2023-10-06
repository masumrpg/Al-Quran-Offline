// import FontAwesome from "@expo/vector-icons/FontAwesome"; // default
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { Image } from "react-native";
import Icons from "../../assets/icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleStyle: { color: Colors.primary, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Al-Quran",
          headerTitleAlign: "center",
          // tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />, // default
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={focused ? Icons.book : Icons.book_outline}
                  // contentFit="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? Colors.primary : Colors.outline,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          headerTitleAlign: "center",
          // tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />, // default
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={focused ? Icons.info : Icons.info_outline}
                  // contentFit="contain"
                  style={{
                    height: 27,
                    width: 27,
                    tintColor: focused ? Colors.primary : Colors.outline,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
