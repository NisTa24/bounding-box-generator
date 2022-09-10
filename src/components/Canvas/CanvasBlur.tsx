import { useRef, useEffect } from "react";
import { INPUT_IMAGE_URL } from "../../utils";

interface Props {
  regionBox: number[];
}

export const CanvasBlur = ({ regionBox }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const x = regionBox[0];
  const y = regionBox[1];
  const regionWidth = regionBox[2];
  const regionHeight = regionBox[3];

  useEffect(() => {
    const context = canvasRef?.current?.getContext("2d");

    const render = () => {
      const image = new Image();
      image.src = INPUT_IMAGE_URL;

      image.onload = () => {
        context?.clearRect(0, 0, 1980 / 2, 1080 / 2);
        context!.filter = "none";
        context?.drawImage(image, 0, 0, 1900 / 2, 1080 / 2);

        context!.globalCompositeOperation = "destination-atop";
        context?.drawImage(
          image,
          x / 2,
          y / 2,
          regionWidth / 2,
          regionHeight / 2
        );
        context!.filter = "blur(4px)";
        context?.drawImage(image, 0, 0, 1900 / 2, 1080 / 2);
      };
    };
    render();
  }, [canvasRef, x, y, regionHeight, regionWidth]);

  return <canvas ref={canvasRef} width={1900 / 2} height={1080 / 2} />;
};
