import React from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SuccessIcon from '../../assets/images/success.svg';
import CustomBtn from '../../Components/CustomBtn';
import CustomFooter from '../../Components/CustomFooter';


const RedemptionReceipt = (props) => {
    return (
        <View style= {styles.container}>
            <ScrollView>
            <Text style= {{textAlign: 'right', padding: 25}}>Print</Text>
            <View style= {styles.lowerContainer}>
                <SuccessIcon width= {120} height= {100} />
                <Text style= {{color: '#1E263D', fontWeight: 'bold', marginVertical: 5}}>
                    SUCCESSFUL
                </Text>
                <Text style= {styles.opacity}>
                Your e-voucher has be successfully processed
                </Text>
            </View>
            <View>
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {{...styles.opacity, marginVertical: 5}}>
                            Time:
                        </Text>
                        <Text style= {{...styles.opacity, marginVertical: 5}}>
                        Partner Branch Name:
                        </Text>
                        <Text style= {{...styles.opacity, marginVertical: 5}}>
                        Branch Address: 
                        </Text>
                    </View>
                    <View style= {{width: '50%'}}>
                        <Text style= {styles.text}>
                        05/01/2021 - 1:53 PM
                        </Text>
                        <Text style= {styles.text}>
                        Grand Square Ikeja
                        </Text>
                        <Text style= {styles.text}>
                        Mobolaji Johnson Way Alausa Ikeja
                        </Text>
                    </View>
                </View>
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {{...styles.headerText, marginVertical: 5}}>
                        Plat Station 4 Pro x1
                        </Text>
                        <Text style= {{...styles.headerText2, marginTop: 4}}>
                        Voucher Number:
                        </Text>
                        <Text style= {{...styles.opacity}}>
                        5447GER378383IRE
                        </Text>
                    </View>
                    <View style= {{width: '50%'}}>
                        <Text style= {{...styles.text, ...styles.headerText}}>
                        150,000
                        </Text>
                        <Text style= {{...styles.text, ...styles.opacity}}>
                        Status:
                        </Text>
                        <Text style= {{...styles.text, ...styles.color}}>
                        Redeemed
                        </Text>
                    </View>
                </View>
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {{...styles.headerText, marginVertical: 5}}>
                        Plat Station 4 Pro x1
                        </Text>
                        <Text style= {{...styles.headerText2, marginTop: 4}}>
                        Voucher Number:
                        </Text>
                        <Text style= {{...styles.opacity}}>
                        5447GER378383IRE
                        </Text>
                    </View>
                    <View style= {{width: '50%'}}>
                        <Text style= {{...styles.text, ...styles.headerText}}>
                        150,000
                        </Text>
                        <Text style= {{...styles.text, ...styles.opacity}}>
                        Status:
                        </Text>
                        <Text style= {{...styles.text, ...styles.color}}>
                        Redeemed
                        </Text>
                    </View>
                </View>
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {{...styles.headerText, marginVertical: 5}}>
                        Plat Station 4 Pro x1
                        </Text>
                        <Text style= {{...styles.headerText2, marginTop: 4}}>
                        Voucher Number:
                        </Text>
                        <Text style= {{...styles.opacity}}>
                        5447GER378383IRE
                        </Text>
                    </View>
                    <View style= {{width: '50%'}}>
                        <Text style= {{...styles.text, ...styles.headerText}}>
                        150,000
                        </Text>
                        <Text style= {{...styles.text, ...styles.opacity}}>
                        Status:
                        </Text>
                        <Text style= {{...styles.text, ...styles.color2}}>
                        Cancelled
                        </Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            <CustomFooter onPress= {() => props.navigation.navigate('Home')} text= "Go To Home" />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1,
        // padding: 25
    },
    lowerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 25,
        alignItems: 'center',
        height: Dimensions.get('window').height/4.5
    },
    opacity: {
        opacity: 0.5
    },
    text: {
        textAlign: 'right',
        marginVertical: 3
    },
    headerText: {
        fontWeight: 'bold'
    },
    flexContainer: {
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#DEE0E8',
        paddingVertical: 10,
        padding: 25,
    },
    color: {
        color: '#0DA831',
        fontWeight: '500'
    },
    color2: {
        color: '#BF0B0B',
        fontWeight: '500'
    },
    footer: {
        backgroundColor: '#FFFFFF',
        minHeight: 120,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopWidth: 1,
        borderColor: '#DEE0E8',
        padding: 25
    }
});

export default RedemptionReceipt;