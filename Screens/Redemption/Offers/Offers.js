import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ItemCard from '../../../Components/ItemCard';
import IconOffer from '../../../assets/images/offer.svg';
import { CheckBox } from 'native-base';
import OfferCard from '../../../Components/OfferCard';
import CustomInput from '../../../Components/CustomInput';
import { ScrollView } from 'react-native-gesture-handler';
import CustomBtn from '../../../Components/CustomBtn';
import CustomFooter from '../../../Components/CustomFooter';



const Offers = (props) => {
    const [checked, setChecked] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const toggleChecked = () => {
        console.log("clicked")
        setChecked(!checked)
    }
    const toggleChecked2 = () => {
        console.log("clicked")
        setChecked2(!checked2)
    }
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
          <OfferCard bg= "white" minHeight= {120}>
              <View style= {styles.flexContainer}>
                    <IconOffer width= {40} height= {40} />
                    <View style= {{width: '60%'}}>
                        <Text style= {styles.textStyle}>50% off all Samsung HD Televisions.</Text>
                        <Text style= {styles.opacity}>Valid to 14-06-2020</Text>
                    </View>
                    <CheckBox onPress= {toggleChecked} checked= {checked} color= {"#FCB017"} />
              </View>
              {checked ? 
              <View style= {{paddingHorizontal: 20}}>
                <CustomInput placeholder= "N50,000" bg= "#F5F4F8" /> 
              </View>
                : null
            }
          </OfferCard>
          <OfferCard bg= "white" minHeight= {120}>
              <View style= {styles.flexContainer}>
                    <IconOffer width= {40} height= {40} />
                    <View style= {{width: '60%'}}>
                        <Text style= {styles.textStyle}>50% off all Samsung HD Televisions.</Text>
                        <Text style= {styles.opacity}>Valid to 14-06-2020</Text>
                    </View>
                    <CheckBox onPress= {toggleChecked2} checked= {checked2} color= {"#FCB017"} />
              </View>
              {checked2 ? 
              <View style= {{paddingHorizontal: 20}}>
                <CustomInput placeholder= "N50,000" bg= "#F5F4F8" /> 
              </View>
                : null
            }
          </OfferCard>
            </ScrollView>
            <View>
            <CustomFooter 
            onPress= {() => props.navigation.navigate('Summary')} 
            text= "Proceed" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1,
       
    },
    padding: {
        padding: 15,
        justifyContent: 'center'
    },
    opacity: {
        opacity: 0.5
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    textStyle: {
        marginBottom: 3
    },
    footer: {
        minHeight: 100,
        backgroundColor: 'white',
        padding: 25
    }
});

export default Offers;