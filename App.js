import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator()

import RootNavigator from './src/navigation/RootNavigator'
import OrderNavigator from './src/navigation/OrderNavigator'
import ProfileScreen from './src/screen/ProfileScreen'
export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator
                    activeColor="#000"
                    barStyle={{ backgroundColor: '#fff' }}
                >
                    {/* Home */}
                    <Tab.Screen
                        name="Home"
                        component={RootNavigator}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name="home"
                                    color={color}
                                    size={26}
                                />
                            ),
                        }}
                    />
                    {/* Orders */}
                    <Tab.Screen
                        name="Orders"
                        component={OrderNavigator}
                        options={{
                            tabBarLabel: 'Order',
                            tabBarIcon: ({ color }) => (
                                <MaterialIcons
                                    name="list-alt"
                                    size={26}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    {/* Profile */}
                    <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5
                                    name="user-alt"
                                    size={26}
                                    color={color}
                                    styles={{ marginBottom: 7 }}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
