import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomFooter from '../../../Components/CustomFooter';
import ItemCard from '../../../Components/ItemCard';


const Summary = (props) => {
    return (
        <View style= {styles.container}>
           <ScrollView style= {{padding: 25}}>
           <ItemCard bg= "white">
              <View style= {styles.padding}>
                <Text>
                    <Text style= {styles.opacity}>Voucher: </Text>
                    <Text>12345678</Text>
                </Text>
              </View>
          </ItemCard>
          <ItemCard bg= "white" minHeight= {150}>
              <View style= {styles.flexContainer}>
                <View style= {{width: '50%'}}>
                    <Text>
                    50% off all Samsung HD Televisions.
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.opacity, ...styles.textRight}}>
                    Percentage:
                    </Text>
                    <Text style= {styles.textRight}>
                     50%
                    </Text>
                </View>
              </View>
              <View style= {styles.flexContainer}>
                <View style= {{width: '50%'}}>
                    <Text style= {styles.opacity}>
                   Total Amount:
                    </Text>
                    <Text>
                    N50,000
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.opacity, ...styles.textRight}}>
                    Discounted amount:
                    </Text>
                    <Text style= {styles.textRight}>
                    N5,000
                    </Text>
                </View>
              </View>
              <View style= {{...styles.flexContainer, ...styles.bordered}}>
              <View style= {{width: '50%'}}>
                    <Text style= {styles.opacity}>
                   Total Amount to pay:
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.textRight, ...styles.fontBold}}>
                    N25,000
                    </Text>
                </View>
              </View>
          </ItemCard>
          <ItemCard bg= "white" minHeight= {150}>
              <View style= {styles.flexContainer}>
                <View style= {{width: '50%'}}>
                    <Text>
                    50% off all Samsung HD Televisions.
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.opacity, ...styles.textRight}}>
                    Percentage:
                    </Text>
                    <Text style= {styles.textRight}>
                     50%
                    </Text>
                </View>
              </View>
              <View style= {styles.flexContainer}>
                <View style= {{width: '50%'}}>
                    <Text style= {styles.opacity}>
                   Total Amount:
                    </Text>
                    <Text>
                    N50,000
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.opacity, ...styles.textRight}}>
                    Discounted amount:
                    </Text>
                    <Text style= {styles.textRight}>
                    N5,000
                    </Text>
                </View>
              </View>
              <View style= {{...styles.flexContainer, ...styles.bordered}}>
              <View style= {{width: '50%'}}>
                    <Text style= {styles.opacity}>
                   Total Amount to pay:
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.textRight, ...styles.fontBold}}>
                    N25,000
                    </Text>
                </View>
              </View>
          </ItemCard>
           </ScrollView>
           <CustomFooter onPress= {() => props.navigation.navigate('Payment')} show text= "Proceed">
              <View style= {styles.flexContainer}>
              <View style= {{width: '50%'}}>
                    <Text style= {{...styles.opacity, ...styles.bigSized}}>
                   Grand Total
                    </Text>
                </View>
                <View style= {{width: '50%'}}>
                    <Text style= {{...styles.textRight, ...styles.fontBold, ...styles.bigSized}}>
                    N270,000
                    </Text>
                </View>
              </View>
           </CustomFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1
    },
    padding: {
        padding: 15,
        justifyContent: 'center'
    },
    bigSized: {
        fontSize: 18
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
    bordered: {
        borderTopColor: '#E7E9F2',
        borderTopWidth: 1
    },
    fontBold: {
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default Summary;