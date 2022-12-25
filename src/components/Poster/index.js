import { StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { IMG_BASE_URL_W500 } from "~config";

const Poster = ({ img, isSecondType }) => {
    const size = isSecondType ? styles.imageSizeTwo : styles.imageSizeOne
    return (
        <>

            <FastImage
                style={StyleSheet.flatten([styles.image, size])}
                source={{
                    uri: `${IMG_BASE_URL_W500}${img}`,
                    priority: FastImage.priority.normal,
                    cache: FastImage.cacheControl.immutable
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        </>
    )
}

export default Poster

const styles = StyleSheet.create({
    image: {
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageSizeOne: {
        width: 143,
        height: 212,
    },
    imageSizeTwo: {
        width: 85,
        height: 120,
    },
})