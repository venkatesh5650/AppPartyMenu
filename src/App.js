import { useState, useEffect } from "react";
import Filters from "./components/Filters";
import DishesList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import { AllDishesList } from "./data/MockDishes";

const CategoriesList = [
  { id: 1, category: "Starter" },
  { id: 2, category: "Main Course" },
  { id: 3, category: "Desert" },
  { id: 4, category: "Sides" },
];

function App() {
  const [selectedCategory, setCategory] = useState(CategoriesList[0].id);
  const [searchTerm, setSearchTerm] = useState(""); // input value
  const [searchedTerm, setSearchedTerm] = useState(""); // search applied on click
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [vegOnly, setVegOnly] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);
  const [allDishes, setAllDishes] = useState(AllDishesList);

  // Veg/Non-Veg toggle handler
  const onVegOnly = (value) => setVegOnly(value);

  // Ingredient modal
  const onViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  // Add/remove dish
  const onAddDish = (dish) => setSelectedDishes((prev) => [...prev, dish]);
  const onRemoveDish = (dish) =>
    setSelectedDishes((prev) => prev.filter((d) => d.id !== dish.id));

  const onCategoryChange = (id) => setCategory(id);
  const onSetSearchTerm = (value) => setSearchTerm(value);

  // Update searchedTerm only when search icon is clicked
  const onSearchClick = () => {
    setSearchedTerm(searchTerm);
  };

  // Filter dishes whenever category, vegOnly, or searchedTerm changes
  useEffect(() => {
    let filtered = AllDishesList;

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((dish) => dish.categoryId === selectedCategory);
    }

    // Veg/Non-Veg filter
    if (vegOnly === true) {
      filtered = filtered.filter((dish) => dish.type === "VEG");
    } else if (vegOnly === false) {
      filtered = filtered.filter((dish) => dish.type === "NON-VEG");
    }

    // Search filter applied only when searchedTerm changes
    if (searchedTerm.trim() !== "") {
      filtered = filtered.filter((dish) =>
        dish.name.toLowerCase().includes(searchedTerm.toLowerCase())
      );
    }

    setAllDishes(filtered);
  }, [selectedCategory, vegOnly, searchedTerm]);

  return (
    <div className="AppContainer">
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        searchTerm={searchTerm}
        onSetSearchTerm={onSetSearchTerm}
        onSearchClick={onSearchClick}
        selectedDishes={selectedDishes}
        vegOnly={vegOnly}
        onVegOnly={onVegOnly}
      />

      <DishesList
        DishesList={allDishes}
        onAddDish={onAddDish}
        onRemoveDish={onRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={onViewIngredients}
      />

      {isModalOpen && currentDish && (
        <IngredientModal
          ingredientDetails={currentDish.ingredients}
          dishName={currentDish.name}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
