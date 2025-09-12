import DishCard from "../DishCard";

import { DishesViewContainer, AllDishesContainer } from "./styledComponents";

function DishesList(props) {
  const { DishesList } = props;

  return (
    <DishesViewContainer>
      <AllDishesContainer>
        {DishesList.map((each) => (
          <DishCard key={each.id} DishDetails={each} />
        ))}
      </AllDishesContainer>
    </DishesViewContainer>
  );
}

export default DishesList;
