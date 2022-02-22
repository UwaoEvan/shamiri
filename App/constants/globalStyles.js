import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 32,
        color: COLORS.white
    } 
})