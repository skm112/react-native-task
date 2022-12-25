import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { MediaCard, SubHeader } from '../index'
import { useNavigation } from '@react-navigation/native'

const HorizontalMediaList = ({ title }) => {
    const mediaReducer = useSelector(s => s.media)
    const navigation = useNavigation()
    const keyExtractor = (item, index) => `id-${item.id}-index-${index}`
    const renderItem = ({ item, index }) => (<MediaCard
        poster={item?.poster_path}
        name={item?.title}
        rating={item?.vote_average}
        onPress={() => navigation?.navigate("DetailsScreen", { item })}
    />)


    return (
        <>
            <SubHeader
                title={title}
                onPress={() => navigation.navigate('SearchScreen')}
            />
            <FlatList
                horizontal={true}
                data={mediaReducer?.data ?? []}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </>


    )
}

export default HorizontalMediaList
