import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home"
import Page404 from "./Page404"
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
}

