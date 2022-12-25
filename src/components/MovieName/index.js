import { StyleSheet, Text } from 'react-native'
import React from 'react'

const MovieName = ({ name, isSecondType, h1 }) => {
    return (
        <>
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.text, h1 && { fontSize: 20 }, !isSecondType && styles.width]}>{name}</Text>
        </>
    )
}

export default MovieName

const styles = StyleSheet.create({
    width: {
        width: 139,

    },
    text: {
        width: '80%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        letterSpacing: 1,
        color: '#000000',
    }
})