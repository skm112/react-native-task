import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { MediaCard, SubHeader } from '../index'
import { useNavigation } from '@react-navigation/native'


const VirticalMediaList = ({ title }) => {
    const navigation = useNavigation()
    const mediaReducer = useSelector(s => s.media)
    const keyExtractor = (item, index) => `id-${item.id}-index-${index}`
    const renderItem = ({ item }) => (
        <MediaCard
            horizontal={true}
            poster={item?.poster_path}
            name={item?.title}
            rating={item?.vote_average}
            onPress={() => navigation?.navigate("DetailsScreen", { item })}
        />
    )

    const CustemSubHeader = useCallback(
        () => (
            <SubHeader
                title={title}
                onPress={() => navigation.navigate('SearchScreen')}
            />
        ), [title])


    return (<View style={styles.container}>
        <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: '100%' }}
        >
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponent={CustemSubHeader}
                data={mediaReducer?.data ?? []}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </ScrollView>

    </View>


    )
}

export default VirticalMediaList

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    contentContainer: {
        paddingBottom: 30
    }
})