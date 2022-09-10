import { useState, useEffect } from "react";
import { CircularProgress, Box, Button } from "@mui/material";
import { FadeIn, CanvasHome, Spacer } from "../components";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";

export const HomePage = () => {
  const [renderImg, setRenderImg] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setRenderImg(true);
    }, 1000);
  }, []);

  return renderImg ? (
    <FadeIn duration={500}>
      <Box
        display="flex"
        marginTop="50px"
        marginLeft="300px"
        marginRight="300px"
        flexDirection="column"
        alignItems="center"
      >
        <CanvasHome width="700" height="400px" />
        <Spacer height={2} />
        <Button
          variant="contained"
          color="inherit"
          style={{ textTransform: "none" }}
          onClick={() => navigate(routes.zoomPage)}
        >
          {"Start"}
        </Button>
      </Box>
    </FadeIn>
  ) : (
    <Box display="flex" justifyContent="center" marginTop="300px">
      <CircularProgress />
    </Box>
  );
};
