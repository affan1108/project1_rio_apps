import { View, Text, Image, StatusBar } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
   
  setTimeout(() => {
    navigation.dispatch(StackActions.replace('Boarding'))
  }, 3000)

  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent></StatusBar>
      <LinearGradient colors={['orange','grey']} style={{flex:1}} useAngle={true} angle={115} angleCenter={{x:0.5, y:0.5}}>
      <Image
        style={{justifyContent:'center',alignItems:'center',marginHorizontal:15, marginVertical:300}}
        source={require('./../../assets/img/logo.png')}
      />
      </LinearGradient>
    </View>
  )
}

export default SplashScreen