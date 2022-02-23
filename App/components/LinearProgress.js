import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { COLORS } from "../constants/colors";

export default function LinearProgress (props){
    const { title, color, progress, rating } = props;
    const { width } = Dimensions.get('screen');
    return (
        <View style={styles.cont}>
            <View style={styles.titleCont}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{rating}</Text>
            </View>
            <Progress.Bar progress={progress} width={width / 1.25} color={color} borderColor={COLORS.white}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        paddingVertical: 5
    },
    titleCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title:{
        fontFamily: 'Raleway-Regular',
        color: '#afafaf'
    }
})