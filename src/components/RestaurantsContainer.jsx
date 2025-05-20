import { useRestaurants } from "../context/RestaurantContext";
import Restaurant from "./Restaurant";

function RestaurantsContainer() {
  const { restaurants } = useRestaurants();

  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;