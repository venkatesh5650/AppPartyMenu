import DishCard from "../DishCard";

import { DishesViewContainer, AllDishesContainer } from "./styledComponents";

function DishesList(props) {
  const {
    DishesList,
    onAddDish,
    onRemoveDish,
    selectedDishes,
    onViewIngredients,
  } = props;

  return (
    <DishesViewContainer>
      <AllDishesContainer>
        {DishesList.map((each) => (
          <DishCard
            key={each.id}
            DishDetails={each}
            onAddDish={onAddDish}
            onRemoveDish={onRemoveDish}
            selectedDishes={selectedDishes}
            onViewIngredients={onViewIngredients}
          />
        ))}
      </AllDishesContainer>
    </DishesViewContainer>
  );
}

export default DishesList;
