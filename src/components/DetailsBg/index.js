import { StyleSheet, View, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { IMG_BASE_URL_ORIGINAL } from '~config';
const { height } = Dimensions.get('window')

const DetailsBg = ({ img }) => {
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} animated={true} barStyle={'light-content'} />
            <FastImage style={styles.bgImage}
                source={{
                    uri: `${IMG_BASE_URL_ORIGINAL}${img}`,
                    priority: FastImage.priority.high
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={styles.bgView} />
        </>
    )
}

export default DetailsBg

const styles = StyleSheet.create({
    bgImage: {
        height: height * 0.4,
        width: "100%"
    },
    bgView: {
        backgroundColor: '#ffffff',
        flex: 1,
        position: 'absolute',
        top: (height * 0.4) - 16,
        bottom: 0,
        right: 0,
        left: 0,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})