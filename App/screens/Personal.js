import React,{ useState } from 'react'
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { COLORS } from '../constants/colors'

import { globalStyles } from '../constants/globalStyles'
import Card from '../components/Card'
import CircularProgress from '../components/CircularProgress'
import TextButton from '../components/TextButton'
import TextButtonWhite from '../components/TextButtonWhite'
import NoteCard from '../components/NoteCard'
import CustomCalendar from '../components/CustomCalendar'


export default function Personal ({ navigation }){
    const [more, setMore] = useState(false)
    return (
        <>
            <SafeAreaView style={{ backgroundColor: COLORS.secondary}}/>
            <ScrollView style={[globalStyles.container, styles.container]}>
                <View style={more ? styles.header : styles.headerL}>
                    <View style={[styles.innerHeader]}>
                        <View style={styles.headerContent}>
                            <Text style={globalStyles.title}>For You</Text>
                            <Text style={styles.date}>Feb 18 2022, Friday</Text>
                        </View>
                        <View style={{ marginTop: 20}}>
                            <CustomCalendar more={more}/>
                        </View>
                        <TextButtonWhite 
                            title={more ? 'Show less' : 'Show more'} 
                            source={more ? require('../assets/icons/arrow-up.png') : require('../assets/icons/arrow-down.png')} 
                            style={{ marginTop: 10 }}
                            onPress={() => setMore(!more)}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Card>
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>TODAY</Text>
                            <CircularProgress/>
                            <TextButton 
                                title='More' 
                                source={require('../assets/icons/arrow-next.png')}
                                onPress={() => navigation.navigate('daily', { date: 'Wed Jan 16 22' })}    
                            />
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
                            <TextButton 
                                title='More' 
                                source={require('../assets/icons/arrow-next.png')} 
                                style={styles.more} 
                                onPress={() => navigation.navigate('daily', { date: 'Wed Jan 16 22' })} 
                            />
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.secondary,
    },
    headerL:{
        height: '30%',
        backgroundColor: COLORS.primary,
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
        fontFamily: 'Raleway-Medium',
        paddingBottom: 20
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