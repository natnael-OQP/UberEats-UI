import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantItem = ({
    image,
    name,
    deliveryFee,
    minDeliveryTime,
    maxDeliveryTime,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    $ ${deliveryFee} &#8226; {minDeliveryTime} -{' '}
                    {maxDeliveryTime}
                </Text>
            </View>
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
    infoContainer: {},
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10,
    },
    subTitle: {
        color: 'gray',
    },
})
