import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const TitleText = ({ children }) => {
    return (
        <>
            <Text style={styles.text}>{children}</Text>
        </>
    )
}

export default TitleText

const styles = StyleSheet.create({
    text: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 1,
        color: '#110E47',
    }
})