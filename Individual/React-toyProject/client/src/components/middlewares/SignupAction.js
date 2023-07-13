// import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Signupregex(id, pw, name) {
  console.log(id, pw, name);
  //   const nav = useNavigate();
  return (dispatch) => {
    axios
      .post(
        "http://127.0.0.1:8000/signup/create",
        { id, pw, name },
        { withCredentials: true }
      )
      .then((e) => {
          let result = e.data.message;
          console.log("결과값 받자", e);
          console.log("결과값 받자", e.data.message);
          console.log("결과값 받자", result);
        if (result == "회원가입 완료") {
          window.location.href = "/";
        } else if (result == "가입된 계정이 있습니다.") {
          alert("회원가입 오류");
        }
        // dispatch({ type: "SIGNUP", payload: { id, pw } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export default Signupregex;

