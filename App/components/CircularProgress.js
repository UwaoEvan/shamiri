import React from "react";
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { ProgressChart } from "react-native-chart-kit";


export default function CircularProgress ({ daily }) {
    const data = {
        labels: ["Mental Health", "Satisfaction", "Family/Social Support", "Work", "Sence of Purpose"], // optional
        data: [0.4, 0.6, 0.8, 0.3, 0.5],
        colors: ['rgba(20, 48, 41)', 'rgba(133, 189, 175)', 'rgba(189, 217, 210)', 'rgba(227, 176, 159)', 'rgba(246, 233, 231)']
      };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(210, 210, 210, ${opacity})`,
        strokeWidth: 2,
        useShadowColorFromDataset: false 
    };

    const { width, height } = Dimensions.get('screen')
    return(
        <View style={daily ? styles.cont1 : styles.cont}>
        <ProgressChart
            data={data}
            width={daily ? 350 : 330}
            height={daily ? 250 : 150}
            strokeWidth={daily ? 14 : 5}
            radius={daily ? 45 : 25}
            chartConfig={chartConfig}
            withCustomBarColorFromData={data.colors}
            style={daily ? { marginLeft: 0 } : { marginLeft: - 40 }}
            hideLegend={daily ? true : false}
        />
        <Text style={daily ? styles.number1 : styles.number}>50</Text>
       </View>
    )
} 

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    cont: {
        width: 330
    },
    cont1:{
        position: 'relative',
        height: 250,
        width: 350,
    },
    number: {
        fontFamily: 'Raleway-Bold',
        fontSize: 30,
        position: 'absolute',
        top: '34%',
        left: '22%'
    },
    number1: {
        fontFamily: 'Raleway-Bold',
        fontSize: 50,
        position: 'absolute',
        top: '33%',
        left: '42%'
    }
})