import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ZoomFocus, BlurFocus } from "./components";
import { routes } from "./constants";

const InitApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.zoomPage} element={<ZoomFocus />} />
        <Route path={routes.blurPage} element={<BlurFocus />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return <InitApp />;
}

export default App;
