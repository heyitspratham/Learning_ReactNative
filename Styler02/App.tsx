import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import TravelCards from './components/TravelCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        <FlatCards/>
        <TravelCards/>
        <ContactList/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    mainScreen:{
      backgroundColor: '#FFFFFF',
      height: '100%',
      width: '100%'
    }
})

export default App