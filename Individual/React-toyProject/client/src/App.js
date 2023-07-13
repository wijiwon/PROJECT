import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Main, Signup, Postlist, PostAdd } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/postlist" element={<Postlist />}></Route>
        <Route path="/postAdd" element={<PostAdd />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
