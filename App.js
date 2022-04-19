import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screen/HomeScreen/index'
import RestaurantDetailsScreen from './src/screen/RestaurantDetailsScreen'

export default function App() {
    return (
        <View style={styles.container}>
            <RestaurantDetailsScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
