import React from "react";
import { View, StyleSheet } from 'react-native'
import { COLORS } from "../constants/colors";

export default function Card ({ children }){
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: 20,
    }
})