import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
  const [Nama] = React.useState(null);
  const [Type] = React.useState(null);
  const [Nomor] = React.useState(null);
  const [PIN] = React.useState(null);
  return (
    <View style={{flex: 1}}>
        <View style={{
            backgroundColor:'orange', 
            flex:1, 
            justifyContent:'center',
            alignItems:'center',
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            }}>
            <Image
            source={require('./../../assets/img/logo.png')}
            style={{
            }}
            />
        </View>
        <View style={{
            flex: 2, 
            marginRight: 50,
            marginLeft: 50,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: 'center',
            borderColor: 'black',
            marginBottom: 50,
        }}>
        <Text style={{
            color: 'orange',
            fontSize: 30,
            justifyContent: 'center',
            textAlign: 'center',
            padding: 5
        }}>Register</Text>
        <TextInput
        style={{height: 40,
            margin: 12,
            marginTop: 10,
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: 'grey',
            padding: 10,}}
        value={Nama}
        placeholder="Nama"
        />
        <TextInput
        style={{height: 40,
            margin: 12,
            marginTop: 10,
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: 'grey',
            padding: 10,}}
        value={Type}
        placeholder="Type"
        />
        <TextInput
        style={{height: 40,
            margin: 12,
            marginTop: 10,
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: 'grey',
            padding: 10,}}
        value={Nomor}
        placeholder="Nomor HP"
        keyboardType="numeric"
        />
        <TextInput
        style={{height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'grey',
            padding: 10,}}
        value={PIN}
        placeholder="PIN"
        keyboardType="numeric"
        />
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}
        style={{
            justifyContent: 'center', 
            alignItems: 'center',
            paddingVertical: 15,
            marginLeft: 70,
            marginRight: 70,
            backgroundColor: 'orange',
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 2,
            }}>
            <Text style={{
                color: 'white'
            }}>Register</Text>
        </TouchableOpacity>
        
        <Text style={{
            color: 'orange',
            marginLeft: 12,
            textAlign: 'center',
            marginTop: 5
        }}>
            <Text>Sudah punya akun?  </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={{
                color: 'grey',
            }}>Login</Text>
            </TouchableOpacity>
        </Text>
        </View>
        
    </View>
  );
}

export default Register;