import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [Nomor, onChangeText] = React.useState(null);
  const [Pin, onChangeNumber] = React.useState(null);
  return (
    <View style={{flex: 1}}>
        <StatusBar backgroundColor={'orange'} barStyle={'light-content'} translucent></StatusBar>
        <View style={{
            backgroundColor:'orange', 
            height:350,
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80
            }}>
            <Image
            source={require('./../../assets/img/logo.png')}
            style={{
                marginTop:80,
                marginHorizontal:20,
            }}
            />
            <View style={{
                marginTop:60,
            height: 400,
            width: 300,
            marginRight: 50,
            marginLeft: 50,
            backgroundColor: 'white',
            borderRadius: 20,
            justifyContent: 'center',
            borderColor: 'black',
            marginBottom: 100
        }}>
        <Text style={{
            color: 'orange',
            fontSize: 30,
            justifyContent: 'center',
            textAlign: 'center',
            padding: 5
        }}>Login</Text>
        <TextInput
        style={{height: 40,
            margin: 12,
            marginTop: 5,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,}}
        onChangeText={onChangeNumber}
        value={Nomor}
        placeholder="Nomor HP"
        keyboardType="numeric"
        />
        <TextInput
        style={{height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,}}
        onChangeText={onChangeNumber}
        value={Pin}
        placeholder="PIN"
        keyboardType="numeric"
        />
        <TouchableOpacity><Text style={{
            textAlign: 'right',
            marginRight: 12,
            padding: 5,
            color: 'orange'
        }}>Forgot your PIN</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')} 
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
            }}>Login</Text>
        </TouchableOpacity>
        
        <View style={{
            flexDirection:'row',
            color: 'orange',
            marginLeft: 12,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:10
        }}>
            <Text style={{color:'orange'}}>Belum punya akun? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                <Text style={{color: 'grey'}}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
        
        
    </View>
  );
}

export default Login;