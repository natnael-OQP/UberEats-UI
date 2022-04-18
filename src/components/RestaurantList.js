import { StyleSheet, FlatList, View } from 'react-native'
import RestaurantItem from './RestaurantItem'
import restaurant from '../assets/data/restaurants'

const RestaurantList = () => {
    return (
        <View>
            <FlatList
                data={restaurant}
                renderItem={({ item }) => (
                    <RestaurantItem
                        onPress={() => console.log(item.name)}
                        image={item.image}
                        name={item.name}
                        deliveryFee={item.deliveryFee}
                        minDeliveryTime={item.minDeliveryTime}
                        maxDeliveryTime={item.maxDeliveryTime}
                    />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RestaurantList

const styles = StyleSheet.create({})
