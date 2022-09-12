import { useEffect, useRef } from "react";
import { canvasWidth, canvasHeight } from "../../constants";
import { INPUT_IMAGE_URL } from "../../utils";

interface Props {
  regionBox: number[];
  method?: string;
}

export const Canvas = ({ regionBox, method }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const regionWidth = regionBox[2];
  const regionHeight = regionBox[3];

  useEffect(() => {
    const context = canvasRef?.current?.getContext("2d");

    const render = () => {
      const image = new Image();

      setTimeout(() => {
        image.src = INPUT_IMAGE_URL;
      }, 100);

      image.onload = () => {
        const x = regionBox[0] * (canvasWidth / image.width);
        const y = regionBox[1] * (canvasHeight / image.height);

        const sWidth =
          regionWidth * (canvasWidth / image.width) < canvasWidth
            ? regionWidth * (canvasWidth / image.width)
            : canvasWidth;
        const sHeight =
          regionHeight * (canvasHeight / image.height) < canvasHeight
            ? regionHeight * (canvasHeight / image.height)
            : canvasHeight;

        context?.clearRect(0, 0, canvasWidth, canvasHeight);

        context!.filter = "none";
        context?.drawImage(image, 0, 0, canvasWidth, canvasHeight);

        if (method === "blur") {
          context!.globalCompositeOperation = "destination-atop";
          context!.filter = "blur(4px)";

          if (sWidth <= 125 && sHeight <= 125) {
            context?.translate(x, y);
            context?.scale(1.05, 1);
            context?.translate(-x, -y);

            context?.drawImage(
              image,
              x,
              y,
              sWidth + x > canvasWidth ? canvasWidth - x : sWidth,
              sHeight + y > canvasHeight ? canvasHeight - y : sHeight
            );
            context?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
          } else {
            context?.drawImage(
              image,
              x,
              y,
              sWidth + x > canvasWidth ? canvasWidth - x : sWidth,
              sHeight + y > canvasHeight ? canvasHeight - y : sHeight
            );
            context?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
          }

          context?.setTransform(1, 0, 0, 1, 0, 0);
        } else if (method === "saturate") {
          context!.globalCompositeOperation = "destination-atop";
          context!.filter = "saturate(5%)";

          if (sWidth <= 125 && sHeight <= 125) {
            context?.translate(x, y);
            context?.scale(1.05, 1);
            context?.translate(-x, -y);

            context?.drawImage(
              image,
              x,
              y,
              sWidth + x > canvasWidth ? canvasWidth - x : sWidth,
              sHeight + y > canvasHeight ? canvasHeight - y : sHeight
            );
            context?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
          } else {
            context?.drawImage(
              image,
              x,
              y,
              sWidth + x > canvasWidth ? canvasWidth - x : sWidth,
              sHeight + y > canvasHeight ? canvasHeight - y : sHeight
            );
            context?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
          }
          context?.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          context?.beginPath();
          context?.rect(
            x,
            y,
            sWidth + x > canvasWidth ? canvasWidth - x : sWidth,
            sHeight + y > canvasHeight ? canvasHeight - y : sHeight
          );

          context!.lineWidth = 3;
          context!.strokeStyle = "red";
          context?.stroke();
        }
      };
    };
    render();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasRef, regionHeight, regionWidth]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};
