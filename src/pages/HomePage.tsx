import { useState, useEffect } from "react";
import { CircularProgress, Box, Button, Typography } from "@mui/material";
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
        <Typography variant="h2" fontWeight={600} fontSize={14}>
          {"Start by choosing a focus method: "}
        </Typography>
        <Spacer height={1} />
        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            variant="contained"
            color="inherit"
            style={{ textTransform: "none" }}
            onClick={() => navigate(routes.zoomPage)}
          >
            {"Zoom"}
          </Button>
          <Button
            variant="contained"
            color="inherit"
            style={{ textTransform: "none" }}
            onClick={() => navigate(routes.blurPage)}
          >
            {"Blur"}
          </Button>
          <Button
            variant="contained"
            color="inherit"
            style={{ textTransform: "none" }}
            onClick={() => navigate(routes.saturatePage)}
          >
            {"Saturate"}
          </Button>
        </Box>
      </Box>
    </FadeIn>
  ) : (
    <Box display="flex" justifyContent="center" marginTop="300px">
      <CircularProgress />
    </Box>
  );
};
