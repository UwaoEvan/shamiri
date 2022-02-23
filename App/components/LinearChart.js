import React from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function LinearChart (){
    const data = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
          {
            data: [5, 6, 4, 5, 6, 6, 6],
            color: (opacity = 0) => `rgba(227, 176, 159, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
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
    return (
        <LineChart
            data={data}
            width={width / 1}
            height={200}
            chartConfig={chartConfig}
            bezier
            style={{ alignSelf: 'center' }}
            fromZero
        />
    )
}