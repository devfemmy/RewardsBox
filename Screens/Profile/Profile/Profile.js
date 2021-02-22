import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CustomInput from '../../../Components/CustomInput';
import { Icon, Picker, Form } from 'native-base';
import CustomBtn from '../../../Components/CustomBtn';


const Profile = (props) => {
    const [selected, setSelected] = useState("0");
    const onValueChange =(value) => {
        setSelected(value)
      }
    return (
        <View style= {styles.container}>
           <Text style= {styles.textStyle}>
               Profile
           </Text>
           <Text style= {styles.opacity}>
                Edit your profile here
           </Text>
           <View style= {{...styles.flexContainer, marginTop: 20}}>
               <View style= {{width: '45%'}}>
               <CustomInput bg= "white" label= "First name" />
               </View>
               <View  style= {{width: '45%'}}>
               <CustomInput bg= "white" label= "Last name" />
               </View>
           </View>
           <CustomInput bg= "white" label= "Email Address" />
           <CustomInput bg= "white" label= "Phone Number" />
           <Form>
                <Text style= {{fontWeight: 'bold', marginTop: 3}}>Branch</Text>
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
                      <Picker.Item label="Lekki Branch" value="0" />
                      <Picker.Item label="Ikeja Branch" value="1" />
                    </Picker>
                  </Form>
                  <View style= {{marginTop: 30}}>
                      <CustomBtn text= "Save Changes" bg= "#3D1A57" />
                  </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1,
        padding: 25
    },
    opacity: {
        opacity: 0.5
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textRight: {
        textAlign: 'right'
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Profile;