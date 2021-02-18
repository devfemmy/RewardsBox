import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeCard from '../../Components/Card';
import Barcode from '../../assets/images/barcode.svg';
import CustomInput from '../../Components/CustomInput';
import CustomBtn from '../../Components/CustomBtn';
import ItemCard from '../../Components/ItemCard';
import { Image } from 'react-native';

const ScanCard = (props) => {
    const {source, title} = props.route.params;
    return (
        <ScrollView style= {styles.container}>
            <ItemCard
           minHeight= {60} borderRadius= {15} bg= "white">
                <View style= {styles.flexContainer}>
                    <Image 
                    source= {source}
                    style= {styles.imageStyle} />
                    <View style= {{width: '50%'}}>
                        <Text style= {{fontSize: 17, fontWeight: 'bold'}}>
                       {title}
                        </Text>
                    </View>
                </View>
           </ItemCard>
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
                <CustomInput bg= "white" label= "Enter Barcode" />
                <View style= {{marginVertical: 20}}>
                <CustomBtn onPress= {() => props.navigation.navigate('Offers')} bg= "#3D1A57" text= "Validate" />
              
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
})

export default ScanCard;