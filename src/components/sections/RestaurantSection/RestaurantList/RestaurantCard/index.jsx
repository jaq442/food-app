import styles from "./styles.module.css"

export const RestaurantCard = ({restaurant }) => {
    return (
        <li className={styles.restaurantCard}>
            <img src={restaurant.img} alt={restaurant.name} />
            <h3 className="title white sm">{restaurant.name}</h3>
            <p className="paragraph white">{restaurant.description}</p>
        </li>
    )
}