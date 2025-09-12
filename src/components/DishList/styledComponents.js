import styled from "styled-components";

export const DishesViewContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column; /* stack vertically */
  justify-content: flex-start;
  align-items: center;
  padding: 7px;
  background-color: white;
  gap: 0px; /* spacing between search and categories */
`;

export const AllDishesContainer = styled.div`
  // width: 328px;
  // top: 209px;
  // left: 16px;
  // gap: 24px;
  // angle: 0 deg;
  // opacity: 1;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
