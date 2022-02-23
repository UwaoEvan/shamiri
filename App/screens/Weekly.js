import React, { useState } from 'react'
import { View, Text, StyleSheet,ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'

import CustomButton from '../components/CustomButton'
import { globalStyles } from '../constants/globalStyles'
import Summary from '../components/Summary'
import LinearChart from '../components/LinearChart'

export default function Daily (){
    const [active, setActive] = useState('Weekly')
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={globalStyles.btnCont}>
                    <CustomButton title='Daily' active={active}/>
                    <CustomButton title='Weekly' active={active}/>
                </View>
            </SafeAreaView>
            <View style={styles.header}>
                <Text>Mental Health</Text>
                <View style={styles.summary}>
                    <Summary title='Weekly average' number={6}/>
                    <Summary title='Week-over-week' percentage={`${20}%`}/>
                    <Summary title='Goal' number={8}/>
                </View>
                <View style={styles.lineChart}>
                    <LinearChart/>
                </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.footer}> 
                <Text style={styles.footerTitle}>Recommendation</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/image.png')} resizeMode='cover' style={styles.image}/>
                    <View style={styles.fCont}>
                        <Text style={styles.subTitle}>1-on-1 Session</Text>
                        <Text style={styles.caption}>Talk to our therapists about employee burnout?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    summary:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    line:{
        borderWidth: 0.5,
        borderColor:'#afafaf',
        width: '100%'
    },
    lineChart:{
        width: '100%',
        justifyContent: 'center',
    },
    footer: {
        marginHorizontal: 20
    },
    footerTitle:{
        fontFamily: 'Raleway-Bold',
        fontSize: 16,
        paddingVertical: 20
    },
    image:{
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    subTitle:{
        fontFamily: 'Raleway-Regular',
        fontSize: 10,
        color: '#c4c4c4',
        marginVertical: 5
    },
    caption:{
        fontFamily: 'Raleway-Regular',
        fontSize: 10,
    },
    fCont:{
        marginBottom: 20
    }
})