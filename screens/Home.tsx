import { StyleSheet, Text,View, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, ScrollViewBase } from 'react-native'
import React from 'react'
import FirstView from '../components/FirstView'
import SecondView from '../components/SecondView'
import ThirdView from '../components/ThirdView'
export default function Home({navigation}: any) {
  return (
    <View style={styles.container}>   
        <FirstView navigation={navigation}></FirstView>
        <SecondView></SecondView>
        <ThirdView navigation={navigation}></ThirdView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    firstCont:{
        // flex: 1,
        backgroundColor: '#2A4BA0',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 80
    },
    RowTitles:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    TitleStyle:{
        color: 'white',
        fontSize: 26,
        fontWeight: '500'
    },
    InputContainerStyle:{
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#153075',
        width: '100%',
        height: 66,
        borderRadius: 30,
        marginVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 40,
        gap: 10
    },
    smallTitle:{
        color: '#8891A4',
        fontWeight: '600'
    },
    smallTitle2:{
        color: 'white'
    }
})