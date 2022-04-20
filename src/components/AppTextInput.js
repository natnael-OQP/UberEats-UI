import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const AppTextInput = ({ value, onChangeText, placeholder, ...other }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            {...other}
        />
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    input: {
        margin: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
    },
})
