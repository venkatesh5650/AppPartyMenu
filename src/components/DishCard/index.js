import { useState } from "react";
import "./DishCard.css";

function DishCard(props) {
  const {
    DishDetails,
    onAddDish,
    onRemoveDish,
    selectedDishes,
    onViewIngredients,
  } = props;

  const { id, name, mealType, description, image, type } = DishDetails;

  const DishType = type === "VEG" ? "VegType" : "NonVegType";
  const DishTypeContainer = type === "VEG" ? "VegContainer" : "NonVegContainer";

  const [showReadMore, setShowReadMore] = useState(false);

  const isSelected = selectedDishes.some((dish) => dish.id === id) || false;

  const handleClick = () => {
    if (isSelected) {
      onRemoveDish(DishDetails);
    } else {
      onAddDish(DishDetails);
    }
  };

  return (
    <div>
      {/* Dish Card */}
      <div className="DishCard">
        <div className="DishDetails">
          <div className="TitleContainer">
            <h1 className="DishName">{name}</h1>
            <div className={DishTypeContainer}>
              <p className={DishType}>.</p>
            </div>
          </div>

          <p className="DishDescription">
            {description.slice(0, 50)}...
            <span className="spanEl">
              <button
                className="ReadMoreBtn"
                onClick={() => setShowReadMore(true)}
              >
                Read more
              </button>
            </span>
          </p>

          <div className="IngredientContainer">
            <img
              src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757650945/fi_15315413_pzrasa.png"
              className="IngredientIcon"
              alt="ingredienticon"
            />
            <button
              className="IngredientBtn"
              onClick={() => onViewIngredients(DishDetails)}
            >
              Ingredient
            </button>
          </div>
        </div>

        <div className="ImageBtn">
          <div className="img-wrapper">
            <img src={image} className="DishImage" alt={name} />
            <button
              className={isSelected ? "removeBtn" : "addBtn"}
              onClick={handleClick}
            >
              {isSelected ? "Remove" : "Add +"}
            </button>
          </div>
        </div>
      </div>

      {/* Centered Read More Modal */}
      {showReadMore && (
        <div className="modalOverlay" onClick={() => setShowReadMore(false)}>
          <div className="centerModal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h2>{name}</h2>
              <div className={DishTypeContainer}>
                <p className={DishType}>.</p>
              </div>
            </div>

            <img src={image} className="modalImage" alt={name} />

            <p>
              <strong>Meal Type:</strong> {mealType}
            </p>
            <p>{description}</p>

            <div className="modalButtons">
              <button
                className={isSelected ? "modalRemoveBtn" : "modalAddBtn"}
                onClick={handleClick}
              >
                {isSelected ? "Remove" : "Add +"}
              </button>

              <button
                className={isSelected ? "removeBtn" : "addBtn"}
                onClick={handleClick}
              ></button>

              <button
                className="IngredientBtn"
                onClick={() => onViewIngredients(DishDetails)}
              >
                Ingredients
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DishCard;
