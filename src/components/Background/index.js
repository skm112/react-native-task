import { StyleSheet, View } from 'react-native'
import React from 'react'

const Background = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftView} />
            <View style={styles.rightView} />
        </View>
    )
}

export default Background

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        ...StyleSheet.absoluteFillObject
    },
    leftView: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    rightView: {
        flex: 2,
        backgroundColor: '#ffffff'
    }
})