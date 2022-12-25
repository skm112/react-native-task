import { ScrollView, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { fetchTrendingMedia } from '../redux/asyncThunks'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, HorizontalMediaList, VirticalMediaList, Background } from '../components'
const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTrendingMedia({ mediaType: 'movie', timeWindow: 'week', page: 1 }))
    }, [])

    return (<>
        <Background />
        <StatusBar translucent={true} backgroundColor={'transparent'} animated={true} barStyle={'dark-content'} />
        <SafeAreaView style={styles.container} >
            <Header isLogout={true} title={"FilmKu"} />
            <ScrollView>
                <HorizontalMediaList title={"Now Showing"} />
                <VirticalMediaList title={"Popular"} />
            </ScrollView>
        </SafeAreaView>
    </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    }
})
