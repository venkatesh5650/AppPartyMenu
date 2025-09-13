import styled from "styled-components";
import { PiLessThanBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background: white;
`;

export const SearchContainer = styled.div`
  width: 328px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  gap: 10px;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 23px;
  background-color: white;
`;

export const SearhInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LessThanIcon = styled(PiLessThanBold)`
  width: 16px;
  height: 16px;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const SearchIcon = styled(CiSearch)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CategoriesContainer = styled.div`
  width: 100%; /* take full width */
  margin-top: 0;
  padding-top: 0;
  min-height: 40px; /* enough space for buttons */
  display: flex;
  justify-content: center; /* push buttons to right */
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

export const CategoryBtn = styled.button`
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 12px;
  background-color: ${(props) => (props.$isactive ? "#FF941A" : "white")};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  color: ${(props) => (props.$isactive ? "white" : "#1C1C1C")};

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const SelectedDataContainer = styled.div`
  width: 328px;
  height: 26px;
  top: 155px;
  left: 16px;
  gap: 44px;
  angle: 0 deg;
  opacity: 1;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-left:20px;
  padding-right:10px;
`;

export const SelectedData = styled.p`
  width: 207px;
  height: 19px;
  gap: 6px;
  angle: 0 deg;
  opacity: 1;
  font-family: Open Sans;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 17px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;


`;

// export default FiltersContainer = styled.div`
//   width: 106px;
//   height: 26px;
//   gap: 6px;
//   angle: 0 deg;
//   opacity: 1;
// `;

export const TogglesContainer = styled.div`
  width: 106px;
  height: 26px;
  gap: 6px;
  angle: 0 deg;
  opacity: 1;
`;

export const VegContainer = styled.div`
  width: 50px;
  height: 26px;
  angle: 0 deg;
  opacity: 1;
  border-width: 1.18px;
  border-radius: 16.55px;
  padding-top: 4.73px;
  padding-right: 9.45px;
  padding-bottom: 4.73px;
  padding-left: 9.45px;
  background: #ffffff;
  border: 1.18px solid #f3f3f3;
  display: flex;
  align-items: center;
`;

export const VegIconContainer = styled.div`
  width: 16px;
  height: 16px;
  gap: 11.82px;
  angle: 0 deg;
  opacity: 1;
  border-width: 1.18px;
  border-radius: 4.73px;
  padding: 4.73px;
  background: #ffffff;
  border: 1.18px solid #539a64;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreenSymbol = styled.p`
  width: 7px;
  height: 7px;
  angle: 0 deg;
  opacity: 1;
  color: #539a64;
`;

export const VegToggle = styled.div`
  width: 24px;
  height: 8px;
  angle: 0 deg;
  opacity: 1;
  border-radius: 4.73px;
  background: #eeeeee;
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const ToggleBtnContainer = styled.div`
  width: 50px;
  height: 26px;
  angle: 0 deg;
  opacity: 1;
  border-width: 1.18px;
  border-radius: 16.55px;
  padding-top: 4.73px;
  padding-right: 9.45px;
  padding-bottom: 4.73px;
  padding-left: 9.45px;
  background: #ffffff;
  border: 2.18px solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleButton = styled.button`
  width: 50px;
  height: 28px;
  border-radius: 20px;
  border: 2px solid ${(props) => (props.type === "veg" ? "green" : "red")};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$active ? "flex-end" : "flex-start")};
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => (props.type === "veg" ? "green" : "red")};
`;
