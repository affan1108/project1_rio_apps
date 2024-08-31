import { Text, View ,Image, StyleSheet, TouchableOpacity, TextInput, Flat, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';
import React, { Component } from 'react'
    const Detail = () => {
        const navigation = useNavigation();
            data= [1,2,3,4,5,6],
            barang= [
                {makanan:'Nasi Goreng',harga:'10.000',gambar:require('./../../assets/img/nasi.jpeg')},
                {makanan:'Ayam Bakar',harga:'10.000',gambar:require('./../../assets/img/ayam.jpg')},
                {makanan:'Mie Goreng',harga:'10.000',gambar:require('./../../assets/img/mie.jpeg')},
                {makanan:'Kentang Goreng',harga:'10.000',gambar:require('./../../assets/img/kentang.jpg')},
                {makanan:'Martabak Manis',harga:'10.000',gambar:require('./../../assets/img/martabak.jpeg')},
                {makanan:'Bakso',harga:'10.000',gambar:require('./../../assets/img/bakso.jpeg')},
                {meja:'Meja 1',gambar:require('./../../assets/img/hijau.png')},
                {meja:'Meja 2',gambar:require('./../../assets/img/merah.png')},
                {meja:'Meja 3',gambar:require('./../../assets/img/hijau.png')},
                {meja:'Meja 4',gambar:require('./../../assets/img/hijau.png')},
                {meja:'Meja 5',gambar:require('./../../assets/img/merah.png')},
                {meja:'Meja 6',gambar:require('./../../assets/img/merah.png')},
                {meja:'Meja 7',gambar:require('./../../assets/img/hijau.png')},
                {meja:'Meja 8',gambar:require('./../../assets/img/merah.png')},
                {meja:'Meja 9',gambar:require('./../../assets/img/hijau.png')},
                {makanan: 'Ice Blend',harga: '10.000',gambar:require('./../../assets/img/IceBlend.jpeg')},
                {makanan: 'Milk Shake',harga: '15.000',gambar:require('./../../assets/img/milkshake.jpeg')},
                {makanan: 'Milk Tea',harga: '10.000',gambar:require('./../../assets/img/MilkTea.jpeg')},
                {makanan: 'Fruit Tea',harga: '10.000',gambar:require('./../../assets/img/FruitTea.jpeg')},
                {makanan: 'Cappucino',harga: '',gambar:require('./../../assets/img/cappuccino.jpeg')},
                {makanan: 'Coffee',harga: '',gambar:require('./../../assets/img/coffee.jpeg')},
            ]
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'orange'}></StatusBar>
                <ScrollView style={{flex:1,marginHorizontal:20,marginVertical:20}}>
                    <View style={{flex:1,marginVertical:10}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Meja</Text>
                        <Text>Meja : 01</Text>
                    </View>
                    <View style={{flex:1,marginVertical:20}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Makanan</Text>
                        <View style={{marginVertical:10}}>
                            <View style={{flex:1,width:'100%',height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderBottomWidth:2,borderColor:'grey',borderLeftWidth:1,borderRightWidth:1,borderRadius:10}}>
                                <View style={{justifyContent:'center',height:80,width:100,margin:20,alignItems:'center'}}>
                                    <Image
                                        style={{justifyContent:'center',height:130,width:120,alignItems:'center',flex:1,borderWidth:1,marginVertical:10,borderRadius:10}}
                                        source={require('./../../assets/img/nasi.jpeg')}
                                    />
                                </View>
                                <View style={{flexDirection:'column',marginVertical:20}}>
                                    <View style={{marginBottom:10}}>
                                        <Text>Nasi Goreng</Text>
                                    </View>
                                    <Text>Rp. 10.000 x1</Text>
                                </View>
                            </View>
                            <View style={{flex:1,width:'100%',height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderBottomWidth:2,borderColor:'grey',borderLeftWidth:1,borderRightWidth:1,borderRadius:10}}>
                                <View style={{justifyContent:'center',height:80,width:100,margin:20,alignItems:'center'}}>
                                <Image
                                        style={{justifyContent:'center',height:100,width:120,alignItems:'center',flex:1,borderWidth:1,marginVertical:10,borderRadius:10}}
                                        source={require('./../../assets/img/kentang.jpg')}
                                    />
                                </View>
                                <View style={{flexDirection:'column',marginVertical:20}}>
                                    <View style={{marginBottom:10}}>
                                        <Text>Kentang Goreng</Text>
                                    </View>
                                    <Text>Rp. 10.000 x1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>Minuman</Text>
                        <View style={{marginVertical:10}}>
                            <View style={{flex:1,width:'100%',height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderBottomWidth:2,borderColor:'grey',borderLeftWidth:1,borderRightWidth:1,borderRadius:10}}>
                                <View style={{justifyContent:'center',height:80,width:100,margin:20,alignItems:'center',borderColor:'black'}}>
                                <Image
                                    style={{justifyContent:'center',height:130,width:120,alignItems:'center',flex:1,borderWidth:1,marginVertical:10,borderRadius:10}}
                                    source={require('./../../assets/img/nasi.jpeg')}
                                />
                                </View>
                                <View style={{flexDirection:'column',marginVertical:20}}>
                                    <View style={{marginBottom:10}}>
                                        <Text>Milk Shake</Text>
                                    </View>
                                    <Text>Rp. 10.000 x1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    height: 140,
                    width: '100%',
                    backgroundColor: 'white',
                    borderColor: 'grey',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    elevation:10,
                    borderColor:'grey',
                    borderTopWidth:1,
                }}>
                    <Text style={{marginLeft: 20,marginTop: 10}}>
                        3 Produk
                    </Text>
                    <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:20,marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Total Tagihan
                        </Text>
                        <Text style={{color: 'orange'}}>
                            Rp. 30.000
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', height: 50, marginTop:20}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Transaksi')}
                        style={{
                            flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            paddingVertical: 10,
                            marginLeft: 20,
                            marginRight: 10,
                            backgroundColor: '#eeeeee',
                            borderRadius: 10,
                        }}>
                            <Text style={{color: 'black', fontSize: 15}}>Simpan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Total')}
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
        )
    }

    export default Detail;