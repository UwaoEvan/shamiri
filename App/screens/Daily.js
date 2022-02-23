import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Dimensions , ScrollView} from 'react-native'

import CircularProgress from '../components/CircularProgress'
import { globalStyles } from '../constants/globalStyles'
import Card from '../components/Card'
import LinearProgress from '../components/LinearProgress'
import { COLORS } from '../constants/colors'
import CustomButton from '../components/CustomButton'

export default function Daily (){
    const [active, setActive] = useState('Daily')
    return (
        <ScrollView style={globalStyles.container}>
                <SafeAreaView>
                    <View style={styles.btnCont}>
                        <CustomButton title='Daily' active={active}/>
                        <CustomButton title='Weekly' active={active}/>
                    </View>
                </SafeAreaView>
                <View style={styles.circleBg}>
                    <CircularProgress daily/>
                </View>
                <Card style={styles.card}>
                    <LinearProgress title='Mental Health' rating='8/10' color='#f6e9e7' progress={0.8}/>
                    <LinearProgress title='Satisfaction' rating='2/10' color='#e3a79f' progress={0.2}/>
                    <LinearProgress title='Family/Social Support' rating='4.5/10' color='#bdd9d2' progress={0.45}/>
                    <LinearProgress title='Work' rating='6/10' color='#85bdaf' progress={0.6}/>
                    <LinearProgress title='Sence of Purpose' rating='4/10' color='#143029' progress={0.4}/>
                </Card>
            </ScrollView>
    )
}
const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    circleBg: {
        alignItems: 'center',
        marginVertical: 20
    },
    card: {
        margin: 20,
        padding: 20
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