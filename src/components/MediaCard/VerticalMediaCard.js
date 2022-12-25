import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Poster, MovieName, Rating } from '../index'
const VerticalMediaCard = ({ poster, name, rating }) => {
    return (
        <View style={styles.container}>
            <Poster img={poster} />
            <MovieName name={name} />
            <Rating value={rating} />
        </View>
    )
}

export default VerticalMediaCard

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexShrink: 1,
        padding: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    }
})