import React from "react";
import { TouchableOpacity, Text, Image, Platform } from "react-native";

export default function Header ({ navigation, route }) {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icons/arrow-back.png')}/>
        </TouchableOpacity>
    )
}