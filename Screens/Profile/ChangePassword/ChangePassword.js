import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomFooter from '../../../Components/CustomFooter';
import CustomInput from '../../../Components/CustomInput';


const ChangePassword = (props) => {
    return (
        <View style= {styles.container}>
            <ScrollView style= {{padding: 25}}>
                <Text style= {styles.textStyle}>
                Change Password
            </Text>
            <Text style= {styles.opacity}>
                    Change your password here
            </Text>
            <View style= {{marginVertical: 30}}>
                <CustomInput bg= "white" label= "Current Password" />
                <CustomInput bg= "white" label= "New Password" />
                <CustomInput bg= "white" label= "Confirm New Password" />
            </View>
            </ScrollView>
            <CustomFooter text= "Change Password" />
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
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingVertical: 15
    },
});

export default ChangePassword;