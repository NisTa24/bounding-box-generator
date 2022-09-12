import { useState, useEffect } from "react";
import { CircularProgress, Box, Button } from "@mui/material";
import { FadeIn, Canvas, Spacer } from "../components";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import { inputData } from "src/utils";

export const SaturateFocus = () => {
  const [renderImg, setRenderImg] = useState(false);

  const [nextButton, setNextButton] = useState(false);
  const [previousButton, setPreviousButton] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const initInput = inputData[0];
  const [region, setRegion] = useState(initInput);

  const navigate = useNavigate();
  const inputLength = inputData.length;

  useEffect(() => {
    setTimeout(() => {
      setRenderImg(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (imgIndex === 0) {
      setPreviousButton(true);
    } else {
      setPreviousButton(false);
    }
    if (imgIndex === inputLength - 1) {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgIndex]);

  const handleNext = () => {
    setRegion(inputData[imgIndex + 1]);
    setImgIndex(imgIndex + 1);
  };

  const handlePrevious = () => {
    setRegion(inputData[imgIndex - 1]);
    setImgIndex(imgIndex - 1);
  };

  return renderImg ? (
    <FadeIn duration={500}>
      <Box
        display="flex"
        marginTop="30px"
        marginLeft="300px"
        marginRight="300px"
        flexDirection="column"
        alignItems="center"
      >
        <Canvas regionBox={region.bbox} method="saturate" />
        <Spacer height={1} />
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="row">
            <Button
              variant="contained"
              color="inherit"
              style={{ textTransform: "none" }}
              onClick={handlePrevious}
              disabled={previousButton}
              fullWidth
            >
              {"Previous"}
            </Button>
            <Spacer width={1} />
            <Button
              variant="contained"
              color="inherit"
              style={{ textTransform: "none" }}
              onClick={handleNext}
              disabled={nextButton}
              fullWidth
            >
              {"Next"}
            </Button>
          </Box>
          <Spacer height={1} />
          <Button
            variant="contained"
            color="inherit"
            style={{ textTransform: "none" }}
            fullWidth
            onClick={() => {
              navigate(routes.homePage);
            }}
          >
            {"Go back"}
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
