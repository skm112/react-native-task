import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const SeeMore = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>See more</Text>
        </Pressable>
    )
}

export default SeeMore

const styles = StyleSheet.create({

    container: {
        minWidth: 61,
        minHeight: 21,
        borderRadius: 100,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#e5e4ea',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 10,
        color: '#AAA9B1',
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'right',
        letterSpacing: 1,
    }

})