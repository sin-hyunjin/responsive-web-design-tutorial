import { Routes, Route } from "react-router";
import Container from "@components/common/Container";
import Main from "@components/pages/Main";

import "@assets/scss/_index.scss";

// App.jsx
function App() {
  return (
    <>
      <Routes>
        <Route element={<Container />}>
          {/* <Route path="/" element={<Navigate to="/home/0" replace />} /> */}
          <Route path="/:id" element={<Main />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
