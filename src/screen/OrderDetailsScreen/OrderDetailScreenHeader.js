import { StyleSheet, Text, View, Image } from 'react-native'

import orders from '../../assets/data/orders.js'

const OrderDetailScreenHeader = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri: orders[0].Restaurant.image }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{orders[0].Restaurant.name}</Text>
                <Text style={styles.status}>
                    {orders[0].status} &#8226; 2 days ago
                </Text>
            </View>{' '}
        </View>
    )
}

export default OrderDetailScreenHeader

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    infoContainer: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    status: {
        fontSize: 17,
        color: 'gray',
    },
})
