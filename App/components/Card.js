import React from "react";
import { View, StyleSheet } from 'react-native'
import { COLORS } from "../constants/colors";

export default function Card ({ children , style }){
    return (
        <View style={[styles.container, style]}>
            { children }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 1
    }
})