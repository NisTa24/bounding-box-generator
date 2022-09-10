import { useRef, useEffect } from "react";
import { INPUT_IMAGE_URL } from "../../utils";

interface Props {
  regionBox: number[];
}

export const CanvasZoom = ({ regionBox }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const x = regionBox[0];
  const y = regionBox[1];
  const regionWidth = regionBox[2];
  const regionHeight = regionBox[3];

  const dx = regionWidth <= 250 && regionHeight <= 250 ? 500 : 150;
  const dy = regionWidth <= 250 && regionHeight <= 250 ? 300 : 100;

  useEffect(() => {
    const context = canvasRef?.current?.getContext("2d");

    const render = () => {
      const image = new Image();
      image.src = INPUT_IMAGE_URL;
      image.onload = () => {
        context?.clearRect(0, 0, 1900 / 2, 1080 / 2);
        context?.drawImage(
          image,
          x,
          y,
          regionWidth,
          regionHeight,
          dx,
          dy,
          regionWidth / 2,
          regionHeight / 2
        );
      };
    };
    render();
  }, [x, y, regionHeight, regionWidth, dx, dy]);

  return <canvas ref={canvasRef} width={1900 / 2} height={1080 / 2} />;
};
