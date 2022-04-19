import { StyleSheet, Text, View, FlatList } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import Separator from '../components/Separator'
import BasketItem from '../components/BasketItem'
import restaurants from '../assets/data/restaurants'

const BasketScreen = () => {
    const restaurant = restaurants[0]
    return (
        <View style={styles.container}>
            <AntDesign
                name="arrowleft"
                size={27}
                color="black"
                style={styles.ArrowIcon}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Brothers Barbecue</Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        textTransform: 'capitalize',
                        marginVertical: 10,
                    }}
                >
                    your Items
                </Text>
                <FlatList
                    data={restaurant.dishes}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <BasketItem basketDish={item} />}
                />
                {/*
            
            */}
                <Separator />
            </View>
            <View style={styles.priceContainer}></View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>
            </View>
        </View>
    )
}

export default BasketScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 15,
    },
    header: {
        marginTop: 60,
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        marginVertical: 10,
    },
    description: {
        color: 'gray',
    },
    ArrowIcon: {
        position: 'absolute',
        top: 25,
        left: 15,
    },
    IconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    quantity: {
        fontSize: 27,
        fontWeight: '500',
        marginHorizontal: 12,
        marginBottom: 3,
    },
    button: {
        marginTop: 'auto',
        backgroundColor: '#000',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: -10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
})
