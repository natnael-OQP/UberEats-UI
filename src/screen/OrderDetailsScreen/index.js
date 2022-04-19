import { StyleSheet, View, FlatList } from 'react-native'
import OrderDetailScreenHeader from './OrderDetailScreenHeader.js'
import restaurants from '../../assets/data/restaurants'
import BasketItem from '../../components/BasketItem.js'
import Separator from '../../components/Separator.js'

const OrderDetailScreen = () => {
    const restaurant = restaurants[0]

    return (
        <View style={styles.container}>
            <FlatList
                data={restaurant.dishes}
                ListHeaderComponent={OrderDetailScreenHeader}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <BasketItem basketDish={item} />}
                ItemSeparatorComponent={() => (
                    <Separator marginVertical={3} width="95%" />
                )}
            />
        </View>
    )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
})
