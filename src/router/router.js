import React ,{useEffect}from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Boarding, Login, Register, Dashboard, Total, Minuman, Meja, SplashScreen, Detail, Transaksi, Bill, Tunai} from '../pages';

// import { AuthContext } from '../config/context';
// import { myColor } from '../assets/color';
// import { useDispatch, useSelector } from 'react-redux'
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Router = (props) => {

const Stack = createNativeStackNavigator();

    return (
        // <AuthContext.Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={SplashScreen}>
                <Stack.Screen 
                        name="SplashScreen" 
                        component={SplashScreen} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                    <Stack.Screen 
                        name="Boarding" 
                        component={Boarding} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Register" 
                        component={Register} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Dashboard" 
                        component={Dashboard} 
                        options={{
                            // headerTitle:'Pesanan',
                            // headerStyle:{
                            //     backgroundColor:'orange'
                            // },
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Total" 
                        component={Total} 
                        options={{
                            headerTitle:'Pembayaran',
                            headerStyle:{
                                backgroundColor:'orange'
                            },
                            headerShown: true,
                            statusBarTranslucent: true,
                        }}/>
                        <Stack.Screen 
                        name="Minuman" 
                        component={Minuman} 
                        options={{
                            // headerTitle:'Minuman',
                            // headerStyle:{
                            //     backgroundColor:'orange'
                            // },
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Meja" 
                        component={Meja} 
                        options={{
                            // headerTitle:'Meja',
                            // headerStyle:{
                            //     backgroundColor:'orange'
                            // },
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Detail" 
                        component={Detail} 
                        options={{
                            headerTitle:'Detail Pesanan',
                            headerStyle:{
                                backgroundColor:'orange'
                            },
                            headerShown: true,
                        }}/>
                        <Stack.Screen 
                        name="Transaksi" 
                        component={Transaksi} 
                        options={{
                            headerTitle:'Keranjang Pesanan',
                            headerStyle:{
                                backgroundColor:'orange'
                            },
                            headerShown: true,
                        }}/>
                        <Stack.Screen 
                        name="Bill" 
                        component={Bill} 
                        options={{
                            headerTitle:'Keranjang Pesanan',
                            headerStyle:{
                                backgroundColor:'orange'
                            },
                            headerShown: false,
                        }}/>
                        <Stack.Screen 
                        name="Tunai" 
                        component={Tunai} 
                        options={{
                            headerTitle:'Pembayaran Tunai',
                            headerStyle:{
                                backgroundColor:'orange'
                            },
                            headerShown: false,
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        // </AuthContext.Provider>
        // bottom navigation?
   
    );
}
export default Router;