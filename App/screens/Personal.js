import React from 'react'
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { COLORS } from '../constants/colors'
import { Calendar, WeekCalendar } from 'react-native-calendars'

import { globalStyles } from '../constants/globalStyles'
import Card from '../components/Card'
import CircularProgress from '../components/CirclarProgress'
import TextButton from '../components/TextButton'
import NoteCard from '../components/NoteCard'

export default function Personal (){
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <ScrollView style={[globalStyles.container, styles.container]}>
                <View style={styles.header}>
                    <View style={styles.innerHeader}>
                        <View style={styles.headerContent}>
                            <Text style={globalStyles.title}>For You</Text>
                            <Text style={styles.date}>Feb 18 2022, Friday</Text>
                        </View>
              
                        <Calendar
                            // current={'2022-02-16'}
                            // minDate={'2022-02-13'}
                            // maxDate={'2022-02-19'}
                            // hideExtraDays={true}
                            theme={{
                                calendarBackground: COLORS.lightSecondary,
                                backgroundColor: COLORS.lightSecondary,
                                dayTextColor: COLORS.white,
                                textSectionTitleColor: '#b6c1cd',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#00adf5',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: 'orange',
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: 'blue',
                                indicatorColor: 'blue',
                                textDayFontFamily: 'Raleway-Regular',
                                textMonthFontFamily: 'Raleway-Regular',
                                textDayHeaderFontFamily: 'Raleway-Regular',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16
                            }}
                        />
                        {/* <WeekCalendar /> */}
                        <TextButton title={'Show more'} source={require('../assets/icons/arrow-down.png')} style={{ marginTop: 10 }}/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Card>
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>TODAY</Text>
                            <CircularProgress/>
                            <TextButton title='More' source={require('../assets/icons/arrow-next.png')}/>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>Your wellness plan</Text>
                           <ScrollView horizontal>
                               <NoteCard/>
                               <NoteCard/>
                               <NoteCard/>
                           </ScrollView>
                            <TextButton title='More' source={require('../assets/icons/arrow-next.png')} style={styles.more}/>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.secondary,
    },
    header: {
        height: 430,
        backgroundColor: COLORS.primary,
    },
    innerHeader:{
        backgroundColor: COLORS.secondary,
        marginBottom: 20,
        height: '100%',
        borderBottomLeftRadius: 40,
        padding: 20
    },
    footer: {
        paddingHorizontal: 25,
        paddingTop: 20,
        backgroundColor: COLORS.primary,
        height: '100%',
        borderTopRightRadius: 40
    },
    title: {
        fontFamily: 'Raleway-Medium'
    },
    cardContent: {
        padding: 20
    },
    date: {
        fontFamily: "Raleway-Regular",
        color: COLORS.white
    },
    headerContent: {
        paddingHorizontal: 20
    },
    noteCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    more: {
        marginTop: 10
    }
})