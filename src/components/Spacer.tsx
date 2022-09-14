import { Box } from "@mui/material";

type Props =
  | {
      width?: number;
      height: number;
    }
  | {
      width: number;
      height?: number;
    };

export const Spacer = ({ width, height }: Props) => (
  <Box mr={width} mt={height} />
);
