import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, BBoxFocus, BlurFocus, SaturateFocus } from "./components";
import { routes } from "./constants";

const InitApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.bboxPage} element={<BBoxFocus />} />
        <Route path={routes.blurPage} element={<BlurFocus />} />
        <Route path={routes.saturatePage} element={<SaturateFocus />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return <InitApp />;
}

export default App;
