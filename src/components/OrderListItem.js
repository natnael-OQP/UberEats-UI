import { View, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({ order }) => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => navigation.navigate('OrderDetail')}
            style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
            }}
        >
            {order && (
                <>
                    <Image
                        source={{ uri: order.Restaurant.image }}
                        style={{ width: 75, height: 75, marginRight: 5 }}
                    />

                    <View>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>
                            {order.Restaurant.name}
                        </Text>
                        <Text style={{ marginVertical: 5 }}>
                            3 items &#8226; $38.45
                        </Text>
                        <Text>2 days ago &#8226; {order.status} </Text>
                    </View>
                </>
            )}
        </Pressable>
    )
}

export default OrderListItem
