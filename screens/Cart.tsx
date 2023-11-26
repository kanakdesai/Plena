import { StyleSheet, Text, View, Pressable , Image, SafeAreaView, ScrollView, FlatList} from 'react-native'
import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from "../redux/CartReducer";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cart({navigation}: any) {
  const cart = useSelector((state:any)=>state.cart.cart)
  const dispach = useDispatch()
  
  const removeItemFromCart = (item: any) => {
    dispach(removeFromCart(item));
  };
  const increaseQuantity = (item:any) => {
    dispach(incrementQuantity(item));
  }
  const decreaseQuantity = (item:any) => {
    if(item.quantity == 1){
      dispach(removeFromCart(item));
    }else{
      dispach(decrementQuantity(item));
    }
  }

  const sum = cart.reduce((accumulator:any, item:any) => accumulator + item.price, 0);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.productContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 8, marginTop: 6 }}
          source={{ uri: item.thumbnail }}
        />
        <View>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text>${item.price}</Text>
        </View>
      </View>
      <Pressable
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
        }}
      >
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F8F9FB',
            borderRadius: 100,
            width: 40,
            justifyContent: 'center',
            height: 40,
          }}
          onPress={() => decreaseQuantity(item)}
        >
          <Text style={{ fontSize: 25, color: 'black', paddingHorizontal: 10 }}>-</Text>
        </Pressable>

        <Pressable>
          <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 10 }}>{item.quantity}</Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F8F9FB',
            borderRadius: 100,
            width: 40,
            justifyContent: 'center',
            height: 40,
          }}
          onPress={() => increaseQuantity(item)}
        >
          <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 10 }}>+</Text>
        </Pressable>
      </Pressable>
    </View>
  );


  return (

    <SafeAreaView style={styles.container}>
     <View style={styles.navBar}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../assets/back.png')}></Image>

        </TouchableOpacity>
        <Text style={styles.titleStyle}>Shopping Cart ({cart.length})</Text>
     </View>
     {cart.length==0?(
     <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',}}>
       <Text>Shopping cart empty</Text></View>
     )
       :(

     
     <><FlatList
          style={styles.flatListStyle}
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item: any, index: any) => index.toString()} /><View style={styles.bottomContainer}>
            <View style={styles.priceCont}>
              <Text style={styles.priceStyle}>Subtotal</Text>
              <Text style={styles.priceStyle}>${sum}</Text>
            </View>
            <View style={styles.priceCont}>
              <Text style={styles.priceStyle}>Delivery</Text>
              <Text style={styles.priceStyle}>$2.00</Text>
            </View>
            <View style={styles.priceCont}>
              <Text style={styles.priceStyle}>Total</Text>
              <Text style={styles.priceStyle}>${sum + 2}</Text>
            </View>
            <Pressable style={styles.buttonStyle}>
              <Text style={{ color: 'white' }}>Proceed to Checkout</Text>
            </Pressable>
          </View></>)}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 60
    
  },
  navBar:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 25,
    marginBottom: 20,
  },
  titleStyle:{
    fontSize: 22,
    fontWeight: '300',
    color: '#1E222B',

  },
  productContainer:{
    marginHorizontal:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    paddingVertical: 10,
    borderBottomColor: '#F8F9FB',
    borderBottomWidth: 3
  },
  productTitle:{
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 8
  },
  flatListStyle:{
    flex: 1,
    height: '20%',
    width: '100%',
    overflow: 'scroll'
  
  },
  bottomContainer:{
    height: 250,
    width: '95%',
    backgroundColor: '#F8F9FB',
    alignSelf: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
    
    
  },
  priceCont:
  {flexDirection: 'row',
  justifyContent: 'space-between', 
  width: '80%'},
  
  buttonStyle:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A4BA0',
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 20
  },
  priceStyle:{
    fontWeight: '300',
    fontSize: 15
  }

})