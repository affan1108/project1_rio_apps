import { Text, View ,Image, StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export class onBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#A09A9A'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/images/logo.png')}
          style={{
            marginTop: 100
          }}
        />
        </View>
        <View style={{backgroundColor: 'orange', flex: 1, marginTop:200, borderTopLeftRadius: 70, borderTopRightRadius: 70}}>
        <View style={{flexDirection: 'row', marginTop:110, margin: 20}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}
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
          <TouchableOpacity style={{
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
    )
  }
}

export default onBoarding
// import React from "react";
// import { View, StyleSheet, Image } from "react-native";

// const ViewStyleProps = () => {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={require('./src/images/logo.png')}
//           style={{
//             marginTop: 100,
//             justifyContent: 'center'
//           }}
//         />
//         <View style={styles.top} />
//         <View style={styles.middle} />
//         <View style={styles.bottom} />
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//   },
//   top: {
//     flex: 0.4,
//     backgroundColor: "grey",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
// });

// export default ViewStyleProps;