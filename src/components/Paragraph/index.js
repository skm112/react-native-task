import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TitleText } from '../index'

const Paragraph = ({ title, content }) => {
    return (
        <View style={styles.container}>
            {title ? <TitleText>Description</TitleText> : null}
            <Text style={styles.text}>
                {content}
            </Text>
        </View>
    )
}

export default Paragraph

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
    text: {
        color: '#9C9C9C'
    }
})