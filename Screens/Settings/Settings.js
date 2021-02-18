import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const Settings = (props) => {
    return (
        <View style= {styles.container}>
            <Text>Settings</Text>
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
});

export default Settings;