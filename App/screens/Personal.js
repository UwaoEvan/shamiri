import React from 'react'
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { COLORS } from '../constants/colors'
import { Calendar, WeekCalendar } from 'react-native-calendars'
import CalendarStrip from 'react-native-slideable-calendar-strip/lib/CalendarStrip'

import { globalStyles } from '../constants/globalStyles'
import Card from '../components/Card'
import CircularProgress from '../components/CirclarProgress'
import TextButton from '../components/TextButton'
import TextButtonWhite from '../components/TextButtonWhite'
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
                            markingType={'custom'}
                            markedDates={{
                                '2022-02-16': {
                                  customStyles: {
                                    container: {
                                      backgroundColor: 'green'
                                    },
                                    text: {
                                      color: 'black',
                                      fontWeight: 'bold'
                                    },
                                  },
                                },
                                '2022-02-17': {
                                  customStyles: {
                                    container: {
                                      backgroundColor: 'white',
                                      elevation: 2
                                    },
                                    text: {
                                      color: 'blue'
                                    },
                                  }
                                }
                              }}
                            theme={globalStyles.monthlyCalendar}
                            style={{ borderRadius: 20, marginTop: 20,  height: 330}}
                        />
                        {/* <CalendarStrip
                            style={{ backgroundColor: 'red'}}
                            showWeekNumber
                            weekStartsOn={1}
                            selectedDate='2022-02-20'
                            markedDate={['2022-02-20', '2022-02-21', '2022-02-22', '2022-02-23']}
                        /> */}
                        <TextButtonWhite title={'Show less'} source={require('../assets/icons/arrow-up.png')} style={{ marginTop: 10 }}/>
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
                            <TextButton title='More' source={require('../assets/icons/arrow-next.png')} style={styles.more} />
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
        height: '45%',
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