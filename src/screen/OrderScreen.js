import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderListItem from '../components/OrderListItem'
import Separator from '../components/Separator'

import orders from '../assets/data/orders'

const OrderScreen = () => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: '500',
                }}
            >
                Your Orders
            </Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderListItem order={item} />}
                ItemSeparatorComponent={() => <Separator />}
            />
            <OrderListItem />
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f2f2f2',
    },
})
