import React from 'react';
import { Image } from 'react-native';
import { Text, View, StyleSheet} from 'react-native';
import ItemCard from '../../Components/ItemCard';



const DiscountCard = (props) => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.boldText}>
                Discount Card Redemption
            </Text>
            <Text style= {styles.opacity}>
            Select program and process your discount card redemptions here
            </Text>
           <ItemCard
           onPress= {() => props.navigation.navigate('Scan Card', {
               source : require('../../assets/images/image5.png'), title: 'Sigma Prime'
           })} 
           minHeight= {60} borderRadius= {15} bg= "white">
                <View style= {styles.flexContainer}>
                    <Image 
                    source= {require('../../assets/images/image5.png')}
                    style= {styles.imageStyle} />
                    <View style= {{width: '50%'}}>
                        <Text style= {{fontSize: 17, fontWeight: 'bold'}}>
                        Sigma Prime
                        </Text>
                    </View>
                </View>
           </ItemCard>
           <ItemCard
            onPress= {() => props.navigation.navigate('Scan Card', {
            source : require('../../assets/images/image6.png'), title: 'Visa Loyalty'
           })} 
           minHeight= {60} borderRadius= {15} bg= "white">
                <View style= {styles.flexContainer}>
                    <Image 
                    source= {require('../../assets/images/image6.png')}
                    style= {styles.imageStyle} />
                    <View style= {{width: '50%'}}>
                        <Text style= {{fontSize: 17, fontWeight: 'bold'}}>
                        Visa Loyalty
                        </Text>
                    </View>
                </View>
           </ItemCard>
           <ItemCard 
            onPress= {() => props.navigation.navigate('Scan Card', {
            source : require('../../assets/images/image7.png'), title: 'Airtel Africa Loyalty'
            })} 
           minHeight= {60} borderRadius= {15} bg= "white">
                <View style= {styles.flexContainer}>
                    <Image 
                    source= {require('../../assets/images/image7.png')}
                    style= {styles.imageStyle} />
                    <View style= {{width: '50%'}}>
                        <Text style= {{fontSize: 17, fontWeight: 'bold'}}>
                        Airtel Africa Loyalty
                        </Text>
                    </View>
                </View>
           </ItemCard>
           <ItemCard 
            onPress= {() => props.navigation.navigate('Scan Card', {
            source : require('../../assets/images/image8.png'), title: 'Raddison Rewards'
            })} 
           minHeight= {60} borderRadius= {15} bg= "white">
                <View style= {styles.flexContainer}>
                    <Image 
                    source= {require('../../assets/images/image8.png')}
                    style= {styles.imageStyle} />
                    <View style= {{width: '50%'}}>
                        <Text style= {{fontSize: 17, fontWeight: 'bold'}}>
                        Radisson Rewards
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
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    imageStyle: {
        height: 40,
        width: 100,
        resizeMode: 'contain'
    }
});

export default DiscountCard;