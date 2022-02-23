import React from "react";
import { View, StyleSheet, Image, Text } from 'react-native'
import { COLORS } from "../constants/colors";

export default function Summary (props){
    const { title, number, percentage } = props;
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.bottomCont}>
                <Text style={styles.num}>{number}</Text>
                { percentage && <Image source={require('../assets/icons/arrow2.png')} resizeMode='contain' style={styles.image}/> }
                <Text style={styles.num}>{percentage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    title: {
        fontFamily: 'Raleway-Regular',
        fontSize: 14,
        color: '#afafaf'
    },
    num: {
        color: COLORS.darkBrown,
        fontFamily: 'Raleway-Medium',
        fontSize: 24
    },
    image:{
        height: 30,
        marginHorizontal: 10
    }
})