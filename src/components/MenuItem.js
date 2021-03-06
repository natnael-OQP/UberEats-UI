import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MenuItem = ({ name, description, price, image }) => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() =>
                navigation.navigate('Dish', { name, description, price, image })
            }
        >
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {description}
                    </Text>
                    <Text style={styles.price}>$ {price}</Text>
                </View>
                {image && (
                    <Image style={styles.image} source={{ uri: image }} />
                )}
            </View>
        </Pressable>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    description: {
        fontSize: 14,
        color: 'gray',
        marginVertical: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
    },
    image: {
        height: 80,
        aspectRatio: 1,
    },
})
