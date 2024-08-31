import React from 'react';
import { Text, View ,Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

const Tunai = () => {
    const [nominal, onChangeNumber] = React.useState(null);
    const navigation = useNavigation();
  return (
    <View style={{
        height: 100,
        width: 600,
        backgroundColor: 'orange',
    }}>
    <Icon name='comments' size={30} color="#900" />
    <Text style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize: 20,
        color: 'white'
    }}>Total Billing</Text>
    <View style={{
        height: 650,
        width: 353,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    }}>
        <Text style={{
            marginLeft: 10,
            padding: 10
        }}>
            <Text>Nomor Transaksi</Text>
            <Text style={{
                textAlign: 'right',
                marginRight: 20
            }}>#07</Text>
        </Text>
        <View style={{
            height: 100,
            width: 300,
            marginTop: 10,
            marginLeft: 23,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: '#FFA217',
            opacity: 10
        }}>
            <Text style={{
                textAlign: 'center',
                marginTop: 15
            }}>Total Tagihan</Text>
            <Text style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: 20,
                color: 'white'
            }}>Rp. 43.000</Text>
        </View>
        <View>
        <TextInput
        style={{
            marginTop: 100,
            marginRight: 25,
            marginLeft: 23,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center'
        }}
        onChangeText={onChangeNumber}
        value={nominal}
        placeholder="Masukkan Nominal"
        keyboardType="numeric"
        />
        <TextInput/>
        </View>
        <View style={{
            justifyContent: 'center'
        }}>
            <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'orange'
            }}>Uang Pas</Text>
        </View>
        <View style={{
            marginLeft: 10,
            padding: 10
        }}>
            <Text style={{
                fontWeight: 'bold'
            }}>Jumlah Lainnya</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey'
        }}>
            <Text style={{fontSize: 15}}>Rp. 20.000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingVertical: 10,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
            }}>
            <Text style={{fontSize: 15}}>Rp. 50.000</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey'
        }}>
            <Text style={{fontSize: 15}}>Rp. 100.000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingVertical: 10,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
            }}>
            <Text style={{fontSize: 15}}>Rp. 200.000</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', height: 50, marginTop: 75}}>
        <TouchableOpacity
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginLeft: 23,
            marginRight: 25,
            backgroundColor: 'orange',
            borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Bayar</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>

  );
}

export default Tunai;