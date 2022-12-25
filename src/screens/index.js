import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SearchScreen from './SearchScreen';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, resetUser } from '../redux/slices/authSlice';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    const [initializing, setInitializing] = useState(true);
    const dispatch = useDispatch()
    const authReducer = useSelector(s => s.auth)


    const onAuthStateChanged = (user) => {
        if (user?.providerData?.length > 0) {
            dispatch(setUser(user.providerData[0]));
        } else {

            dispatch(resetUser());
        }
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber
    }, []);

    if (initializing) return null;

    return (<>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false, orientation: 'portrait_up' }}>
            {
                authReducer?.user ? (

                    <Stack.Group>
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="SearchScreen" component={SearchScreen} />
                        <Stack.Group screenOptions={{ presentation: 'fullScreenModal', animation: 'fade_from_bottom' }}>
                            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                        </Stack.Group>
                    </Stack.Group>
                ) : (
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                )
            }
        </Stack.Navigator>
    </>
    )
}

export default RootStack