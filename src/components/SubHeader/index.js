import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SeeMore, TitleText } from '../index'

const SubHeader = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <TitleText>{title}</TitleText>
            <SeeMore onPress={onPress} />
        </View>
    )
}

export default SubHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    }
})