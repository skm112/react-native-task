import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useLogout } from '../../hooks'

const iconDefaultProps = {
    backgroundColor: "transparent",
    underlayColor: "transparent",
    size: 16,
}

const Header = ({ title, leftIcon, rightIcon, onPressleft, onPressRight, isLogout, color = '#110E47' }) => {
    const logout = useLogout()

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Icon.Button
                    {...iconDefaultProps}
                    iconStyle={styles.iconStyle}
                    name={leftIcon}
                    onPress={onPressleft}
                    color={color}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Icon.Button
                    {...iconDefaultProps}
                    iconStyle={styles.iconStyle}
                    name={isLogout ? "logout" : rightIcon}
                    onPress={isLogout ? logout.logoutHandler : onPressRight}
                    color={color}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: 60,
        padding: 8
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '20%',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '20%',
    },
    title: {
        fontSize: 16,
        fontWeight: '900',
        letterSpacing: 1,
        color: '#110E47'
    },
    iconStyle: {
        marginRight: 0,
    }
})