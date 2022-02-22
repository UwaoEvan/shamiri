import React from "react";
import Svg, { Circle } from "react-native-svg";
import { Dimensions, View } from 'react-native'
import { COLORS } from "../constants/colors";

export default function CircularProgress () {
    const { width, height } = Dimensions.get('screen')
    let circleLength = 10
    let r = circleLength * (2*Math.PI)
    return(
        <Svg style={{ height: width / 2.5}}>
            <Circle
                cx={width / 5}
                cy={height / 10}
                r={r}
                stroke={COLORS.primary}
                strokeWidth={10}
            />
            <Circle
                cx={width / 5}
                cy={height / 10}
                r={r}
                stroke={COLORS.secondary}
                strokeWidth={5}
                // strokeDasharray={circleLength}
                // strokeDashoffset={circleLength / 2}
            />
        </Svg>
    )
} 