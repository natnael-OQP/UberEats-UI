import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import { AntDesign } from '@expo/vector-icons'
import Separator from '../components/Separator'

const MenuItemDetailedScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const price = 23.5

    const onMinus = () => {
        setQuantity(quantity + 1)
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const getTotal = () => {
        return (price * quantity).toFixed(2)
    }

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
                <Text style={styles.description}>
                    Double meat, gouda cheese, cheddar cheese, cooked ham,
                    bacon, egg, salad and rustic potatoes.
                </Text>
                <Separator />
            </View>
            <View style={styles.IconsContainer}>
                <AntDesign
                    onPress={onMinus}
                    name="minuscircleo"
                    size={47}
                    color={'black'}
                />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign
                    onPress={onPlus}
                    name="pluscircleo"
                    size={47}
                    color="black"
                />
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Add {quantity} to basket &#8226; {getTotal()}
                </Text>
            </View>
        </View>
    )
}

export default MenuItemDetailedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    header: {
        marginTop: 60,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
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
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
})
