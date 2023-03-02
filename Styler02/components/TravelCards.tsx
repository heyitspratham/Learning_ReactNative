import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TravelCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Travel Cards</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image
            source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Hawa_Mahal_east_facade_%2814-07-2022%29.jpg'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDesc}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
            <View style={styles.lastMile}>
                <Text style={styles.cardFooter}>12 mins away</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default TravelCards

const styles = StyleSheet.create({
    heading: {
        fontSize:24,
        fontWeight: 'bold',
        margin: 14,
    },
    card: {
        margin: 25,
        height: 370,
        width: 350,
        borderRadius: 11,
    },
    elevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }

    },
    lastMile: {
        flex:1,
        alignItems: 'flex-end',
    },
    cardImage: {
        height:180,
        borderTopRightRadius: 11,
        borderTopLeftRadius: 11,
        marginBottom: 12,
    },
    cardBody: {
        flex: 1,
        flexGrow:1,
        paddingHorizontal: 15,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,

    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 6,
    },
    cardDesc: {
        color: '#242B2E',
        fontSize: 14,
        marginTop: 6,
        marginBottom: 12,
    },
    cardFooter: {
        color: '#000000',
        marginTop: 10,
        // marginLeft: 240,
    },

})