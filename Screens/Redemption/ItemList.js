import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Container, Header, Content, DatePicker,Icon, Picker, Form } from 'native-base';
import ArrowIcon from '../../assets/images/arrow.svg';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from '../../Components/CustomInput';
import CustomBtn from '../../Components/CustomBtn';



const ItemList = (props) => {  
    const [selected, setSelected] = useState("0");
    const onValueChange =(value) => {
        setSelected(value)
      }

    return (
        <View style= {styles.container}>
            <ScrollView style= {{padding: 25}}>
                <Collapse style= {styles.collapse}>
                    <CollapseHeader>
                        <View style= {styles.flexCont}>
                            <Text style= {styles.textStyle}>
                                    Items to be redeemed (2)
                            </Text>
                            <ArrowIcon width={18} height= {18} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style= {styles.CollapseBody}>
                            <View style= {styles.flexCont}>
                                <Image
                                style= {styles.imageStyle} 
                                source= {require('../../assets/images/item3.png')} />
                                <View style= {{width: '65%'}}>
                                    <Text style= {styles.textStyle2}>
                                    Plat Station 4 Pro x1
                                    </Text>
                                    <Text style= {{...styles.textStyle2, fontSize: 15}}>
                                    150,000
                                    </Text>
                                    <View style= {{marginVertical: 5}}>
                                        <Text style= {styles.opacity}>Voucher Number:</Text>
                                        <Text>5447GER378383IRE</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style= {styles.CollapseBody}>
                            <View style= {styles.flexCont}>
                                <Image
                                style= {styles.imageStyle} 
                                source= {require('../../assets/images/item2.png')} />
                                <View style= {{width: '65%'}}>
                                    <Text style= {styles.textStyle2}>
                                    Plat Station 4 Pro x1
                                    </Text>
                                    <Text style= {{...styles.textStyle2, fontSize: 15}}>
                                    150,000
                                    </Text>
                                    <View style= {{marginVertical: 5}}>
                                        <Text style= {styles.opacity}>Voucher Number:</Text>
                                        <Text>5447GER378383IRE</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </CollapseBody>
                </Collapse>
                <Collapse style= {styles.collapse}>
                    <CollapseHeader>
                        <View style= {styles.flexCont}>
                            <Text style= {styles.textStyle}>
                                    Items to be cancelled (2)
                            </Text>
                            <ArrowIcon width={18} height= {18} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style= {styles.CollapseBody}>
                            <View style= {styles.flexCont}>
                                <Image
                                style= {styles.imageStyle} 
                                source= {require('../../assets/images/item1.png')} />
                                <View style= {{width: '65%'}}>
                                    <Text style= {styles.textStyle2}>
                                    Plat Station 4 Pro x1
                                    </Text>
                                    <Text style= {{...styles.textStyle2, fontSize: 15}}>
                                    150,000
                                    </Text>
                                    <View style= {{marginVertical: 5}}>
                                        <Text style= {styles.opacity}>Voucher Number:</Text>
                                        <Text>5447GER378383IRE</Text>
                                    </View>
                                </View>
                            </View>
                    <Form>
                    <Picker
                      mode="dropdown"
                      // iosIcon={<Icon name="arrow-down" />}
                      iosHeader="Reason for Cancellation"
                      iosIcon={<Icon name="arrow-down" 
                      style={{ color: "#DEE0E8", fontSize: 25 }} />}
                      placeholder="Reason for Cancellation"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      style={{ width: '100%', borderRadius: 5,
                      borderWidth: 1, height: 55,
                      backgroundColor: '#FFFFFF', marginVertical: 8,
                      borderColor: '#DEE0E8' }}
                      selectedValue={selected}
                      onValueChange={onValueChange}
                    >
                      <Picker.Item label="Item Out of Stock" value="0" />
                      <Picker.Item label="Item Expired" value="1" />
                    </Picker>
                  </Form>
                            
                        </View>
                    </CollapseBody>
                </Collapse>
            </ScrollView>
            <View style= {styles.footer}>
                <CustomInput 
                placeholder= "1234"
                bg= "#F5F4F8" label= "Kindly enter user Pin" />
                <CustomBtn 
                onPress= {() => props.navigation.navigate('Redemption Receipt')}
                bg= "#3D1A57"
                text= "Process Order" />
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#F5F6FA',
        flex: 1,
        // padding: 25
    },
    flexCont: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
       
    },
    collapse: {
        marginVertical: 8
    },
    CollapseBody: {
        borderTopColor: '#DEE0E8',
        borderTopWidth: 1,
        marginVertical: 10,
        paddingVertical: 5
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textStyle2: {
        color: '#1E263D',
        fontSize: 17,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    opacity: {
        opacity: 0.5
    },
    footer: {
        backgroundColor: '#FFFFFF',
        minHeight: 220,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopWidth: 1,
        borderColor: '#DEE0E8',
        padding: 25
    }
});

export default ItemList