import React from 'react';
import { Text, View ,Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Boarding = () => {

    const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#A09A9A'}}>
        <StatusBar backgroundColor={'#A09A9A'} barStyle={'light-content'} translucent></StatusBar>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
        source={require('./../../assets/img/logo.png')}
        style={{
            marginTop: 100
        }}
        />
        </View>
        <View style={{backgroundColor: 'orange', flex: 1, marginTop:200, borderTopLeftRadius: 70, borderTopRightRadius: 70}}>
        <View style={{flexDirection: 'row', marginTop:110, margin: 20}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingVertical: 20,
            marginLeft: 20,
            marginRight: 10,
            backgroundColor: 'white',
            borderRadius: 20,
            
        }}>
            <Text style={{color: 'orange', fontSize: 20}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingVertical: 20,
            marginLeft: 20,
            marginRight: 10,
            backgroundColor: 'transparent',
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 2,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Register</Text>
        </TouchableOpacity>
        </View>
        </View>

  </View>
  );
}

export default Boarding;