import { styled } from "styled-components";

export const PostBtn = styled.button`
  font-family: "OAGothic-ExtraBold";
  width: 170px;
  height: 60px;
  margin: 10px;
  border: 3px dashed #515151;
  border-radius: 2em;
  background-color: white;
  cursor: pointer;
  font-size: 20px;
  color: #515151;

  &:hover {
    background-color: #515151;
    color: white;
    border: 3px dashed white;
  }
`;
