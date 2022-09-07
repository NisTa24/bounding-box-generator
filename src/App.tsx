import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

const INPUT_IMAGE_URL =
  "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?cs=srgb&dl=pexels-pixabay-271816.jpg&fm=jpg";

const InitApp = () => {
  const [renderImg, setRenderImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderImg(true);
    }, 3000);
  }, []);

  return renderImg ? (
    <Box display="flex" justifyContent="center" marginTop="50px">
      <img src={INPUT_IMAGE_URL} width="800px" height="500px" />
    </Box>
  ) : (
    <Box display="flex" justifyContent="center" marginTop="200px">
      <CircularProgress />
    </Box>
  );
};

function App() {
  return (
    <div className="App">
      <InitApp />
    </div>
  );
}

export default App;
