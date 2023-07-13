import { styled } from "styled-components";

export const PostAddDiv = styled.div`
  /* border: 1px solid; */
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .Title {
    display: flex;
    width: 90%;
    margin: 30px;
    & div {
      font-family: "OAGothic-ExtraBold";
      font-size: 25px;
      color: #515151;
      margin-left: 20px;
      margin-right: 50px;
    }
    & input {
      font-family: "SUITE-Regular";

      width: 70%;
      font-size: 20px;
    }
  }
  & .Content {
    width: 90%;
    height: 100%;
    margin: 30px;
    & input {
      font-family: "SUITE-Regular";

      width: 80%;
      height: 90%;
      font-size: 20px;
    }
  }
`;
