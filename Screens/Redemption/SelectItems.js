import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemCard from '../../Components/ItemCard';

const SelectItem = (props) => {
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
            </ScrollView>
            <View style= {styles.footer}>
                
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
        flexDirection: 'row'
    },
    textStyle: {
        color: '#A0A3AC'
    },
    textStyle2: {
        color: '#1E263D'
    },
    footer: {
        backgroundColor: 'white',
        height: 100
    }
});

export default SelectItem;