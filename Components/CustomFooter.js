import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import CustomBtn from './CustomBtn';

const CustomFooter = (props) => {
    return (
        <View style= {styles.container}>
            {props.show ? 
        <View>
            {props.children}
        </View>: null 
        }
            <CustomBtn onPress= {props.onPress} text= {props.text} bg= "#3D1A57" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        minHeight: 120,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 1,
        borderColor: '#DEE0E8',
        padding: 25
        
    }
}

);

export default CustomFooter;