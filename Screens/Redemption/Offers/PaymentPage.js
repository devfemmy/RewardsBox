import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemCard from '../../../Components/ItemCard';
import { Icon, Picker, Form } from 'native-base';
import CustomInput from '../../../Components/CustomInput';
import CustomFooter from '../../../Components/CustomFooter';


const Payment = (props) => {
    const [selected, setSelected] = useState("0");
    const onValueChange =(value) => {
        setSelected(value)
      }
    return (
        <View style= {styles.container}>
          <ScrollView style= {{padding: 25}}>
            <ItemCard bg= "white">
                <View style= {styles.flexContainer}>
                    <View>
                        <Text style= {styles.opacity}>
                            Grand Total amount to pay
                        </Text>
                    </View>
                    <View>
                        <Text style= {{...styles.textRight, fontSize: 18, fontWeight: 'bold'}}>
                            N270,000
                        </Text>
                    </View>
                </View>
            </ItemCard>
            <View>

            <Form>
                <Text style= {{fontWeight: 'bold', marginTop: 3}}>Payment Method</Text>
                    <Picker
                      mode="dropdown"
                      // iosIcon={<Icon name="arrow-down" />}
                      iosHeader="Payment Type"
                      iosIcon={<Icon name="arrow-down" 
                      style={{ color: "#DEE0E8", fontSize: 25 }} />}
                      placeholder="Payment Type"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      style={{ width: '100%', borderRadius: 5,
                      borderWidth: 1, height: 55,
                      backgroundColor: '#FFFFFF', marginVertical: 8,
                      borderColor: '#DEE0E8' }}
                      selectedValue={selected}
                      onValueChange={onValueChange}
                    >
                      <Picker.Item label="Visa Card" value="0" />
                      <Picker.Item label="Master Card" value="1" />
                    </Picker>
                  </Form>
            </View>
            <CustomInput keyboardType= "numeric"  placeholder= "Receipt Number" bg= "#FFFFFF" label= "Physical Receipt Number" />
          </ScrollView>
          <CustomFooter onPress= {() => props.navigation.navigate('Redemption Receipt')} show text= "Process Order">
              <CustomInput
              bg= "#F5F4F8" 
              keyboardType= "numeric" label= "Kindly enter user Pin" />

          </CustomFooter>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1
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
});

export default Payment;