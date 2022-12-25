import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} animating={true} color="#110E47" />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        ...StyleSheet.absoluteFillObject
    }
})