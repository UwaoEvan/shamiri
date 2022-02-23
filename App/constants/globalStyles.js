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
    monthlyCalendar: {
        calendarBackground: COLORS.lightSecondary,
        backgroundColor: 'transparent',
        dayTextColor: COLORS.white,
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        textDisabledColor: COLORS.white,
        dotColor: '#00adf5',
        selectedDotColor: '#0000',
        arrowColor: COLORS.white,
        disabledArrowColor: '#d9e1e8',
        monthTextColor: COLORS.white,
        indicatorColor: 'blue',
        textDayFontFamily: 'Raleway-Regular',
        textMonthFontFamily: 'Raleway-Regular',
        textDayHeaderFontFamily: 'Raleway-Regular',
        textDayFontWeight: 'bold',
        textDayFontColor: '#ffff',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        textSectionTitleColor: COLORS.white,
    }
})