import { 
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
 } from 'react-native'
import React from 'react'

const ActionCards = () => {

    //function to open web urls
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text style={styles.heading}>Action Cards</Text>
      <View style={[styles.card, styles.elevated ]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
        </View>
        <Image
        source={{
            uri: 'https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366',
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText} numberOfLines={4} >Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples..</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=> openWebsite('https://github.com/heyitspratham')}>
            <Text style={styles.footerText}>My Github</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> openWebsite('https://github.com/heyitspratham')}>
            <Text style={styles.footerText}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCards

const styles = StyleSheet.create({
    heading: {
        fontSize:24,
        fontWeight: 'bold',
        margin: 14,
    },
    card: {
        borderRadius: 11,
        margin: 25,
        height: 370,
        width: 350,
        paddingHorizontal: 9,

    },
    elevated: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            height:1,
            width:1,
        }
        
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    headerText: {
        color: '#000000',
        fontWeight: 'bold',

    },
    cardImage: {
        height: 190,
        // marginHorizontal: 7,
        borderRadius: 11,
    },
    bodyContainer: {
        marginVertical: 12,

    },
    bodyText: {
        color: '#FFFFFF',

    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
    },
    footerText: {
        color: '#000000',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 4,
        elevation: 2,
        shadowOffset:{
            height: 1,
            width: 1
        }

    }

})