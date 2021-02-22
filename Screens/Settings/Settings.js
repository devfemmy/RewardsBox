import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ItemCard from '../../Components/ItemCard';
import ProfileIcon from '../../assets/images/profile.svg'
import PasswordIcon from '../../assets/images/password.svg';
import PinIcon from '../../assets/images/pin.svg'
import LogoutIcon from '../../assets/images/logout.svg'


const Settings = (props) => {
    return (
        <View style= {styles.container}>
           <ItemCard
           onPress= {() => props.navigation.navigate('Profile')} 
           minHeight= {80}
           bg= "white" borderRadius= {10}>
               <View style= {styles.flexContainer}>
                    <ProfileIcon width= {50} height= {50} />
                    <View style= {{width: '75%'}}>
                        <Text style= {styles.textStyle}>
                            Profile
                        </Text>
                        <Text style= {styles.opacity}>
                            Edit your profile here
                        </Text>
                    </View>
               </View>
           </ItemCard>
           <ItemCard 
            onPress= {() => props.navigation.navigate('Change Password')} 
           minHeight= {80}
           bg= "white" borderRadius= {10}>
               <View style= {styles.flexContainer}>
                    <PasswordIcon width= {50} height= {50} />
                    <View style= {{width: '75%'}}>
                        <Text style= {styles.textStyle}>
                            Change Password
                        </Text>
                        <Text style= {styles.opacity}>
                            Change your password here
                        </Text>
                    </View>
               </View>
           </ItemCard>
           <ItemCard
           onPress= {() => props.navigation.navigate('Change Pin')}  
           minHeight= {80}
           bg= "white" borderRadius= {10}>
               <View style= {styles.flexContainer}>
                    <PinIcon width= {50} height= {50} />
                    <View style= {{width: '75%'}}>
                        <Text style= {styles.textStyle}>
                            Change Pin
                        </Text>
                        <Text style= {styles.opacity}>
                            Change your pin here
                        </Text>
                    </View>
               </View>
           </ItemCard>
           <ItemCard 
           minHeight= {80}
           bg= "white" borderRadius= {10}>
               <View style= {styles.flexContainer}>
                    <LogoutIcon width= {50} height= {50} />
                    <View style= {{width: '75%'}}>
                        <Text style= {styles.textStyle}>
                            Logout
                        </Text>
                        <Text style= {styles.opacity}>
                            Logout of the application
                        </Text>
                    </View>
               </View>
           </ItemCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1,
        padding: 25
    },
    opacity: {
        opacity: 0.5
    },
    textRight: {
        textAlign: 'right'
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingVertical: 15
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Settings;