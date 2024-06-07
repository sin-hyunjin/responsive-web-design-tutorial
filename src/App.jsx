import { Routes, Route } from "react-router";
import Container from "@components/common/Container";
import Main from "@components/pages/Main";
import { MAIN_PATH } from "@constants";
import "@assets/scss/_main.scss";
// App.jsx
function App() {
  return (
    <>
      <Routes>
        <Route element={<Container />}>
          <Route path={MAIN_PATH()} element={<Main />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
