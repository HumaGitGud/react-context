# useContext

## Learning Goals

- [ ] **Use the Context API to avoid prop drilling**
- [ ] **Create a custom context with React**
- [ ] **Wrap components in a Provider to share state**
- [ ] **Consume context data using useContext**
- [ ] **Pass multiple values through context**

## useContext Hook

[useContext](https://react.dev/reference/react/useContext)

- The Provider pattern allows us to pass values to comonents without passing it down through props.

---

### Create a context

## Lab Deliverables

0.

- Pre-configuration: Open your terminal, navigate to the root of the project directory, and type `npm i`. This will install and configure all the necessary packages.
- Run `npx json-server --watch db.json` in the terminal
- Open a second terminal and run `npm run dev`

1.  Create a context

- In the `context` folder, create a file called `RestaurantContext.jsx`.
- Import `createContext` and `useContext` from React.
- Call `createContext()` and assign the result to a variable named `RestaurantContext`.
- Define a custom hook called `useRestaurants`. Inside the function, pass `RestaurantContext` to `useContext` and return the result.
- Export both `RestaurantContext` and `useRestaurants`.

<summary>Click Here to view solution</summary>

```
import { createContext, useContext } from "react";

export const RestaurantContext = createContext();

export const useRestaurants = () => useContext(RestaurantContext);

```

</details>

2. Wrap App in the Provider

- Import `RestaurantContext` from `RestaurantContext.jsx`.

- Use `RestaurantContext.Provider` to create a context provider component. Treat this as a parent component and wrap your entire app’s JSX inside it.

- The context is given values through the value prop. Use double curly braces ({{}}) to pass both `restaurantState` and `updateRestaurants` into the provider.

 <summary>Click Here to view solution</summary>

```
import { RestaurantContext } from "./context/RestaurantContext";

// Other code from App....

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurantState, updateRestaurants }}
    >
      <div className="App">
        <AddRestaurant />
        <RestaurantsContainer />
      </div>
    </RestaurantContext.Provider>
  );

```

</details>

3. Access context in child components

- In `RestaurantsContainer`, import the `useRestaurants` hook.
- Just like with state, destructure the `restaurants` value from `useRestaurants`.
- In `AddRestaurant`, import and use `useRestaurants` to destructure `updateRestaurants`.

<summary>Click Here to view solution</summary>

```
//Solutoin for Importing context to AddRestaurant should look similar.

import Restaurant from "./Restaurant";
import { useRestaurants } from "../context/RestaurantContext";

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

```
</details>
