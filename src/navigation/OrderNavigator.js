import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OrderScreen from '../screen/OrderScreen'
import OrderDetailScreen from '../screen/OrderDetailsScreen'

export default function OrderNavigator() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen
                name="OrderDetail"
                component={OrderDetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
