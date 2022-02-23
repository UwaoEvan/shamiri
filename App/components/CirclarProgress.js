import React from "react";
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { ProgressChart } from "react-native-chart-kit";


export default function CircularProgress () {
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

    const { width } = Dimensions.get('screen')
    return(
        <View style={styles.cont}>
        <ProgressChart
                data={data}
                width={width * 0.8}
                height={150}
                strokeWidth={5}
                radius={25}
                chartConfig={chartConfig}
                withCustomBarColorFromData={data.colors}
                style={{ marginLeft: - width / 10 }}
        />
        <Text style={styles.number}>50</Text>
       </View>
    )
} 

const styles = StyleSheet.create({
    cont:{
        position: 'relative'
    },
    number: {
        fontFamily: 'Raleway-Bold',
        fontSize: 30,
        position: 'absolute',
        top: '35%',
        left: '22%'
    }
})