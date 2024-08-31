// import React from 'react';
import { Text, View ,Image, StyleSheet, TouchableOpacity, TextInput, Flat, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';
import React, { Component } from 'react'
import Minuman from '../minuman';
    const Dashboard = () => {
        const navigation = useNavigation();
        data=[1,2,3,4,5,6];
        barang=[
            {makanan:'Nasi Goreng',harga:'10.000',gambar:require('./../../assets/img/nasi.jpeg')},
            {makanan:'Ayam Bakar',harga:'10.000',gambar:require('./../../assets/img/ayam.jpg')},
            {makanan:'Mie Goreng',harga:'10.000',gambar:require('./../../assets/img/mie.jpeg')},
            {makanan:'Kentang Goreng',harga:'10.000',gambar:require('./../../assets/img/kentang.jpg')},
            {makanan:'Martabak Manis',harga:'10.000',gambar:require('./../../assets/img/martabak.jpeg')},
            {makanan:'Bakso',harga:'10.000',gambar:require('./../../assets/img/bakso.jpeg')},
        ]
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'orange'}></StatusBar>
                <View style={{height:80,flexDirection:'row',backgroundColor:'orange',alignItems:'center',marginTop:20}}>
                    <View style={{justifyContent:'flex-start',alignItems:'center',marginHorizontal:30}}>
                        <Icon name='bars' size={20} color='white'></Icon>
                    </View>
                    <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20}}>Pesanan</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',marginHorizontal:30}}>
                        <Icon name='shopping-cart' size={20} color='white'></Icon>
                    </View>
                </View>
                <View style={{paddingVertical:10,backgroundColor:'#ffcc80',elevation:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10,marginHorizontal:30}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
                            <Text style={{fontSize:20,color:'white'}}>Makanan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Minuman')}>
                            <Text style={{fontSize:20,color:'white'}}>Minuman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Meja')}>
                            <Text style={{fontSize:20,color:'white'}}>Meja</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <FlatGrid style={{flex: 1}}
                    itemDimension={150}
                        data={barang}
                        renderItem={({item}) => 
                        <View style={{height: 250, width:150, margin:20, borderRadius:10, borderWidth:1, marginBottom: 10, borderBottomWidth:2, borderColor:'grey'}}>
                            <View style={{flex:1,marginHorizontal:10}}>
                                <View style={{justifyContent:'center',alignItems:'center',flex:1,marginVertical:10,borderRadius:10}}>
                                    <Image
                                        style={{justifyContent:'center',height:120,width:120,alignItems:'center',flex:1,borderWidth:1,marginVertical:10,borderRadius:10}}
                                        source={item.gambar}
                                        // source={require('./../../assets/img/ayam.jpg')}
                                    />
                                </View>
                                <View style={{marginTop:10,justifyContent:'center', alignItems:'baseline'}}>
                                    <Text style={{fontWeight:'bold'}}>{item.makanan}</Text>
                                    <Text style={{fontWeight:'bold'}}>{item.harga}</Text>
                                </View>
                                <View style={{marginTop:20, borderColor:'orange', borderWidth:1, borderRadius:10, justifyContent:'center', alignItems:'center', paddingVertical:2, marginBottom: 10}}>
                                    <TouchableOpacity>
                                        <Text style={{color:'orange'}}>Tambah</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>}>
                    </FlatGrid>
                </View>
                <View style={{borderTopLeftRadius:20, borderTopRightRadius:20, elevation:3}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:70, paddingVertical:10, marginHorizontal:100}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text>Meja</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Icon name='user-friends' size={20}></Icon>
                            <Text>Pelanggan</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'orange',height:70,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <View style={{flexDirection:'column',borderRightWidth:1,borderRightColor:'white',justifyContent:'center',alignItems:'center',width:100,margin:10}}>
                        <Text style={{color:'white'}}>No. Order</Text>
                        <Text style={{color:'white'}}>07</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:20,marginLeft:20}}>Lihat Pesanan</Text>
                                <View style={{marginLeft:80}}>
                                    {/* <Text style={{color:'white',fontSize:30,marginLeft:80}}>></Text> */}
                                    <Icon name='arrow-right'size={20} color='white'></Icon>
                                </View>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
 export default Dashboard;



