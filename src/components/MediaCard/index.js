import { Pressable } from 'react-native'
import React from 'react';
import HorizontalMediaCard from './HorizontalMediaCard'
import VerticalMediaCard from './VerticalMediaCard'
const MediaCard = ({ poster, name, rating, horizontal, onPress }) => {
    const CustomMediaCard = horizontal ? HorizontalMediaCard : VerticalMediaCard
    return (
        <Pressable onPress={onPress}>
            <CustomMediaCard
                poster={poster}
                name={name}
                rating={rating}
            />
        </Pressable>
    )
}

export default MediaCard