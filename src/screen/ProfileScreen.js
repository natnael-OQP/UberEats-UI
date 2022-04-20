import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppTextInput from '../components/AppTextInput'

const Profile = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [lat, setLat] = useState('0')
    const [lng, setLng] = useState('0')

    const navigation = useNavigation()

    return (
        <View>
            <Text style={styles.title}>Profile</Text>
            <AppTextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
            <AppTextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
            />
            <AppTextInput
                value={lat}
                onChangeText={setLat}
                placeholder="Latitude"
                keyboardType="numeric"
            />
            <AppTextInput
                value={lng}
                onChangeText={setLng}
                placeholder="Longitude"
                keyboardType="numeric"
            />
            <Button title="Save" />
            <Text style={{ textAlign: 'center', color: 'red', margin: 10 }}>
                Sign out
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
    },
})

export default Profile
