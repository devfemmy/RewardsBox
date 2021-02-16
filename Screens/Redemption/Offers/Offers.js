import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ItemCard from '../../../Components/ItemCard';


const Offers = () => {
    return (
        <View style= {styles.container}>
          <ItemCard bg= "white">
              <Text>Voucher: <Text>Hello</Text>
              </Text>
          </ItemCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1,
        padding: 25
    }
});

export default Offers;