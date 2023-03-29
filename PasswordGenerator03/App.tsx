import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * from 'yup'

const passwordSchema = yup.object().shape({
  passwordLength: yup.number()
  .min(4, 'Should be minimum of 4 characters')
  .max(16, 'Maximum can be 16 characters')
  .required('Password is required')
})

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})