import { Text, View ,Image, StyleSheet, TouchableOpacity, TextInput, Flat, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';
import React, { Component } from 'react'

const Meja = () => {
    const navigation = useNavigation();
    data= [1,2,3,4,5,6,7,8,9];
    barang= [
        {meja:'Meja 1',gambar:require('./../../assets/img/hijau.png')},
        {meja:'Meja 2',gambar:require('./../../assets/img/merah.png')},
        {meja:'Meja 3',gambar:require('./../../assets/img/hijau.png')},
        {meja:'Meja 4',gambar:require('./../../assets/img/hijau.png')},
        {meja:'Meja 5',gambar:require('./../../assets/img/merah.png')},
        {meja:'Meja 6',gambar:require('./../../assets/img/merah.png')},
        {meja:'Meja 7',gambar:require('./../../assets/img/hijau.png')},
        {meja:'Meja 8',gambar:require('./../../assets/img/merah.png')},
        {meja:'Meja 9',gambar:require('./../../assets/img/hijau.png')},
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
                    <FlatGrid style={{flex: 1,borderWidth:1,borderColor:'grey',margin:10,borderRadius:10}}
                    itemDimension={100}
                        data={barang}
                        renderItem={({item}) => 
                        <View style={{height: 200, width:100, borderRadius:10, marginHorizontal:10, marginBottom: 10, borderColor:'grey'}}>
                            <View style={{flex:1,marginHorizontal:10}}>
                                <View style={{justifyContent:'center',alignItems:'center',flex:1,marginVertical:10,borderRadius:10}}>
                                    <Image
                                        resizeMode='contain'
                                        style={{justifyContent:'center',alignItems:'center',flex:1,borderWidth:1,marginVertical:10,borderRadius:10}}
                                        source={item.gambar}
                                    />
                                </View>
                                <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold'}}>{item.meja}</Text>
                                </View>
                                <View style={{marginTop:20, borderColor:'orange', borderWidth:1, borderRadius:10, justifyContent:'center', alignItems:'center', paddingVertical:2, marginBottom: 10}}>
                                    <TouchableOpacity>
                                        <Text style={{color:'orange'}}>Pilih</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>}>
                    </FlatGrid>
                    <View style={{borderTopLeftRadius:20, borderTopRightRadius:20, elevation:3}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:70, paddingVertical:10, marginHorizontal:100}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text>Meja</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Icon name='user-friends'></Icon>
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
            </View>
        )
    }

export default Meja;