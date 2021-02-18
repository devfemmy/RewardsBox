import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomBtn from '../../Components/CustomBtn';
import CustomInput from '../../Components/CustomInput';

const LoginPage = (props) => {
    return (
        <View style= {styles.container}>
           <View style= {styles.textContainer}>
               <Text style= {styles.textStyle}>
                   Welcome Back!
               </Text>
               <Text style= {styles.textStyle2}>
               Sign in to your account
               </Text>
           </View>
           <View style= {styles.inputContainer}>
                <CustomInput bg= "white" label= "Email address" />
                <CustomInput bg= "white" secureTextEntry label= "Password" />
                <Text onPress= {() => props.navigation.navigate('Forgot Password')} style= {styles.textStyle3}>Forgot Password?</Text>
                <CustomBtn onPress= {() => props.navigation.navigate('Rewards Box')} text= "Sign In" bg= "#3D1A57" />
           </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25

    },
    textStyle: {
       color: '#1E263D',
       fontSize: 20,
       fontWeight: 'bold' 
    },
    textContainer: {
        marginVertical: 20
    },
    textStyle2: {
        color: '#A0A3AC',
        marginVertical: 5
    },
    textStyle3: {
        color: '#3D1A57',
        textAlign: 'right',
        marginBottom: 25
    }
})

export default LoginPage;