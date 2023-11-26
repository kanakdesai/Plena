import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux"
import { TouchableOpacity } from "react-native-gesture-handler";
import { addToCart, removeFromCart } from "../redux/CartReducer";


export default function ThirdView({ navigation }: any) {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    //   console.log("********************************" + res.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cart = useSelector((state:any)=>state.cart.cart)
  const dispach = useDispatch()
  console.log(cart)
  const addItemToCart = (item:any)=>{
    dispach(addToCart(item))
  }
  const removeItemFromCart=(item:any)=>{
    dispach(removeFromCart(item))
  }


  return (
    <View style={styles.ThirdContainer}>
      <Text style={styles.TitleStyle}>Recommended</Text>
      <FlatList
        style={styles.flatListStyle}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.Tile}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", {
                  price: item.price,
                  title: item.title,
                  desc: item.description,
                  rating: item.rating,
                  discount: item.discountPercentage,
                  images: item.images,
                  item: item
                })
              }
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={{
                  width: "100%",
                  height: 100,
                  alignSelf: "center",
                  resizeMode: "contain",
                  marginBottom: 10,
                }}
              />
                </TouchableOpacity>
                <View style={styles.AddtoCart}>
                    <Text style={styles.priceText}>${item.price}</Text>
                    {cart.some((value:any)=>value.id==item.id)?(
                            <Pressable onPress={()=>removeItemFromCart(item)}>
                        
                            <Image style={styles.addButtonStyle} source={require('../assets/bin.png')}></Image>
    
                        </Pressable>
                    ):(
                        <Pressable onPress={()=>addItemToCart(item)}>
                        
                        <Image style={styles.addButtonStyle} source={require('../assets/add.png')}></Image>

                    </Pressable>
                    )}
                    
                </View>
            
              <Text style={styles.titleText}>{item.title}</Text>
          
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  ThirdContainer: {
    flex: 1,
    width: "100%",

    paddingHorizontal: 10,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  TitleStyle: {
    fontSize: 30,
    fontWeight: "300",
    letterSpacing: 1,
    alignSelf: "flex-start",
  },
  Tile: {
    flexDirection: "column",
    width: "48%",
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 10,
    overflow: "hidden",
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    paddingVertical: 30,
  },
  flatListStyle: {
    flex: 1,
    width: "100%",
  },
  priceText: {
    fontWeight: "600",
  },
  titleText: {
    color: "black",
    fontWeight: "200",
  },
  AddtoCart:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addButtonStyle:{
    width: 25,
    height: 25
  }
});
