import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import RestaurantDetailsScreen from '../screen/RestaurantDetailsScreen'

export default function RootNavigator() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Restaurant"
                component={RestaurantDetailsScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
