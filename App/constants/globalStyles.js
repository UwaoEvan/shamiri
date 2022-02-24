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
    },
    btnCont: {
        backgroundColor: COLORS.brown,
        marginHorizontal: 20,
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        marginTop: 20
    }
})