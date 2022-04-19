import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantItem = ({
    image,
    name,
    deliveryFee,
    minDeliveryTime,
    maxDeliveryTime,
    rating,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{rating}</Text>
                </View>
            </View>
            <Text style={styles.subTitle}>
                $ ${deliveryFee} &#8226; {minDeliveryTime} - {maxDeliveryTime}
            </Text>
        </TouchableOpacity>
    )
}

export default RestaurantItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 12,
        // backgroundColor: '#'
        marginVertical: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginVertical: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10,
    },
    subTitle: {
        color: 'gray',
    },
    ratingContainer: {
        width: 30,
        height: 30,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rating: {},
})
