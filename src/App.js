import { useState, useEffect } from "react";

import DishesList from "./components/DishList";
import Filters from "./components/Filters";

import { AllDishesList } from "./data/MockDishes";

import "./App.css";

const CategoriesList = [
  { id: 1, category: "Starter" },
  { id: 2, category: "Main Course" },
  { id: 3, category: "Desert" },
  { id: 4, category: "Sides" },
];

function App() {
  // 1. Track which category is selected
  const [selectedCategory, setCategory] = useState(CategoriesList[0].id);

  // 2. Track the search input text
  const [searchTerm, setSearchTerm] = useState("");

  // // 3. Track Veg filter (true = Veg only)
  // const [vegOnly, setVegOnly] = useState(false);

  // // 4. Track the IDs of dishes added to the party menu
  // const [selectedDishes, setSelectedDishes] = useState([]);

  // // 5. Manage ingredient modal state

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentDish, setCurrentDish] = useState(null);

  const [allDishes, setAllDishes] = useState(AllDishesList);

  const onCategoryChange = (id) => {
    const filteredCategoryDishes = AllDishesList.filter(
      (eachDish) => eachDish.categoryId === id
    );
    setCategory(id);
    setAllDishes(filteredCategoryDishes);
  };

  const onSearchClick = () => {
    const searchedDishes =
      searchTerm === ""
        ? AllDishesList
        : AllDishesList.filter((each) =>
            each.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
    setAllDishes(searchedDishes);
    setSearchTerm("");
  };

  const onSetSearchTerm = (searchValue) => {
    setSearchTerm(searchValue);
  };

  console.log(selectedCategory);

  useEffect(() => {
    console.log("Selected category changed:", selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="AppContainer">
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        searchTerm={searchTerm}
        onSetSearchTerm={onSetSearchTerm}
        onSearchClick={onSearchClick}
      />
      <DishesList DishesList={allDishes} />
    </div>
  );
}

export default App;
