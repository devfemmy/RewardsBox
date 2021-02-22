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
import Summary from '../Screens/Redemption/Offers/SummaryPage';
import Payment from '../Screens/Redemption/Offers/PaymentPage';
import ScanCard from '../Screens/DiscountCard/ScanCard';
import DiscountRedemption from '../Screens/Home/Transactions/DiscountRedemption';
import ItemsRedemptions from '../Screens/Home/Transactions/ItemsRedemption';
import RecentTransactions from '../Screens/Home/Transactions/RecentTransaction';
import Profile from '../Screens/Profile/Profile/Profile';
import ChangePassword from '../Screens/Profile/ChangePassword/ChangePassword';
import ChangePin from '../Screens/Profile/ChangePin/ChangePin';
import TransactionDetails from '../Screens/Home/Transactions/TransactionDetails';


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
             name="Rewards Box" component= {TabNav} />
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
            <Stack.Screen 
             name="Summary" component= {Summary} />
            <Stack.Screen 
             name="Payment" component= {Payment} />
            <Stack.Screen 
             name="Scan Card" component= {ScanCard} />
            <Stack.Screen 
             name="Discount Redemption" component= {DiscountRedemption} />
            <Stack.Screen 
             name="Items Redemption" component= {ItemsRedemptions} />
            <Stack.Screen 
             name="Recent Transactions" component= {RecentTransactions} />
            <Stack.Screen 
             name="Profile" component= {Profile} />
            <Stack.Screen 
             name="Change Password" component= {ChangePassword} />
            <Stack.Screen 
             name="Change Pin" component= {ChangePin} />
            <Stack.Screen 
             name="Transaction Details" component= {TransactionDetails} />
        </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNav;