import styled from "styled-components";
import { PiLessThanBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
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
`;

export const SelectedData = styled.p`
  width: 177px;
  height: 19px;
  gap: 6px;
  angle: 0 deg;
  opacity: 1;
  font-family: Open Sans;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 14px;
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
