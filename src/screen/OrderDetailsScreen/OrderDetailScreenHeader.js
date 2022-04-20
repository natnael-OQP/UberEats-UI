import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import orders from '../../assets/data/orders.js'
import { useNavigation } from '@react-navigation/native'

const OrderDetailScreenHeader = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri: orders[0].Restaurant.image }}
            />
            <View style={styles.iconContainer}>
                <Ionicons
                    onPress={() => navigation.goBack()}
                    name="arrow-back-circle"
                    size={35}
                    color="white"
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{orders[0].Restaurant.name}</Text>
                <Text style={styles.status}>
                    {orders[0].status} &#8226; 2 days ago
                </Text>
            </View>
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
    iconContainer: {
        position: 'absolute',
        top: 25,
        left: 15,
    },
})
