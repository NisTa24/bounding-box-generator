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

  const dx = regionWidth <= 250 && regionHeight <= 250 ? 500 : 0;
  const dy = regionWidth <= 250 && regionHeight <= 250 ? 300 : 0;

  const dWidth = regionWidth > 1000 ? regionWidth / 2 : regionWidth;
  const dHeight = regionHeight > 500 ? regionHeight / 2 : regionHeight;

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
          dWidth,
          dHeight
        );
      };
    };
    render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, y, regionHeight, regionWidth]);

  return <canvas ref={canvasRef} width={1900 / 2} height={1080 / 2} />;
};
