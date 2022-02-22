import React from "react";
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native'
import { COLORS } from "../constants/colors";

export default function NoteCard (){
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={require('../assets/icons/up.jpeg')} resizeMode='cover'/>
            <View style={styles.cHolder}>
                <Text style={styles.caption}>Veronicah N</Text>
                <Text style={styles.subCaption}>Shamiri Licenced Councelor</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 180,
        position: 'relative',
        marginHorizontal: 10
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    cHolder:{
        position: 'absolute',
        backgroundColor: 'rgba(228,236,234, 0.5)',
        height: 50,
        width: '100%',
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    caption:{
        fontFamily: 'Raleway-Bold',
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 16
    },
    subCaption:{
        fontFamily: 'Raleway-Bold',
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 10
    }
    
})