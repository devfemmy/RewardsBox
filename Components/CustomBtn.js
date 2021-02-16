import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';


const CustomBtn = (props) => {
    const styles = StyleSheet.create({
        btnStyle: {
            width: '100%',
            backgroundColor: props.bg,
            color: props.color,
            fontWeight: 'bold',
            fontSize: 35,
            height: 50,
           
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
        },
        iconStyle: {
            marginLeft: 4,
            marginTop: 4
        },
        linearGradient: {
            marginVertical: 30,
            borderRadius: 5,

        }
    });
    return (
            <TouchableOpacity onPress= {props.onPress} style= {styles.btnStyle}>
                <Text style= {styles.textStyle}>{props.text}
                </Text> 
            </TouchableOpacity>
    )
}


export default CustomBtn;
