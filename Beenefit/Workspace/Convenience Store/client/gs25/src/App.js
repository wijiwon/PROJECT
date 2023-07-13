import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // 서버에서 크롤링한 데이터를 담을 state
  const [message, setMessage] = useState("");

  // 크롤링한 결과를 state에 담는 함수
  const handleScrape = async () => {
    try {
      // 서버에서 반환받은 크롤링한 데이터를 res에 담는다.
      const res = await axios.get("http://localhost:5500/");
      setMessage(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 컴포넌트가 mount되는 시점에 작동
  useEffect(() => {
    handleScrape();
  }, []);

  return (
    <div className="App">
      <h1>GS25</h1>
      <div>{message}</div>
    </div>
  );
}

export default App;
