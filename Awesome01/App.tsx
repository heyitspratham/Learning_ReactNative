
import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native'


function App(){
  return(

    <SafeAreaView>
      <View>
        <Text>Hello Guys!</Text>
        <Text>Hello Guys!</Text>
        <Text>Hello Guys!</Text>
        <Text>Hello Guys!</Text>
        <Text>Waddup guys</Text>
        <Image
        style={{height:250, width:250}}
        source={{uri: 'https://cdn.shopify.com/s/files/1/0444/4838/3127/products/415da526-1b88-4b14-b920-365ce6363967.png?v=1627592514' }}
        />
      </View>
    </SafeAreaView>
)
}

export default App;