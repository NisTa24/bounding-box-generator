import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Zoom } from "./components";
import { routes } from "./constants";

const InitApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.zoomPage} element={<Zoom />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return <InitApp />;
}

export default App;
