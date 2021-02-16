import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet,Switch, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomBtn from '../../Components/CustomBtn';
import CustomInput from '../../Components/CustomInput';
import ItemCard from '../../Components/ItemCard';

const SelectItem = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    return (
        <View style = {styles.container}>
            <ScrollView style= {styles.lowerCont}>
                <ItemCard bg= "white">
                    <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {styles.textStyle}>Order Date:</Text>
                        <Text style= {styles.textStyle2}>05/01/2021 11:54 AM</Text>
                    </View>
                    <View>
                        <Text style= {styles.textStyle}>Order Number:</Text>
                        <Text style= {styles.textStyle2}>4546</Text>
                    </View>
                    </View>
                </ItemCard>
                <ItemCard onPress= {() => props.navigation.navigate('Item Description')} minHeight= {150} bg= "white">
                    <View style= {styles.flexContainer}>
                        <Image 
                        style= {styles.imageStyle}
                        source= {require('../../assets/images/img1.png')} />
                    <View style= {{width: '65%'}}>
                        <Text style= {styles.bold}>Plat Station 4 Pro x2</Text>
                        <Text style= {styles.opacity}>View Description</Text>
                        <Text style= {{...styles.opacity, marginTop: 10}}>Voucher Number:</Text>
                        <Text style= {styles.bold}>5447GER378383IRE</Text>
                    </View>
                    </View>
                    <View style= {styles.borderedContainer}>
                        <View style= {styles.flexContainer}>
                            <Text style= {styles.bold}>Available?</Text>
                            <View>
                            <Switch
                                    trackColor={{ false: "#A0A3AC", true: "#FCB017" }}
                                    thumbColor={isEnabled2 ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#A0A3AC"
                                    onValueChange={toggleSwitch2}
                                    value={isEnabled2}
                                />
                            </View>
                        </View>
                        {isEnabled2 ?<View style= {{marginHorizontal: 15}}>
                            <CustomInput placeholder= "Unit Price" bg= "#F5F4F8" />
                        </View> : null}

                    </View>
                </ItemCard>
                <ItemCard  onPress= {() => props.navigation.navigate('Item Description')} minHeight= {150} bg= "white">
                    <View style= {styles.flexContainer}>
                        <Image 
                        style= {styles.imageStyle}
                        source= {require('../../assets/images/img2.png')} />
                    <View style= {{width: '65%'}}>
                        <Text style= {styles.bold}>Plat Station 4 Pro x2</Text>
                        <Text style= {styles.opacity}>View Description</Text>
                        <Text style= {{...styles.opacity, marginTop: 10}}>Voucher Number:</Text>
                        <Text style= {styles.bold}>5447GER378383IRE</Text>
                    </View>
                    </View>
                    <View style= {styles.borderedContainer}>
                        <View style= {styles.flexContainer}>
                            <Text style= {styles.bold}>Available?</Text>
                            <View>
                            <Switch
                                    trackColor={{ false: "#A0A3AC", true: "#FCB017" }}
                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#A0A3AC"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                        {isEnabled ?<View style= {{marginHorizontal: 15}}>
                            <CustomInput placeholder= "Unit Price" bg= "#F5F4F8" />
                        </View> : null}

                    </View>
                </ItemCard>
            </ScrollView>
            <View style= {styles.footer}>
                <CustomBtn onPress= {() => props.navigation.navigate('Item List')} bg= "#3D1A57" text= "Redeem" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1
    },
    lowerCont: {
        padding: 25,
    },
    flexContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
    },
    textStyle: {
        color: '#A0A3AC'
    },
    textStyle2: {
        color: '#1E263D'
    },
    opacity: {
        opacity: 0.5
    },
    bold: {
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: 'white',
        height: 120,
        padding: 15,
        paddingVertical: 20
    },
    imageStyle: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    borderedContainer: {
        borderColor: '#E7E9F2',
        borderTopWidth: 1,
        marginVertical: 10
    }
});

export default SelectItem;