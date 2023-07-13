import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "./middlewares";

const SignupBtn = (id, pw) => {
  // axios 보내기 전에 정규식 검사 진행
  // axios.post로 입력한 값을 보내서
  // 서버단에서 중복검사하고 없으면 회원가입 성공
  // 있으면 회원가입 실패
  // 받아온 값 확인해서 성공한 값을 받아오면

  const dispatch = useDispatch();
  return <div>SignupBtn</div>;
};

export default SignupBtn;
