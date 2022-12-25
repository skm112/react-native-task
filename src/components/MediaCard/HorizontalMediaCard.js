import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Poster, MovieName, Rating } from '../index'
const HorizontalMediaCard = ({ poster, name, rating }) => {
    return (
        <View style={styles.container}>
            <Poster img={poster} isSecondType />
            <View style={styles.contentContainer}>
                <MovieName name={name} isSecondType />
                <Rating value={rating} />
            </View>

        </View>
    )
}

export default HorizontalMediaCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    contentContainer: {
        paddingLeft: 8,
        flex: 1
    }
})