import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Separator from '../../components/Separator'
import { FontAwesome } from '@expo/vector-icons'

const Header = ({ image, name, rating }) => {
    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="arrow-back-circle"
                        size={35}
                        color="white"
                    />
                </View>
            </View>
            {/* info */}
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.rating}>
                    {rating}{' '}
                    <FontAwesome
                        style={{ marginLeft: 0.3 }}
                        name="star"
                        size={16}
                        color="gold"
                    />
                </Text>
            </View>
            <Separator />
            <Text style={styles.menu}>Menu</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
    },
    iconContainer: {
        position: 'absolute',
        top: 25,
        left: 15,
    },
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
    rating: {
        fontSize: 17,
        color: 'gray',
    },
    menu: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 10,
    },
})
