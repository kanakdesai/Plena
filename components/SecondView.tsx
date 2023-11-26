import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function SecondView() {
  return (
    <View style={styles.SecondCont}>
        <View style={styles.cardStyle}>
            <Image source={require('../assets/imageIcon.png')}></Image>
            <View>
                <Text style={styles.title1}>Get</Text>
                <Text style={styles.title2}>50% off</Text>
                <Text style={styles.title3}>On first 03 order</Text>
            </View>
        </View>
        <View style={styles.cardStyle2}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    SecondCont:{
        // flex: 1,
       flexDirection: 'row',
        width: '100%',
        height: '22%',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 20,
        gap: 20
    },
    cardStyle:{
        flex: 1,
        width: '95%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#F9B023',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 30
    },
    cardStyle2:{
        flex: 0.2,
        width: '15%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#FFBC6E'
    },
    title1:{
        fontSize: 25,
        color: 'white',
        fontWeight: '200'
    },
    title2:{
        fontSize: 30,
        color: 'white',
        fontWeight: '700'
    },
    title3:{
        fontSize: 10,
        color: 'white',
        fontWeight: '400'
    }
})