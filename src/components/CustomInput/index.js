import { StyleSheet,  View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ cursorColor, placeholderTextColor, style, ...otherProps }, ref) => {
    return (
        <View style={styles.container}>
            <TextInput
                cursorColor={'#AAA9B1'}
                style={styles.textInput}
                placeholderTextColor={"#AAA9B1"}
                {...otherProps}
                ref={ref}
            />
        </View>
    )
}

export default React.forwardRef(CustomInput)

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    textInput: {
        backgroundColor:'white',
        paddingHorizontal: 12,
        borderColor: '#110E47',
        color: '#110E47',
        borderWidth: 1,
        borderRadius: 40
    }
})