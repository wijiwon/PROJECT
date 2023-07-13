import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

// 사용할 모듈
// npm i styled-components redux react-redux react-router-dom@6 redux-thunk axios

// ❗로그인을 해도 쿠키가 보이지 않던 이슈❗
// 클라이언트단의 pakage.json의 "proxy":"http://127.0.0.1:8000",를 추가하고
// axios 경로가 http://127.0.0.1:8000/signup/login 이면 /signup/login만 입력하면 자동으로 실행
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
