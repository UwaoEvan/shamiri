import React from 'react'
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { COLORS } from '../constants/colors'
import { Calendar } from 'react-native-calendars'

import { globalStyles } from '../constants/globalStyles'
import Card from '../components/Card'
import CircularProgress from '../components/CirclarProgress'
import TextButton from '../components/TextButton'

export default function Personal (){
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={globalStyles.container}>
                <View style={styles.header}>
                    <Text style={globalStyles.title}>For You</Text>
                    <Calendar/>
                    <Text style={globalStyles.title}>For You</Text>
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
                            <CircularProgress/>
                            <TextButton title='More' source={require('../assets/icons/arrow-next.png')}/>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.secondary,
        marginBottom: 20
    },
    footer: {
        marginHorizontal: width / 30
    },
    title: {
        fontFamily: 'Raleway-Medium'
    },
    cardContent: {
        padding: 20
    }
})