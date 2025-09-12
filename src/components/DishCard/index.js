import "./DishCard.css";

function DishCard(props) {
  const { DishDetails } = props;
  const { id, name, mealType, description, image, type } = DishDetails;

  const DishType = type === "VEG" ? "VegType" : "NonVegType";
  const DishTypeContainer = type === "VEG" ? "VegContainer" : "NonVegContainer";

  return (
    <div>
      <div className="DishCard">
        <div className="DishDetails">
          <div className="TitleContainer">
            <h1 className="DishName">{name}</h1>
            <div className={DishTypeContainer}>
              <p className={DishType}>.</p>
            </div>
          </div>
          <p className="DishDescription">
            {description}...<span className="spanEl">Read more</span>
          </p>
          <div className="IngredientContainer">
            <img
              src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757650945/fi_15315413_pzrasa.png"
              className="IngredientIcon"
              alt="ingredienticon"
            />
            <p className="Ingredient">Ingredient</p>
          </div>
        </div>
        <div className="ImageBtn">
          <div className="img-wrapper">
            <img src={image} className="DishImage" alt="" />

            <button className="addBtn">Add +</button>
          </div>
        </div>
      </div>
      <hr className="horline" />
    </div>
  );
}

export default DishCard;
