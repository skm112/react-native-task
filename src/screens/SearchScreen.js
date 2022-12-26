import { StatusBar, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { fetchTrendingMedia, fetchSearchMovies } from '../redux/asyncThunks'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Header, MediaCard, Background, CustomInput } from '../components';
import { FlashList } from "@shopify/flash-list";
import { debounce } from 'lodash';

const SearchScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState("")
  const mediaReducer = useSelector(s => s.media)
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTrendingMedia({ mediaType: 'movie', timeWindow: 'week', page: 1, indicatorType: 'initial' }))
  }, [])

  const keyExtractor = (item, index) => `id-${item.id}-index-${index}`
  const renderItem = ({ item, index }) => (
    <MediaCard
      horizontal={true}
      poster={item?.poster_path}
      name={item?.title}
      rating={item?.vote_average}
      onPress={() => navigation?.navigate("DetailsScreen", { item })}
    />
  )
  const goBack = () => navigation?.goBack();

  const onEndReached = () => {
    if (searchText) {
      const _page = Number(mediaReducer?.searchPage) + 1
      dispatch(fetchSearchMovies({ query: searchText, page: _page, indicatorType: 'next-page' }))
    } else {
      const _page = Number(mediaReducer?.page) + 1
      dispatch(fetchTrendingMedia({ mediaType: 'movie', timeWindow: 'week', page: _page, indicatorType: 'next-page' }))
    }
  }

  const onRefresh = () => {
    searchRef.current?.clear()
    setSearchText('')
    dispatch(fetchTrendingMedia({ mediaType: 'movie', timeWindow: 'week', page: 1, indicatorType: 'refresh' }))
  }

  const debounceChangeText = useCallback(debounce((text) => {
    setSearchText(text)
    dispatch(fetchSearchMovies({ query: text, page: 1, indicatorType: 'initial' }))
  }, 1000), [])

  const listFooterComponent = () => {
    if (mediaReducer?.isNextLoading) {
      return (<ActivityIndicator size={'small'} animating={true} color="#110E47" />)
    }
    return null
  }

  return (
    <>
      <Background />
      <StatusBar translucent={true} backgroundColor={'transparent'} animated={true} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container} >
        <Header leftIcon="arrow-left" onPressleft={goBack} isLogout={true} title={"FilmKu"} />
        <CustomInput
          ref={searchRef}
          placeholder={'Search movie...'}
          onChangeText={debounceChangeText}
        />
        <FlashList
          keyboardDismissMode='on-drag'
          estimatedItemSize={200}
          contentContainerStyle={styles.contentContainerStyle}
          data={searchText ? mediaReducer?.searchData : mediaReducer?.data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={onEndReached}
          ListFooterComponent={listFooterComponent}
          refreshControl={
            <RefreshControl
              refreshing={mediaReducer?.isRefreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </SafeAreaView>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  contentContainerStyle: {
    paddingBottom: 30
  }
})