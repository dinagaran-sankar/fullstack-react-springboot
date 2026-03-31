import styled from "styled-components";

// css styling using props
const EasyButton = styled.button`
 background-color: ${(props) =>(props.$primary ? "blue" :  "red")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover{
     background-color: black;
  }

  &:focus{
     outline: 2px solid white;
  }
`;

export default EasyButton;