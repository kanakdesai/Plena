import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./stackNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Home, Categories, Favourites, More, Cart, ProductDetails } from "../screens/index";
import { createStackNavigator } from '@react-navigation/stack';
interface MyTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}
const Stack = createStackNavigator();
function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
  return (
    <View style={styles.mainTab}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const iconName = getTabBarIconName(route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const iconContainerStyle: StyleProp<ViewStyle> = isFocused
          ? { position: "relative", top: -30, zIndex: 2, alignSelf: "center" }
          : { flex: 1, alignItems: "center", justifyContent: "flex-end" };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...iconContainerStyle,
              height: 60,
              width: 60,
              backgroundColor: isFocused ? '#1E222B' : 'white',
              borderRadius: 200,
              
              
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 10,
                borderColor: 'transparent'
            }}
          >
            <Ionicons name={iconName} size={24} color={isFocused ? "#F9B023" : "#3E4554"} />
            {!isFocused && (
              <Text style={{ color: "#8891A5" }}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const getTabBarIconName = (routeName: string) => {
  switch (routeName) {
    case 'Home':
      return 'home';
    case 'Categories':
      return 'list';
    case 'Favourites':
      return 'heart';
    case 'More':
      return 'ellipsis-horizontal';
    default:
      return 'home'; // Default icon
  }
};

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer >
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen options={{ headerShown: false }} name="Home" component={StackNavigation} />
        <Tab.Screen options={{ headerShown: false }} name="Categories" component={Categories} />
        <Tab.Screen options={{ headerShown: false }} name="Favourites" component={Favourites} />
        <Tab.Screen options={{ headerShown: false }} name="More" component={More} />
       
      </Tab.Navigator>
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  mainTab: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 80,
    overflow: 'visible',
    paddingHorizontal: 10
  },
});
