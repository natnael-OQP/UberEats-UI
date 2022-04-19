import { StyleSheet, View, FlatList } from 'react-native'
import restaurants from '../../assets/data/restaurants'
import MenuItem from '../../components/MenuItem'

import Header from './Header'

const RestaurantDetailsScreen = () => {
    const restaurant = restaurants[0]
    return (
        <View style={styles.screen}>
            <FlatList
                ListHeaderComponent={() => (
                    <Header
                        image={restaurant.image}
                        name={restaurant.name}
                        rating={restaurant.rating}
                    />
                )}
                data={restaurant.dishes}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <MenuItem
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    menu: {
        marginHorizontal: 12,
    },
})
