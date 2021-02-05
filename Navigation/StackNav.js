import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Logo from '../assets/images/eflogo.svg';
import { View } from 'react-native';
import LoginPage from '../Screens/Login/Login';
import ForgotPassword from '../Screens/Login/ForgotPassword';
import VerifyToken from '../Screens/Login/VerifyToken';
import TabNav from './TabNav';
import SelectItem from '../Screens/Redemption/SelectItems';


// import Playquiz from '../Screens/Practise/MainQuestion';

const Stack = createStackNavigator()

const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
             name="Login" component= {LoginPage} />
            <Stack.Screen 
             name="Forgot Password" component= {ForgotPassword} />
            <Stack.Screen 
             name="Verify Token" component= {VerifyToken} />
            <Stack.Screen 
             name="Home" component= {TabNav} />
            <Stack.Screen 
             name="Select Items" component= {SelectItem} />
        </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNav;