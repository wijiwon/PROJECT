import axios from "axios";

function Login(id, pw) {
  console.log(id, pw);
  //   const nav = useNavigate();
  return (dispatch) => {
    axios
      .post(
        // "http://127.0.0.1:8000/signup/login",
        "/signup/login",
        { id, pw },
        { withCredentials: true }
      )
      .then((e) => {
        let result = e.data.message;
        // console.log("결과값 받자", e);
        // console.log("결과값 받자", e.data.message);
        // console.log("결과값 받자", result);
        if (result == "로그인 완료") {
          window.location.href = "/postlist";
        } else if (result == "가입된 계정이 없습니다.") {
          alert("회원가입 오류");
        }
        // dispatch({ type: "SIGNUP", payload: { id, pw } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export default Login;
