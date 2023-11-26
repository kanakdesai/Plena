import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function FirstView({ navigation }: any) {
  const cart = useSelector((state: any) => state.cart.cart);

  console.log(cart.length);
  return (
    <View style={styles.firstCont}>
      <View style={styles.RowTitles}>
        <Text style={styles.TitleStyle}>Hey, Rahul</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          {cart.length == 0 ? null : (
            <View
              style={{
                zIndex: 1,
                backgroundColor: "#F9B023",
                top: -14,
                left: 6,
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: 100,
              }}
            >
              <Text style={styles.cartItems}>
                {cart.length == 0 ? null : cart.length}
              </Text>
            </View>
          )}
          <Image source={require("../assets/bagWhite.png")}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.InputContainerStyle}>
        <Image source={require("../assets/search.png")}></Image>
        <TextInput
          placeholderTextColor={"#8891A5"}
          placeholder="Search Products or Store"
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.smallTitle}>DELIVERY TO</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.smallTitle2}>Green Way 3000, Sylhet</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.smallTitle}>WITHIN</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.smallTitle2}>1 Hour</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstCont: {
    // flex: 1,
    backgroundColor: "#2A4BA0",
    width: "100%",
    // height: '40%',
    alignItems: "center",
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  RowTitles: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TitleStyle: {
    color: "white",
    fontSize: 26,
    fontWeight: "500",
  },
  InputContainerStyle: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "#153075",
    width: "100%",
    height: 66,
    borderRadius: 30,
    marginVertical: 30,
    alignItems: "center",
    paddingHorizontal: 40,
    gap: 10,
  },
  smallTitle: {
    color: "#8891A4",
    fontWeight: "600",
  },
  smallTitle2: {
    color: "white",
  },
  cartItems: {
    color: "white",
    fontWeight: "700",
    position: "absolute",
  },
});
