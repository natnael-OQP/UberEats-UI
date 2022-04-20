import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BasketScreen from '../screen/BasketScreen'
import DishDetailsScreen from '../screen/DishDetailsScreen'
import HomeScreen from '../screen/HomeScreen'
import RestaurantDetailsScreen from '../screen/RestaurantDetailsScreen'

export default function RootNavigator() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Restaurants" component={HomeScreen} />
            <Stack.Screen
                name="Restaurant"
                component={RestaurantDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dish"
                component={DishDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Basket"
                component={BasketScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
