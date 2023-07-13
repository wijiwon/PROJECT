import { styled } from "styled-components";

export const APost = styled.div`
  font-family: "SUITE-Regular";

  width: 90%;
  margin: 30px;
  background-color: rgb(255 238 220);
  /* border: 3px solid rgb(71 22 12); */
  display: flex;
  flex-direction: column;
  align-items: center;
  & .contentDiv {
    width: 90%;
    display: flex;
    justify-content: space-between;
    & .writer {
        margin-top: 30px;
        width: 20%;
        font-size: 25px;
        font-weight: 800;
    }
    & .content {
        margin-top: 30px;
      width: 70%;
      font-size: 20px;
      text-align: left;
    }
  }
  & .btns {
    width: 90%;
    display: flex;
    justify-content: flex-end;
   
  }
`;
