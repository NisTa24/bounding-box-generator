import { Box } from "@mui/material";

type Props = (
  | {
      width?: number;
      height: number;
    }
  | {
      width: number;
      height?: number;
    }
) & {
  flexGrow?: number;
};

export const Spacer = ({ width, height, flexGrow }: Props) => (
  <Box mr={width} mt={height} flexGrow={flexGrow} />
);
