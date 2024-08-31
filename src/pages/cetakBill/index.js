import { View, Text, Image } from 'react-native'
import React from 'react'

const Bill = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,marginHorizontal:20,marginVertical:150, borderColor:'grey', borderWidth:1, borderRadius:50}}>
            <View style={{flex:1, margin:10, flexDirection:'row', justifyContent:'center'}}>
                <Image
                style={{flex:1, margin:10, flexDirection:'row', justifyContent:'center'}}
                    source={require('./../../assets/img/logo.png')}
                    resizeMode='contain'
                />
            </View>
            <View style={{flex:1, marginHorizontal:10, flexDirection:'row', justifyContent:'space-between', marginTop:100, borderBottomWidth:1, borderTopWidth:1}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text>Pelanggan</Text></View>
                    <View><Text>Waktu</Text></View>
                    <View><Text>Kasir</Text></View>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View><Text style={{textAlign:'right'}}>Affan Hendi</Text></View>
                    <View><Text style={{textAlign:'right'}}>21-09-2022 23:58:57</Text></View>
                    <View><Text style={{textAlign:'right'}}>Alfajri</Text></View>
                </View>
            </View>
            <View style={{flex:1, marginHorizontal:10, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text>Nasi Goreng</Text></View>
                    <View><Text>Mie Goreng</Text></View>
                    <View><Text>Milk Shake</Text></View>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View><Text>x2</Text></View>
                    <View><Text>x1</Text></View>
                    <View><Text>x1</Text></View>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View><Text>20.000</Text></View>
                    <View><Text>10.000</Text></View>
                    <View><Text>15.000</Text></View>
                </View>
            </View>
            <View style={{flex:1, marginHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text>Total</Text></View>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View><Text>45.000</Text></View>
                </View>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'orange', marginHorizontal:100, marginVertical:20, flex:1, borderRadius:10}}>
                <Text style={{color:'white'}}>Cetak</Text>
            </View>
      </View>
    </View>
  )
}

export default Bill