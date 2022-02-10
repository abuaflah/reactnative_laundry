import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Backgroundsplash, Logo } from '../../assets'

const Splash = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('MainApp');
  //   },10000)
  // }, [navigation]);

  return (
    <ImageBackground source={Backgroundsplash} style={styles.background}>
      <Image source={Logo} style={styles.logo}></Image>
    </ImageBackground>
  )

}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 255,
    height: 185
  }
})