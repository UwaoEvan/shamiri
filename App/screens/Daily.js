import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import CircularProgress from '../components/CircularProgress'
import { globalStyles } from '../constants/globalStyles'
import Card from '../components/Card'

export default function Daily (){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container}>
                <Text>Buttons Go Here...</Text>
                <View style={styles.circleBg}>
                    <CircularProgress daily/>
                </View>
                <Card style={styles.card}>
                    <Text>Progress goes here.....</Text>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    circleBg: {
        alignItems: 'center',
        marginVertical: 20
    },
    card: {
        marginHorizontal: 20,
        padding: 20
    }
})