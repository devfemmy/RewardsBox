import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeCard from '../../Components/Card';
import Barcode from '../../assets/images/barcode.svg';
import CustomInput from '../../Components/CustomInput';
import CustomBtn from '../../Components/CustomBtn';

const Redemption = (props) => {
    return (
        <ScrollView style= {styles.container}>
            <Text style= {styles.textStyle}>
                Redemption
            </Text>
            <Text style= {styles.textStyle2}>
            Process your redemptions here
            </Text>
            <View style= {styles.lowerContainer}>
                <HomeCard width= {270} height= {230}  bg= "#3D1A57">
                    <View style= {styles.iconBox}>
                        <Barcode width= {70} height= {70} />
                        <Text style= {styles.textStyle3}>
                        Click to capture Barcode/QR code
                        </Text>
                    </View>
                </HomeCard>
            </View>
            <View style= {styles.inputContainer}>
                <CustomInput label= "Enter Voucher Number" />
                <View style= {{marginVertical: 20}}>
                <CustomBtn onPress= {() => props.navigation.navigate('Select Items')} bg= "#3D1A57" text= "Validate" />
                </View>

            </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        backgroundColor: '#F5F6FA'

    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textStyle2: {
        marginVertical: 5,
        opacity: 0.5
    },
    textStyle3: {
        color: '#FFFFFF',
        opacity: 0.5,
        textAlign: 'center',
        marginVertical: 15,
        paddingHorizontal: 70
    },
    lowerContainer: {
        alignItems: 'center'
    },
    iconBox: {
       height: 250 ,
       alignItems: 'center',
       justifyContent: 'center'
    }
})

export default Redemption;