import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeCard = (props) => {
    const styles = StyleSheet.create({
        container: {
            minHeight: 100,
            backgroundColor: props.bg,
            width: props.width,
            height: props.height,
            maxWidth: props.maxWidth,
            marginVertical: 15,
            marginRight: props.marginRight,
            borderRadius: 10,
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
        <TouchableOpacity style= {styles.container}>
            {props.children}
        </TouchableOpacity>
    )
}

export default HomeCard;