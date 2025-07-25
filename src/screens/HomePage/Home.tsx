import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { ButtonAction } from "../../components/Button/ButtonAction";
import { Logo } from "../../components/Logo/Logo";
import { HomeStyles } from "./styles/HomeStyles";

export default function Home() {
    return (
        <View style={HomeStyles.appContainer}>
            <View style={HomeStyles.logoContainer}>
                <Logo />
            </View>
            <View style={HomeStyles.inputContainer}>
                <ButtonAction />
            </View>
            <StatusBar style="light" />
        </View>
    )
}

