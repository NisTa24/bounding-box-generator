import { useRef, useEffect } from "react";
import { INPUT_IMAGE_URL } from "../../utils";

interface Props {
  regionBox: number[];
  width: number;
  height: number;
}

export const CanvasZoom = ({ width, height, regionBox }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const x = regionBox[0];
  const y = regionBox[1];
  const regionWidth = regionBox[2];
  const regionHeight = regionBox[3];

  const dx = regionWidth <= 250 ? 200 : 0;
  const dy = regionHeight <= 250 ? 200 : 0;

  useEffect(() => {
    const context = canvasRef?.current?.getContext("2d");

    const render = () => {
      const image = new Image();
      image.src = INPUT_IMAGE_URL;
      image.onload = () => {
        context?.clearRect(0, 0, 600, 400);
        context?.drawImage(
          image,
          x,
          y,
          regionWidth,
          regionHeight,
          dx,
          dy,
          regionWidth,
          regionHeight
        );
      };
    };
    render();
  }, [x, y, regionHeight, regionWidth, dx, dy]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
