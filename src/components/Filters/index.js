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
} from "./styledComponents";

const CategoriesList = [
  { id: 1, category: "Starter" },
  { id: 2, category: "Main Course" },
  { id: 3, category: "Desert" },
  { id: 4, category: "Sides" },
];

function Filters(props) {
  const {
    onCategoryChange,
    activeCategory,
    searchTerm,
    onSetSearchTerm,
    onSearchClick,
  } = props;

  return (
    <FiltersContainer>
      <SearchContainer>
        <SearhInputContainer>
          <LessThanIcon />
          <SearchInput
            type="text"
            placeholder="Search dish for your party..."
            onChange={(event) => onSetSearchTerm(event.target.value)}
            value={searchTerm}
          />
        </SearhInputContainer>
        <SearchIcon onClick={onSearchClick} />
      </SearchContainer>
      <CategoriesContainer>
        {CategoriesList.map((each) => (
          <CategoryBtn
            key={each.id}
            onClick={() => onCategoryChange(each.id)}
            $isactive={activeCategory === each.id}
          >
            {each.category} 0
          </CategoryBtn>
        ))}
      </CategoriesContainer>
      <SelectedDataContainer>
        <SelectedData>Main Courses Selected (0)</SelectedData>
      </SelectedDataContainer>
    </FiltersContainer>
  );
}

export default Filters;
