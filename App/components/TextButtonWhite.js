import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants/colors";

export default function TextButtonWhite ({ title, onPress, source, style }){
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            <Image 
                source={source}
                resizeMode='contain'
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily: 'Raleway-Regular',
        color: COLORS.white
    },
    icon:{
        width: 10,
        height: 10,
        marginLeft: 5
    }
})