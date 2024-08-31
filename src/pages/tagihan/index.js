import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Total = () => {
    const navigation = useNavigation();
  return (
    <View>
    <View style={{
        height: 500,
        width: 353,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    }}>
        <View style={{marginVertical: 20,marginHorizontal: 20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                <Text>Nomor Transaksi</Text>
                <Text style={{color: 'orange'}}>#07</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:30}}>
                <View style={{height:100, width:'90%',backgroundColor:'#ffcc80', borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <View style={{marginBottom:15}}>
                        <Text>Total Tagihan</Text>
                    </View>
                    <Text style={{fontSize:20, color:'orange'}}>Rp. 43.000</Text>
                </View>
            </View>
            <View>
                <Text style={{fontWeight: 'bold'}}>
                    Pilih Pembayaran
                </Text>
            </View>
            <View style={{marginHorizontal: 15, marginVertical:10}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Tunai')}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'grey'}}>
                        <Text style={{fontWeight:'bold', marginVertical:20}}>Tunai</Text>
                        <View style={{marginLeft:80}}>
                            {/* <Text style={{color:'white',fontSize:30,marginLeft:80}}>></Text> */}
                            <Icon name='arrow-right'size={15}></Icon>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'grey'}}>
                        <View style={{flexDirection:'column', marginVertical:20}}>
                            <Text style={{fontWeight:'bold'}}>Bank Virtual Akun(Cek Otomatis)</Text>
                            <Text style={{fontSize:10}}>Menggunakan Nomer Virtual Account Bank</Text>
                        </View>
                        <View style={{marginLeft:50}}>
                            {/* <Text style={{color:'white',fontSize:30,marginLeft:80}}>></Text> */}
                            <Icon name='arrow-right'size={15}></Icon>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'grey'}}>
                        <View style={{flexDirection:'column', marginVertical:20}}>
                            <Text style={{fontWeight:'bold'}}>E - Money</Text>
                            <Text style={{fontSize:10}}>Kirim melalui E - Money pembeli</Text>
                        </View>
                        <View style={{marginLeft:50}}>
                            {/* <Text style={{color:'white',fontSize:30,marginLeft:80}}>></Text> */}
                            <Icon name='arrow-right'size={15}></Icon>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'grey'}}>
                        <View style={{flexDirection:'column', marginVertical:20}}>
                            <Text style={{fontWeight:'bold'}}>My Bitniaga</Text>
                            <Text style={{fontSize:10}}>Saldo My Bitniaga</Text>
                        </View>
                        <View style={{marginLeft:50}}>
                            {/* <Text style={{color:'white',fontSize:30,marginLeft:80}}>></Text> */}
                            <Icon name='arrow-right'size={15}></Icon>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    <View style={{
        height: 140,
        width: 393,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }}>
        <Text style={{marginLeft: 20,marginTop: 10}}>
            2 Produk
        </Text>
        <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:20,marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>
                Total Tagihan
            </Text>
            <Text style={{color: 'orange'}}>
                Rp. 43.000
            </Text>
        </View>
        <View style={{flexDirection: 'row', height: 50, marginTop:20}}>
        <TouchableOpacity
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingVertical: 10,
            marginLeft: 20,
            marginRight: 10,
            backgroundColor: 'grey',
            borderRadius: 10,
        }}>
            <Text style={{color: 'black', fontSize: 15}}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 10,
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


export default Total