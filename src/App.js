import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}





const App = () => {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})