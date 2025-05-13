import RestaurantsContainer from "./components/RestaurantsContainer";

function RestaurantSection() {
  return (
    <section>
      <RestaurantFilter />
      <RestaurantsContainer />
    </section>
  );
}

export default RestaurantSection
