import {
    StyleSheet,
    Text, 
    View, 
    ScrollView, 
    FlatList,
    useColorScheme,
 } from 'react-native'
import React from 'react'

export default function FlatCards() {

  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Redd</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 14,
    },
    container: {
        margin:10,
        flex:1,
        flexDirection: 'row',
        
    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height: 100,
        borderRadius: 5,
        margin: 5,

        elevation:5,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor: '#333'
    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "#5DA3FA"
    },
    cardThree: {
        backgroundColor: "#50DBB4"
    },
})