import * as React from 'react';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import HomeNavigator from './Navigators/HomeNavigator';
// import {Ionicons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from '../Screens/Home/Home';
import Redemption from '../Screens/Redemption/Redemption';
import DiscountCard from '../Screens/DiscountCard/DiscountCard';
import Settings from '../Screens/Settings/Settings';







export const AuthContext = React.createContext();
const Tab = createBottomTabNavigator();
const TabNav = (props) => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
      );
    
      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
        console.log('USER', userToken)
          try {
            userToken = await AsyncStorage.getItem('token');
            console.log('what is', userToken)
            // loggedIn = await AsyncStorage.getItem('LoggedIn');
          } catch (e) {
            // Restoring token failed
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
      }, []);
    
      const authContext = React.useMemo(
        () => ({
          signIn: async data => {
                dispatch({ type: 'SIGN_IN', token: data });
           
       
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
            await AsyncStorage.setItem('LoggedIn', '0');
            const login = AsyncStorage.getItem('LoggedIn')
            console.log('33', login)
    
           
          },
          signOut: async (data) => {
            await AsyncStorage.removeItem('token')
            const logout = AsyncStorage.getItem('LoggedIn')
          dispatch({ type: 'SIGN_OUT' });
          // data.navigation.closeDrawer()
          
        },
          signUp: async data => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );
      // console.log('usertoken7', state.userToken)
   
    return (
        <AuthContext.Provider value={authContext}>
                {/* <NavigationContainer> */}
                  <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Settings') {
                          iconName = focused
                            ? 'ios-settings'
                            : 'ios-settings-outline';
                        } else if (route.name === 'Home') {
                          iconName = focused ? 'ios-home' : 'ios-home-outline';
                        }
                        else if (route.name === 'Voucher') {
                          iconName = focused ? 'ios-albums' : 'ios-albums-outline';
                        }
                        // else if (route.name === 'Exam') {
                        //   iconName = focused ? 'ios-book' : 'ios-book-outline';
                        // }
                        else if (route.name === 'Card') {
                          iconName = focused ? 'ios-card' : 'ios-card-outline';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                      },
                    })}
          
                    tabBarOptions={{
                      activeTintColor: '#2B2579',
                      inactiveTintColor: 'gray',
                      keyboardHidesTabBar: true
                    }}
                  >
                      {state.userToken == null ? (
                        <>
                        <Tab.Screen name="Home" component={HomePage} />
                        <Tab.Screen name="Voucher" component={Redemption} />
                        <Tab.Screen name="Card" component={DiscountCard} />
                        <Tab.Screen name="Settings" component={Settings} />
                        {/* <Tab.Screen name="Login" component={LoginNavigator} */}
                        {/* /> */}
                       
                      
                        </>
                      ): (<> 
                        <Tab.Screen name="Home" component={HomePage} />
                        <Tab.Screen name="Redemption" component={Redemption} />
                     
                      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
                      </>)}

                  </Tab.Navigator>
                  {/* </NavigationContainer> */}
        </AuthContext.Provider>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: 20,
        height: 20
    }
})

export default TabNav;