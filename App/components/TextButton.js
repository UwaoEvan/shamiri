import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function TextButton ({ title, onPress, source }){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
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
        fontFamily: 'Raleway-Regular'
    },
    icon:{
        width: 15,
        height: 15,
        marginLeft: 5
    }
})