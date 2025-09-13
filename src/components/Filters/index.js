import React from "react";
import {
  FiltersContainer,
  SearchContainer,
  SearhInputContainer,
  LessThanIcon,
  SearchInput,
  SearchIcon,
  CategoriesContainer,
  CategoryBtn,
  SelectedDataContainer,
  SelectedData,
  ToggleContainer,
  ToggleBtnContainer,
  ToggleButton,
  Circle,
} from "./styledComponents";

const CategoriesList = [
  { id: 1, category: "Starter" },
  { id: 2, category: "Main Course" },
  { id: 3, category: "Desert" },
  { id: 4, category: "Sides" },
];

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSetSearchTerm,
  onSearchClick,
  selectedDishes,
  vegOnly,
  onVegOnly,
}) {
  const selectedCategory = CategoriesList.find(
    (each) => each.id === activeCategory
  );

  const selectedCategoryCount = selectedDishes.filter(
    (each) => each.categoryId === selectedCategory?.id
  ).length;

  // Veg toggle clicked
  const handleVegClick = () => {
    if (vegOnly === true) {
      onVegOnly(null); // turn off Veg
    } else {
      onVegOnly(true); // turn on Veg
    }
  };

  // Non-Veg toggle clicked
  const handleNonVegClick = () => {
    if (vegOnly === false) {
      onVegOnly(null); // turn off Non-Veg
    } else {
      onVegOnly(false); // turn on Non-Veg
    }
  };

  return (
    <FiltersContainer>
      {/* Search Bar */}
      <SearchContainer>
        <SearhInputContainer>
          <LessThanIcon />
          <SearchInput
            type="text"
            placeholder="Search dish for your party..."
            value={searchTerm}
            onChange={(e) => onSetSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearchClick(); // trigger search on Enter key
              }
            }}
          />
        </SearhInputContainer>
        <SearchIcon onClick={onSearchClick} /> {/* trigger search on click */}
      </SearchContainer>

      {/* Category Buttons */}
      <CategoriesContainer>
        {CategoriesList.map((each) => (
          <CategoryBtn
            key={each.id}
            $isactive={activeCategory === each.id}
            onClick={() => onCategoryChange(each.id)}
          >
            {each.category}
          </CategoryBtn>
        ))}
      </CategoriesContainer>

      {/* Selected Dish Count & Veg/Non-Veg Toggles */}
      <SelectedDataContainer>
        <SelectedData>
          {selectedCategory?.category} Selected ({selectedCategoryCount})
        </SelectedData>

        <ToggleContainer>
          <ToggleBtnContainer>
            <ToggleButton
              $active={vegOnly === true}
              onClick={handleVegClick}
            >
              <Circle type="veg" />
            </ToggleButton>
          </ToggleBtnContainer>

          <ToggleBtnContainer>
            <ToggleButton
              $active={vegOnly === false}
              onClick={handleNonVegClick}
            >
              <Circle type="nonveg" />
            </ToggleButton>
          </ToggleBtnContainer>
        </ToggleContainer>
      </SelectedDataContainer>
    </FiltersContainer>
  );
}

export default Filters;
