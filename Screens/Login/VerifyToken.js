import React, { useState } from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomBtn from '../../Components/CustomBtn';


const VerifyToken = (props) => {
    const [code, setCode] = useState('');

    const storeCode = (code) => {
        setTimeout(function(){ alert(code); }, 5000);
    }
    return (
        <ScrollView>
            <View style= {styles.firstContainer}>
                <Text style= {{color: 'black', fontWeight: 'bold', fontSize: 20, marginVertical: 10}}>
                Verify Phone Number
                </Text>
                <Text style= {styles.textStyle}>
                We have sent your 4 digit code to manager@spar.com. 
                Kindly input the code on the form below to reset your password
                </Text>
            </View>
            <View style= {styles.lowerContainer}>
                <Text style= {{textAlign: 'center'}}>Enter Code</Text>
                <View style= {styles.smoothPin}>
                    <SmoothPinCodeInput
                        cellStyle={{
                            borderWidth: 2,
                            borderColor: '#DEE0E8',
                            backgroundColor: 'white',
                            // width: 60,
                            // height: 60
                        }}
                        cellStyleFocused={{
                            borderColor: '#FCB017',
                        }}
                        // onFulfill= {() => setCode(code)}
                        restrictToNumbers
                        codeLength= {6}
                        value={code}
                        onTextChange={(code) => setCode(code)}
                        />
                </View>

                    <View>
                        <Text style= {styles.textStyle3}>Didnt receive the code?</Text>
                        <Text style= {styles.textStyle4}>Try resend again</Text>
                    </View>
            </View>
            <View style= {styles.footer}>
                <CustomBtn bg= "#3D1A57" onPress= {() => null} text= "Continue" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFAFF'
    },
    firstContainer: {
        padding: 25,
        marginVertical: 30
    },
    textStyle: {
        color: '#858693',
        fontSize: 15
    },
    textStyle3: {
        textAlign: 'center',
        color: '#858693',
        marginTop: 20

    },
    textStyle4: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    lowerContainer: {
        padding: 25,
        height: Dimensions.get('window').height/2
    },
    smoothPin: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    footer: {
        paddingHorizontal: 25
    }
})

export default VerifyToken;
