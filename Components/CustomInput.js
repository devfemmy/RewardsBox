import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ShadowPropTypesIOS, Text } from 'react-native';


const CustomInput = (props) => {
const [border, setBorder] = useState('#DEE0E8');
const [width, setWidth] = useState(1);

const onFocus = () => {
       setBorder('#FCB017')
       setWidth(2)

}
const OnBlur = () => {
    setBorder('#DEE0E8')
    setWidth(1)
}
const styles = StyleSheet.create({
    inputStyle: {
        color: 'black',
        borderColor: border,
        borderWidth: 1,
        padding: 10,
        marginBottom: 18,
        height: 50,
        backgroundColor: 'white'
        
        
      },
      FocusInput: {
        color: 'black',
        borderColor: '#FCB017',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
      },
      label: {
          color: '#1E263D',
          marginVertical: 5,
          fontWeight: 'bold'
       
      }
})
    return (
        <View>
            <Text style= {styles.label}> {props.label}</Text>
            <TextInput
            autoCapitalize= 'none'
            editable= {props.editable}
            onChangeText = {props.onChangeText}
            value = {props.value}
            secureTextEntry= {props.secureTextEntry} 
                placeholder= {props.placeholder} 
                placeholderTextColor= "silver"
                selectionColor = '#1A2071'
                keyboardType= {props.keyboardType}
                autoCorrect= {false}
            onBlur = {() => OnBlur()}
            onFocus= {() => onFocus()} style= {styles.inputStyle} />
        </View>
    )
}



export default CustomInput;
