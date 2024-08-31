import { Text, View ,Image, StyleSheet, TouchableOpacity, TextInput, Flat, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';
import React, { Component } from 'react'
const Transaksi = () => {
    const navigation = useNavigation();
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'orange'}></StatusBar>
                <View style={{flex:1,borderWidth:1,borderColor:'grey',margin:10,borderRadius:10,marginHorizontal:20}}>
                    <View style={{flex:1,margin:10}}>
                        <View style={{height:70,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderBottomWidth:1,marginBottom:10}}>
                            <View style={{flexDirection:'column',borderRightWidth:1,borderRightColor:'white',justifyContent:'center',alignItems:'center',width:100,margin:10}}>
                                <Text style={{fontWeight:'bold'}}>Hari Ini</Text>
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:120,marginLeft:45}}>
                                <Text style={{fontWeight:'bold'}}>2 TRANSAKSI</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#e0e0e0',height:70,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginBottom:10}}>
                            <View style={{flexDirection:'column',borderRightWidth:1,borderRightColor:'grey',justifyContent:'center',alignItems:'center',width:100,margin:10}}>
                                <Text style={{color:'black'}}>JUMLAH</Text>
                                <Text style={{color:'black'}}>Rp. 45.000</Text>
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:120,marginLeft:45}}>
                                <Text style={{color:'black'}}>NO. TRANSAKSI</Text>
                                <Text style={{color:'black'}}>07</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#e0e0e0',height:70,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginBottom:10}}>
                            <View style={{flexDirection:'column',borderRightWidth:1,borderRightColor:'grey',justifyContent:'center',alignItems:'center',width:100,margin:10}}>
                                <Text style={{color:'black'}}>JUMLAH</Text>
                                <Text style={{color:'black'}}>Rp. 45.000</Text>
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:120,marginLeft:45}}>
                                <Text style={{color:'black'}}>NO. TRANSAKSI</Text>
                                <Text style={{color:'black'}}>07</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{borderTopLeftRadius:20, borderTopRightRadius:20, elevation:1,height:200}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:70, paddingVertical:10, marginHorizontal:20}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text>Total Tagihan</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text>Rp. 43.000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Bill')}
                        style={{
                            flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginHorizontal:20,
                            backgroundColor: '#e0e0e0',
                            borderRadius: 10,
                        }}>
                            <Text style={{color: 'black', fontSize: 15}}>Cetak Bill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginHorizontal:10,
                            backgroundColor: '#e0e0e0',
                            borderRadius: 10,
                            }}>
                            <Text style={{color: 'black', fontSize: 15}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', height: 60}}>
                        <TouchableOpacity
                        style={{
                            flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginRight:10,
                            marginLeft: 20,
                            marginTop:10,
                            backgroundColor: 'orange',
                            borderRadius: 10,
                        }}>
                            <Text style={{color: 'white', fontSize: 15}}>Bayar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
 }
 export default Transaksi;
