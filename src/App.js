import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./views/Layout/Layout";
import { Home } from "./views/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ViewsCards from "./views/ViewsCards/ViewsCards";
import Members from "./views/Members/Members";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";

function App() {
  const { cuenta } = useContext(LoginContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {cuenta && (
            <>
              <Route path="/grupos" element={<ViewsCards />} />
              <Route path="/integrantes" element={<Members />} />
            </>
          )}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
