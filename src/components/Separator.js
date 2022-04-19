import { StyleSheet, View } from 'react-native'

const Separator = ({ ...other }) => {
    return <View style={[styles.separator, { ...other }]} />
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 14,
        marginHorizontal: 'auto',
    },
})
