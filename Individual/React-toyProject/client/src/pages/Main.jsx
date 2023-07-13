import React from "react";
import { LoginDiv, UserInput, UserBtn } from "../components/layout";
import { useNavigate } from "react-router-dom";
import { Login } from "../components/middlewares";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const HandleClick = () => {
    return nav("/signup");
  };

  const LoginBtn = () => {
    dispatch(Login(id, pw));
  };

  return (
    <LoginDiv>
      <div>
        <div className="inputs">
          <UserInput
            onChange={(e) => {
              setID(e.target.value);
            }}
            type="text"
            placeholder="아이디를 입력하세요."
          />
          <UserInput
            onChange={(e) => {
              setPW(e.target.value);
            }}
            type="password"
            placeholder="패스워드를 입력하세요."
          />
        </div>
        <div className="btns">
          <UserBtn onClick={HandleClick}>SignUp</UserBtn>
          <UserBtn onClick={LoginBtn}>Login</UserBtn>
        </div>
      </div>
    </LoginDiv>
  );
};

export default Main;
