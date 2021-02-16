import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const ItemDescription = () => {
    return (
        <View style= {styles.container}>
            <View style= {styles.imageContainer}>
                <Image 
                style= {styles.imageStyle}
                source= {require('../../assets/images/item.png')} />
                <Text style= {{fontSize: 16, fontWeight: 'bold', marginVertical: 10, }}>
                Plat Station 4 Pro
                </Text>
            </View>
            <View>
                <Text style= {{color: '#1E263D', marginVertical: 10}}>
                Description
                </Text>
                <Text style= {{color: '#A0A3AC',}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        padding: 25,
        flex: 1
    },
    imageStyle: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        alignItems: 'center'
    }
})

export default ItemDescription