import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CustomBtn from '../../../Components/CustomBtn';
import ItemCard from '../../../Components/ItemCard';
import OfferCard from '../../../Components/OfferCard';


const RecentTransactions = (props) => {
    return (
        <View style= {styles.container}>
            <OfferCard minHeight= {120} bg= "white">
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {styles.opacity}>
                            Date:
                        </Text>
                        <Text>
                        2021-01-05 14:35:26
                        </Text>
                    </View>
                    <View style= {{width: '30%'}}>
                        <CustomBtn
                        onPress= {() => props.navigation.navigate('Transaction Details')} 
                        borderRadius= {6} text= "View" bg= "#3D1A57" />
                    </View>
                </View>
                <View style= {{...styles.flexContainer, ...styles.bordered}}>
                    <View>
                        <Text style= {styles.opacity}>
                            Total Cost:
                        </Text>
                        <Text>
                        ₦7,696
                        </Text>
                    </View>
                    <View>
                        <Text style= {styles.opacity}>
                            Order No:
                        </Text>
                        <Text>
                        4596
                        </Text>
                    </View>
                    <View>
                        <Text style= {styles.opacity}>
                            Total Items:
                        </Text>
                        <Text>
                        5
                        </Text>
                    </View>
                </View>
            </OfferCard>
            <OfferCard minHeight= {120} bg= "white">
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {styles.opacity}>
                            Date:
                        </Text>
                        <Text>
                        2021-01-05 14:35:26
                        </Text>
                    </View>
                    <View style= {{width: '30%'}}>
                        <CustomBtn
                        onPress= {() => props.navigation.navigate('Transaction Details')} 
                        borderRadius= {6} text= "View" bg= "#3D1A57" />
                    </View>
                </View>
                <View style= {{...styles.flexContainer, ...styles.bordered}}>
                    <View>
                        <Text style= {styles.opacity}>
                            Total Cost:
                        </Text>
                        <Text>
                        ₦7,696
                        </Text>
                    </View>
                    <View>
                        <Text style= {styles.opacity}>
                            Order No:
                        </Text>
                        <Text>
                        4596
                        </Text>
                    </View>
                    <View>
                        <Text style= {styles.opacity}>
                            Total Items:
                        </Text>
                        <Text>
                        5
                        </Text>
                    </View>
                </View>
            </OfferCard>
            <OfferCard minHeight= {120} bg= "white">
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {styles.opacity}>
                            Date:
                        </Text>
                        <Text>
                        2021-01-05 14:35:26
                        </Text>
                    </View>
                    <View style= {{width: '30%'}}>
                        <CustomBtn
                        onPress= {() => props.navigation.navigate('Transaction Details')} 
                        borderRadius= {6} text= "View" bg= "#3D1A57" />
                    </View>
                </View>
                <View style= {{...styles.flexContainer, ...styles.bordered}}>
                    <View>
                        <Text style= {styles.opacity}>
                            Total Cost:
                        </Text>
                        <Text>
                        ₦7,696
                        </Text>
                    </View>
                    <View>
                        <Text style= {styles.opacity}>
                            Order No:
                        </Text>
                        <Text>
                        4596
                        </Text>
                    </View>
                    <View>
                        <Text style= {styles.opacity}>
                            Total Items:
                        </Text>
                        <Text>
                        5
                        </Text>
                    </View>
                </View>
            </OfferCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        padding: 25,
        flex: 1
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
        // alignItems: 'center',
        padding: 20,
        paddingVertical: 15
    },
    bordered: {
        borderTopColor: '#E7E9F2',
        borderTopWidth: 1
    }
});

export default RecentTransactions;