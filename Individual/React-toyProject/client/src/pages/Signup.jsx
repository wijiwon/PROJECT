import React from "react";
import { useEffect, useState } from "react";
import {
  UserBtn,
  UserInput,
  LoginDiv,
  SignupResult,
} from "../components/layout";
import { Link } from "react-router-dom";
import { Signupregex } from "../components/middlewares";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [contentID, setContentID] = useState("");
  const [contentPW, setContentPW] = useState("");
  const [textCon, setTextCon] = useState("");

  // 정규식 비교 ---------------------------------------------
  const isID = (asValue) => {
    // 이메일 형식. @포함 여부와 대소문자 구분 없음
    const regID =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regID.test(asValue);
  };

  const isPW = (asValue) => {
    // 최소 8자. 하나이상의 대소문자와 특수문자
    const regPW =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regPW.test(asValue);
  };
  // --------------------------------------------------------

  // 정규식 결과 보여주는 함수 --------------------------------
  const Col = textCon ? "blue" : "red";

  console.log(contentID, textCon);

  const InputsID = () => {
    if (isID(id) == false) {
      // 아이디 조건 넣어 입력하세요 넣기
      console.log("아이디틀림");
      setTextCon(false);
      setContentID("이메일 형식으로 기입해주세요!");
    } else {
      // 올바른 아이디입니다
      console.log("아이디맞");
      setTextCon(true);
      setContentID("올바른 형식의 아이디입니다.");
    }
  };
  const InputsPW = () => {
    if (isPW(pw) == false) {
      // 비밀번호 조건 넣어 입력하세요 넣기
      console.log("패스워드틀림");
      setTextCon(false);
      setContentPW("최소 8자.대소문자+특수문자!");
    } else{
      // 올바른 비밀번호 입니다.
      console.log("패스워드맞");
      setTextCon(true);
      setContentPW("올바른 형식의 패스워드입니다.");
    }
  };

  const Reasult = () => {
    if (isID(id) && isPW(pw)) {
      console.log("넘어가?");
      signup(id, pw, name);
    }
  };

  // --------------------------------------------------------

  const signup = (id, pw, name) => {
    // 정규식이 올바르면 해당 함수를 실행
    console.log("넘어가냐고");
    dispatch(Signupregex(id, pw, name));
  };

  return (
    <LoginDiv>
      <div>
        <Link to={"/"}>로그인페이지</Link>
        <div className="inputs">
          <UserInput
            onChange={(e) => {
              setId(e.target.value);
            }}
            onInput={InputsID}
            type="text"
            placeholder="아이디를 입력하세요."
          />
          <SignupResult style={{ color: Col }}>{contentID}</SignupResult>
          <UserInput
            onChange={(e) => {
              setPw(e.target.value);
            }}
            onInput={InputsPW}
            type="password"
            placeholder="패스워드를 입력하세요."
          />
          <SignupResult style={{ color: Col }}>{contentPW}</SignupResult>
          <UserInput
            onChange={(e) => {setName(e.target.value);}}
            type="text"
            placeholder="닉네임 입력하세요."
          />
        </div>
        <div className="btns">
          <UserBtn onClick={Reasult}>SignUp</UserBtn>
        </div>
      </div>
    </LoginDiv>
  );
};

export default Signup;
