
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./views/Layout/Layout";
import { Home } from "./views/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Cards from './views/Cards/ViewsCards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/grupos" element={<Cards />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
