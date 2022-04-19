import RestaurantList from '../components/RestaurantList'
import restaurant from '../assets/data/restaurants'

const HomeScreen = () => {
    return <RestaurantList data={restaurant} />
}

export default HomeScreen
