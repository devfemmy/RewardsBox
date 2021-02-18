import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import HomeCard from '../../../Components/Card';
import Icon1 from '../../../assets/images/icon_1.svg';
import Icon2 from '../../../assets/images/icon_2.svg';
import Icon3 from '../../../assets/images/icon_3.svg';
import Icon4 from '../../../assets/images/icon_4.svg';
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from 'react-native';


const DiscountRedemption = (props) => {
    const data = {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            data: [25, 55, 75, 100]
          }
        ]
      };
      const chartConfig = {
        backgroundColor: "#FFFFFF",
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientTo: "#fff",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 90, 167, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(30, 38, 61, ${opacity})`,
        style: {
          borderRadius: 16,
          borderColor: 'rgba(0, 90, 167, 1)',
          borderWidth: 1
        },
        propsForDots: { 
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }
    return (
        <View style= {styles.container}>
          <View>
              <Text style= {styles.headerText}>
              Discount Redemption Statistics (Yearly)
              </Text>
            <View style= {styles.flexContainer}>
              <HomeCard height= {120} width= {150} bg= "#3498DB">
                    <View style= {styles.paddedContainer2}>
                        <View style= {{alignItems: 'flex-end'}}>
                            <Icon4 width= {30} height= {30} />
                        </View>
                        <View>
                            <Text style= {{...styles.textColor, ...styles.largeText}}>
                                158
                            </Text>
                            <Text style= {{...styles.textColor, ...styles.smallText}}>
                                Successful Discount
                            </Text>
                        </View>
                    </View>
            </HomeCard>
            <HomeCard height= {120} width= {150} bg= "#27AE60">
            <View style= {styles.paddedContainer2}>
                        <View style= {{alignItems: 'flex-end'}}>
                            <Icon1 width= {30} height= {30} />
                        </View>
                        <View>
                            <Text style= {{...styles.textColor, ...styles.largeText}}>
                                58
                            </Text>
                            <Text style= {{...styles.textColor, ...styles.smallText}}>
                            Total Available Discounts
                            </Text>
                        </View>
                    </View>
            </HomeCard>
            <HomeCard height= {120} width= {150} bg= "#F39C12">
            <View style= {styles.paddedContainer2}>
                        <View style= {{alignItems: 'flex-end'}}>
                            <Icon2 width= {30} height= {30} />
                        </View>
                        <View>
                            <Text style= {{...styles.textColor, ...styles.largeText}}>
                            N543,000
                            </Text>
                            <Text style= {{...styles.textColor, ...styles.smallText}}>
                            Total Discounted Amount
                            </Text>
                        </View>
                    </View>
            </HomeCard>
            <HomeCard height= {120} width= {150} bg= "#3D1A57">
            <View style= {styles.paddedContainer2}>
                        <View style= {{alignItems: 'flex-end'}}>
                            <Icon2 width= {30} height= {30} />
                        </View>
                        <View>
                            <Text style= {{...styles.textColor, ...styles.largeText}}>
                            N543,000
                            </Text>
                            <Text style= {{...styles.textColor, ...styles.smallText}}>
                            Total Amount Spent
                            </Text>
                        </View>
                    </View>
            </HomeCard>
              </View>
              <View>
                  <Text style= {{fontWeight: '400', fontSize: 17, marginBottom: 10}}>
                  Transaction Trend
                  </Text>
                  <Text style= {styles.opacity}>
                  The graph below represents 
                  transactions records based on the dates vs total 
                  discounted amounts of transactions per date.
                  </Text>
                  <View style= {styles.windowWidthStyle}>
                  <BarChart
                    style={{
                            marginVertical: 10,
                            borderRadius: 16
                          }}
                    data={data}
                    width={Dimensions.get('window').width/1.1} 
                    height={250}
                    yAxisLabel=""
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    />
                  </View>
              </View>
              
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
    headerText: {
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
        padding: 10,
        paddingVertical: 15,
        flexWrap: 'wrap'
    },
    smallText: {

    },
    largeText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textColor: {
        color: 'white'
    },
    paddedContainer2: {
        padding: 10
    },
    windowWidthStyle: {
        // backgroundColor: 'red',
        width: Dimensions.get('window').width/1.1
    }
});

export default DiscountRedemption;