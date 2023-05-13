import React from "react"
import { ActivityIndicator, Modal, View, StyleSheet } from "react-native"


export default function Custom_Indicator() {
    return (
        <Modal transparent={true}>
            <View style={style.indicatorWrapper}>
                <ActivityIndicator color="black" size="large"></ActivityIndicator>
            </View>
        </Modal>
    )
} 
const style = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
    },
})