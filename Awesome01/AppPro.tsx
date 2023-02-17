import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    ScrollView
} from "react-native"


function AppPro(){

    const isDarkMode = useColorScheme() === 'dark'
    return(
        // <SafeAreaView >
            
            <View style={styles.cotainer}>
                <Text style={isDarkMode ? styles.whiteColor:styles.darkColor}>
                    Hello World
                </Text>
            </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteColor: {
        color: '#FFFFFF',
    },
    darkColor: {
        color: '#000000',
    }
})

export default AppPro