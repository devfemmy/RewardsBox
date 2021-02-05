import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomBtn from '../../Components/CustomBtn';
import CustomInput from '../../Components/CustomInput';

const ForgotPassword = (props) => {
    return (
        <View style= {styles.container}>
           <View style= {styles.textContainer}>
               <Text style= {styles.textStyle}>
               Forgot your password
               </Text>
               <Text style= {styles.textStyle2}>
               Please enter your email address below to receive your password reset instructions.
               </Text>
           </View>
           <View style= {styles.inputContainer}>
                <CustomInput label= "Email address" />
                <CustomBtn onPress = {() => props.navigation.navigate('Verify Token')} text= "Send" bg= "#3D1A57" />
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

export default ForgotPassword;