import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
// @ts-ignore
import ViewSlider from "react-native-view-slider";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartReducer";

export default function ProductDetails({ navigation, params, route }: any) {
  const { title, price, desc, rating, discount, images, item } = route.params;
  console.log(item);
  const words = title.split(" ");
  const firstWord = words.shift();
  const restOfString = words.join(" ");

  const cart = useSelector((state: any) => state.cart.cart);
  const dispach = useDispatch();
  console.log(cart);
  const addItemToCart = (item: any) => {
    dispach(addToCart(item));
  };
  const removeItemFromCart = (item: any) => {
    dispach(removeFromCart(item));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.RowView}>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../assets/back.png")}></Image>
        </TouchableOpacity>
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
      <View style={styles.topCont}>
        <View style={{ width: "100%" }}>
          <Text style={styles.title2}>{firstWord}</Text>
          <Text style={styles.title1}>{restOfString}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginTop: 20,
          }}
        >
          <Rating
            ratingCount={5}
            startingValue={rating}
            imageSize={20}
            style={{ paddingVertical: 0, alignSelf: "flex-start" }}
          />
          <Text style={{ color: "gray", fontWeight: "300" }}>
            {" "}
            {rating} Stars
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", height: 200 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((imageUrl: string, index: any) => (
            <Image
              key={index}
              source={{ uri: imageUrl }}
              style={styles.image}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.priceStyle}>${price}</Text>
        <Text style={styles.pieceStyle}>/Piece</Text>

        <View style={styles.pillCont}>
          <Text style={{ color: "white" }}>{discount}% OFF</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {cart.some((value: any) => value.id == item.id) ? (
          <Pressable
            onPress={() => removeItemFromCart(item)}
            style={styles.hollowButton}
          >
            <Text style={{ color: "#2A4BA0", fontSize: 15, fontWeight: "600" }}>
              Remove
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => addItemToCart(item)}
            style={styles.hollowButton}
          >
            <Text style={{ color: "#2A4BA0", fontSize: 15, fontWeight: "600" }}>
              Add to Cart
            </Text>
          </Pressable>
        )}

        <View style={styles.filledButton}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
            Buy Now
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          marginTop: 20,
          alignItems: "flex-start",
          gap: 10,
          marginBottom: 100,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Details</Text>
        <Text style={{ fontSize: 18, fontWeight: "300", color: "#8891A5" }}>
          {desc}
        </Text>
      </View>
      {/* <Text>{title}</Text>
      <Text>{price}</Text>
      <Text>{rating}</Text>
      <Text>{discount}</Text>
      <Text>{desc}</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 60,
    backgroundColor: "white",
  },
  RowView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  BackButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F8F9FB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  image: {
    width: 400,
    height: 200,

    resizeMode: "contain",
  },
  topCont: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  title1: {
    fontSize: 56,
    fontWeight: "600",
  },
  title2: {
    fontSize: 56,
    fontWeight: "300",
  },

  priceStyle: {
    color: "#2A4BA0",
    fontWeight: "600",
    fontSize: 18,
  },
  pieceStyle: {
    color: "#2A4BA0",
    fontWeight: "400",
    fontSize: 18,
  },
  pillCont: {
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: "#2A4BA0",
    borderRadius: 30,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  hollowButton: {
    width: 150,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    alignItems: "center",
    justifyContent: "center",
  },
  filledButton: {
    width: 150,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A4BA0",
  },
  cartItems: {
    color: "white",
    fontWeight: "700",
    position: "absolute",
  },
});
