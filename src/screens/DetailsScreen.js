import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, DetailsBg, Paragraph, MovieName, Rating } from '../components';
import { useRoute, useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
  const safeAreaInsets = useSafeAreaInsets()
  const navigation = useNavigation()
  const { params } = useRoute()
  const goBack = () => navigation?.goBack()
  return (<>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContentContainer}>
      <DetailsBg img={params?.item?.backdrop_path} />
      <View style={styles.contentContainer}>
        <MovieName
          name={params.item?.title}
          h1={true}
          isSecondType={true}
        />
        <Rating
          value={params.item?.vote_average}
        />
        <Paragraph
          title={'Description'}
          content={params?.item?.overview}
        />
      </View>
    </ScrollView>
    <View style={StyleSheet.flatten([styles.headerContainer, { top: safeAreaInsets.top }])}>
      <Header color={'#ffffff'} leftIcon="arrow-left" onPressleft={goBack} isLogout={true} />
    </View>
  </>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  scrollContentContainer: {
    flexGrow: 1
  },
  contentContainer: {
    flex: 1,
    margin: 8,
    padding: 8
  },
  headerContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
  }
})