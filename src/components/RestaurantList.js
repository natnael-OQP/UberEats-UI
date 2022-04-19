import { FlatList, View } from 'react-native'
import RestaurantItem from './RestaurantItem'

const RestaurantList = ({ data }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <RestaurantItem
                        onPress={() => console.log(item.name)}
                        image={item.image}
                        name={item.name}
                        deliveryFee={item.deliveryFee}
                        minDeliveryTime={item.minDeliveryTime}
                        maxDeliveryTime={item.maxDeliveryTime}
                        rating={item.rating}
                    />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RestaurantList
