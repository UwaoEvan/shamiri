import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function TextButton ({ title, onPress, source, style }){
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
        marginTop: 10
    },
    title:{
        fontFamily: 'Raleway-Regular',
        color: '#afafaf'
    },
    icon:{
        width: 10,
        height: 10,
        marginLeft: 5
    }
})