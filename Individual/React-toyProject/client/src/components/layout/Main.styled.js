import { styled } from "styled-components";

export const LoginDiv = styled.div`
  /* border: 1px solid; */
  width: 700px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid; */
    height: 300px;
  }

  & .btns {
    height: 100px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
