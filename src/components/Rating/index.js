import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Rating = ({ value }) => {
    return (
        <View style={styles.container}>
            <Icon
                style={styles.star}
                name='star'
                size={12}
                color="#FFC319"
            />
            <Text style={styles.text}>{value?.toFixed(1) ?? 0}/10 IMDb</Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 86,
        minHeight: 15,
        paddingVertical:4
    },
    star: {
        paddingRight: 2
    },
    text: {
        alignItems: 'center',
        minWidth: 70,
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 1,
        color: '#9C9C9C',
    }
})