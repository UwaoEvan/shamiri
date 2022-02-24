import React, { useState } from "react";
import { Calendar, WeekCalendar } from 'react-native-calendars'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Moment from "moment";

import { COLORS } from "../constants/colors";

export default function CustomCalendar ({ more }){
    const [today, setToday] = useState(Moment().format("YYYY-MM-DD"))
    let markedDates = {
        '2022-02-22': {marked: true, backgroundColor: '#cee3f3'},
        '2022-02-23': {selected: true, marked: true, backgroundColor: '#fedb60'},
        '2022-02-24': {marked: true, backgroundColor: '#cee3f3'},
    }

    const customDay = (props) => {
        const { date, marking } = props;
        const marked = marking?.marked 
        const tDate = date.dateString == today
        
        return (
            <TouchableOpacity style={styles.custDateCont}>
                {
                    tDate ? (
                        <View style={styles.toDate}>
                            <Text style={styles.custDate}>{date.day}</Text>
                            <View style={[styles.dot, { backgroundColor: marking?.backgroundColor || '#fff'}]}/>
                        </View>
                    ) : (
                        <View style={{ alignItems: 'center'}}>
                            <Text style={styles.custDate}>{date.day}</Text>
                            <View style={marked ? [styles.dot1, { backgroundColor: marking?.backgroundColor}] : styles.dot}/>
                        </View>
                    )
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.cont}>
        {
            !more ? (
                <WeekCalendar 
                    firstDay={0}
                    hideExtraDays={true}
                    current={Moment().format("YYYY-MM-DD")}
                    theme={styles.monthlyCalendar}
                    markedDates={markedDates}
                    style={{ width: '90%', marginTop: 15 }}
                    dayComponent={(props) => customDay(props)}
                    headerStyle={{ backgroundColor: '#000'}}
                /> 
        
            ) : (
                <Calendar
                    current={Moment().format("YYYY-MM-DD")}
                    theme={styles.monthlyCalendar}
                    style={{ height: 330 }}
                    dayComponent={(props) => customDay(props)}
                    markedDates={markedDates}
                />
            )
        }
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: COLORS.lightSecondary,
        paddingVertical: 20,
        borderRadius: 20
    },
    monthlyCalendar: {
        calendarBackground: 'transparent',
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
    },
    dot:{
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5
    },
    dot1:{
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#cee3f3',
        marginTop: 5
    },
    dot2:{
        backgroundColor: '#fedb60',
        height: 20,
        width: 20,
        borderRadius: 10,
        marginTop: 5
    },
    custDateCont:{
        alignItems: 'center',
        marginTop: -12,
    },
    custDate:{
        fontFamily: 'Raleway-Regular',
        color: COLORS.white
    },
    toDate:{
        backgroundColor: COLORS.secondary,
        padding: 1,
        borderRadius: 10,
        alignItems: 'center'
    }
})