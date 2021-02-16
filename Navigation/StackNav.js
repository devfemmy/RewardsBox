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
import ItemDescription from '../Screens/Redemption/ItemDescription';
import ItemList from '../Screens/Redemption/ItemList';
import RedemptionReceipt from '../Screens/Redemption/RedemptionReceipt';
import Offers from '../Screens/Redemption/Offers/Offers';


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
            <Stack.Screen 
             name="Item Description" component= {ItemDescription} />
            <Stack.Screen 
             name="Item List" component= {ItemList} />
            <Stack.Screen 
             name="Redemption Receipt" component= {RedemptionReceipt} />
            <Stack.Screen 
             name="Offers" component= {Offers} />
        </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNav;