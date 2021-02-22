import React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomFooter from '../../../Components/CustomFooter';
import CustomInput from '../../../Components/CustomInput';


const ChangePin = (props) => {
    return (
        <View style= {styles.container}>
            <ScrollView style= {{padding: 25}}>
                <Text style= {styles.textStyle}>
                Change Pin
            </Text>
            <Text style= {styles.opacity}>
                    Change your pin here
            </Text>
            <View style= {{marginVertical: 30}}>
                <CustomInput bg= "white" label= "Current Pin" />
                <CustomInput bg= "white" label= "New Pin" />
                <CustomInput bg= "white" label= "Confirm New Pin" />
            </View>
            </ScrollView>
            <CustomFooter text= "Change Pin" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
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
        alignItems: 'center',
        padding: 20,
        paddingVertical: 15
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default ChangePin;