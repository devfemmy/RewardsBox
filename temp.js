import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const RedemptionReceipt = () => {
    return (
        <View style= {styles.container}>
            <Text>Receipts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1
    }
});

export default RedemptionReceipt;