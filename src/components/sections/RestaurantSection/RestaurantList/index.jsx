import { RestaurantCard } from "./RestaurantCard";
import { restaurants } from "../../../../data/restaurants";
import styles from "./styles.module.css";

export const RestaurantList = () => {
  return (
    <ul className={styles.restaurantList}>
      {restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
      })}
    </ul>
  );
};
