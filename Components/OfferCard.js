import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OfferCard = (props) => {
    const styles = StyleSheet.create({
        container: {
            minHeight: props.minHeight,
            backgroundColor: props.bg,
            width: props.width,
            height: props.height,
            maxWidth: props.maxWidth,
            marginVertical: 15,
            // padding: 15,
            shadowColor: "#1F1F1F1F",
            shadowOffset: {
                width: 1,
                height: 1,
            },
            shadowOpacity: 0.7,
            // shadowRadius: 3.84,
    
            // elevation: 1,
    
        }
    });
    return (
        <View style= {styles.container}>
            {props.children}
        </View>
    )
}

export default OfferCard;