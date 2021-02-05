import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import HomeCard from '../../Components/Card';
import MyIcon from '../../assets/images/icon1.svg';
import MyIcon3 from '../../assets/images/icon4.svg';
import MyIcon4 from '../../assets/images/icon6.svg';
import MyIcon2 from '../../assets/images/icon7.svg';
import MyIcon5 from '../../assets/images/icon5.svg';
import MyIcon6 from '../../assets/images/icon8.svg';
import MyIcon8 from '../../assets/images/icon2.svg';
import { ScrollView } from 'react-native-gesture-handler';

const HomePage = (props) => {
    return (
        <ScrollView style= {styles.container}>
            <View style= {styles.flexContainer}>
                <View>
                <Text style = {{...styles.textStyle4,  fontSize: 20, fontWeight: 'bold'}}>Hello</Text>
                <Text style = {{...styles.textStyle4,  fontSize: 16}}>John Doe</Text>
                </View>
               
                <View>
                <MyIcon8 width= {15} height= {15} />
                </View>
            </View>
            <HomeCard bg= "#fff">
                <View style= {styles.flexContainer}>
                <MyIcon width= {65} height= {65} />
                <View style= {{width: '70%'}}>
                    <Text style= {styles.textStyle}>
                        Voucher
                    </Text>
                    <Text style= {styles.textStyle2}>
                    Manage your Items redemption here
                    </Text>
                </View>
                   
                </View>
            </HomeCard>
            <HomeCard bg= "#fff">
                <View style= {styles.flexContainer}>
                <MyIcon2 width= {65} height= {65} />
                <View style= {{width: '70%'}}>
                    <Text style= {styles.textStyle}>
                    Discount Card Redemption
                    </Text>
                    <Text style= {styles.textStyle2}>
                    Manage your discount card redemptions here
                    </Text>
                </View>
                   
                </View>
            </HomeCard>
            <View style= {{marginVertical: 10}}>
                <Text style = {{...styles.textStyle2, ...styles.textStyle3}}>Statistics</Text>
            </View>
            <View style= {{...styles.flexContainer, ...styles.paddedContainer}}>
                <HomeCard height= {150} width= {150} bg= "#FCB017">
                    <View style= {styles.paddedContainer2}>
                    <MyIcon3 width= {40} height= {50} />
                    <Text style= {{...styles.textStyle, color: '#3D1A57'}}>
                       Items Redemption
                        </Text>
                    </View>
                </HomeCard>
                <HomeCard height= {150}  width= {150} bg= "#FCB017">
                    <View style= {styles.paddedContainer2}>
                        <MyIcon4 width= {40} height= {50} />
                        <Text style= {{...styles.textStyle, color: '#3D1A57'}}>
                        Discount Redemption
                        </Text>
                    </View>
                </HomeCard>
            </View>

            <View>
                <View style= {styles.flexContainer}>
                <Text style = {{...styles.textStyle2, ...styles.textStyle3, fontSize: 17}}>Reports</Text>
                <View>
                <MyIcon8 width= {15} height= {15} />
                </View>
                </View>
             
                <ScrollView horizontal>
                    <HomeCard marginRight= {20} maxWidth= {250} bg= "#3D1A57">
                    <View style= {styles.flexContainer}>
                    <MyIcon6 width= {50} height= {50} />
                    <View style= {{width: '70%'}}>
                        <Text style= {{...styles.textStyle, color: 'white'}}>
                        Recent Items transactions
                        </Text>
                    </View>
                    
                    </View>
                    </HomeCard>
                    <HomeCard  marginRight= {20} maxWidth= {250}  bg= "#3D1A57">
                    <View style= {styles.flexContainer}>
                    <MyIcon5 width= {40} height= {50} />
                    <View style= {{width: '75%'}}>
                        <Text style= {{...styles.textStyle, color: 'white'}}>
                        Recent Discount transactions
                        </Text>
                    </View>
                    
                    </View>
                    </HomeCard>
                </ScrollView>
            </View>
          
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        padding: 25
    },
    textStyle: {
        color: '#1E263D',
        fontWeight: 'bold',
        fontSize: 18

    },
    textStyle2: {
        opacity: 0.5
    },
    textStyle3: {
        fontSize: 16,
        marginVertical: 3
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    paddedContainer: {
        width: Dimensions.get('window').width/1.15
    },
    paddedContainer2: {
        padding: 20
    }
})

export default HomePage;