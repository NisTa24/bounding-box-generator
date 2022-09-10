import { useRef, useEffect } from "react";
import { INPUT_IMAGE_URL } from "../../utils";

interface Props {
  width: string;
  height: string;
}

export const CanvasHome = ({ width, height }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef?.current?.getContext("2d");

    const render = () => {
      const image = new Image();
      image.src = INPUT_IMAGE_URL;
      image.onload = () => {
        context?.drawImage(image, 0, 0, 700, 400);
      };
    };
    render();
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
