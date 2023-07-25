import { RestaurantList } from "./RestaurantList";
import Icon from "../../../assets/RestaurantSectionIcon.svg";
import styles from "./style.module.css";

export const RestaurantSection = () => {
  return (
    <section
      className={`${styles.restaurantSection} section-padding section-green`}
    >
      <div className="container">
        <img src={Icon} alt="Ícone laranja" />
        <h2 className="title sm white">Restaurantes famosos</h2>
        <RestaurantList />
      </div>
    </section>
  );
};
