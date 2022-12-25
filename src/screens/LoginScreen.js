import { View, Text, StatusBar, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useDebouncedInput } from '../hooks/useDebouncedInput';
import { useSelector } from 'react-redux';
import { CustomInput, showToast, TitleText, Loading } from '../components';

const LoginScreen = () => {
    const username = useDebouncedInput('')
    const password = useDebouncedInput('')
    const [isPending, setIsPending] = useState(false);
    const [toggle, setToggle] = useState(false);
    const authReducer = useSelector(s => s.auth)

    const switchScreen = () => {
        setToggle(toggle ? false : true);
        resetFields();
    }
    const resetFields = () => {
        username.clear();
        password.clear();
    }
    const signin = () => {
        if (authReducer?.user) {
            showToast("Already signed in!");
            return;
        }

        if (username.value && password.value) {
            if (isPending) return;
            setIsPending(true)
            auth()
                .signInWithEmailAndPassword(username.value, password.value)
                .then(() => {
                    resetFields();
                    showToast("Successfully signed in!");
                    setIsPending(false)
                })
                .catch(error => {
                    resetFields();
                    showToast(error.message);
                    setIsPending(false)
                })

        } else {
            showToast("All fields are required.")
        }
    }
    const signup = () => {
        if (authReducer?.user) {
            showToast("Already signed in!");
            return;
        }
        if (username.value && password.value) {
            if (isPending) return;
            setIsPending(true)
            auth()
                .createUserWithEmailAndPassword(username.value, password.value)
                .then(() => {
                    showToast("User account created & signed in!");
                    setIsPending(false)
                })
                .catch(error => {
                    showToast(error.message);
                    setIsPending(false)
                })

        } else {
            showToast("All fields are required.")
        }
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode='interactive'
            contentContainerStyle={styles.container}>
            <View style={styles.background} />
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                backgroundColor={'rgba(0,0,0,0)'}
                translucent={true}
            />
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <TitleText>{toggle ? "Signup to Firebase" : "Signin to Firebase"}</TitleText>
                </View>
                <CustomInput
                    placeholder='Username'
                    {...username.options}
                />
                <CustomInput
                    placeholder='Password'
                    {...password.options}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={toggle ? signup : signin}
                >
                    <Text style={styles.buttonText}>{toggle ? "Signup" : "Signin"}</Text>
                </TouchableOpacity>
                <Pressable style={styles.linkContainer} onPress={switchScreen}>
                    <Text style={styles.link}>{toggle ? "Already have account? Sigin here!" : "Register here!"}</Text>
                </Pressable>
            </View>
            <Loading isLoading={isPending} />
        </ScrollView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    background: {
        backgroundColor: '#F2F2F2',
        ...StyleSheet.absoluteFillObject
    },
    contentContainer: {
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        padding: 8,
        borderRadius: 4,
        alignItems: 'stretch',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    titleContainer: {
        alignItems: 'center',
        padding: 16,
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#110E47',
        padding: 8,
        paddingHorizontal: 24,
        borderRadius: 50,
        marginVertical: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        letterSpacing: 1
    },
    linkContainer: {
        alignSelf: 'center',
        padding: 8
    },
    link: {
        textDecorationLine: 'underline',
        color: '#110E47',
    }
})