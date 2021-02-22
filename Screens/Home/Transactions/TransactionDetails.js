import React from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomFooter from '../../../Components/CustomFooter';



const TransactionDetails = (props) => {
    return (
        <View style= {styles.container}>
            <ScrollView>
            <View style= {{paddingVertical: 20}}>
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
                        <Text style= {{...styles.opacity, marginVertical: 5}}>
                        Order Number: 
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
                        <Text style= {styles.text}>
                        123456
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
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {{...styles.headerText, marginVertical: 5, fontSize: 18}}>
                        Total Cost
                        </Text>
                    </View>
                    <View style= {{width: '50%'}}>
                        <Text style= {{...styles.text, ...styles.headerText, fontSize: 18}}>
                        150,000
                        </Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            <CustomFooter onPress= {() => props.navigation.navigate('Home')} text= "Print" />

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

export default TransactionDetails;