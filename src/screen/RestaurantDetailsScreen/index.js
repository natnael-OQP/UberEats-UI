import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import restaurants from '../../assets/data/restaurants'

import { Ionicons } from '@expo/vector-icons'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: restaurant.image }}
                />
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="arrow-back-circle"
                        size={45}
                        color="white"
                    />
                </View>
            </View>
            {/* info */}
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {restaurant.name}
                </Text>
                <Text style={styles.subTitle}>
                    $ ${restaurant.deliveryFee} &#8226;{' '}
                    {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}{' '}
                    minutes
                </Text>
            </View>
        </View>
    )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageContainer: {
        position: 'relative',
    },
    iconContainer: {
        top: 20,
        left: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    infoContainer: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 27,
        fontWeight: '600',
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 15,
        color: 'gray',
    },
    // subTitle: {},
})
