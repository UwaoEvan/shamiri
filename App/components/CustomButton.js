import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export default function CustomButton ({ title, onPress, active }){
    let selected = active === title
    return (
        <TouchableOpacity onPress={onPress} style={selected ? styles.cont : styles.cont1}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor: COLORS.white,
        borderRadius: 20,
        width: '48%',
        padding: 1
    },
    cont1:{
        backgroundColor: COLORS.brown,
        borderRadius: 20,
        width: '48%',
        padding: 1

    },
    title:{
        fontFamily: 'Raleway-Regular',
        textAlign: 'center',
        color: COLORS.black
    }
})