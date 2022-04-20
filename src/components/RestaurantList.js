import { FlatList, View } from 'react-native'
import RestaurantItem from './RestaurantItem'

import { useNavigation } from '@react-navigation/native'

const RestaurantList = ({ data }) => {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <RestaurantItem
                        onPress={() =>
                            navigation.navigate('Restaurant', { item })
                        }
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
