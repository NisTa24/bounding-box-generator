import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { BoxProps } from "@mui/system";
import { Box } from "@mui/material";

interface FadeInProps extends BoxProps {
  duration: number;
  delay?: number;
}

const fadeInKeyframes = keyframes`
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  `;

export const FadeIn = styled(({ duration, delay, ...props }: FadeInProps) => (
  <Box {...props} />
))(
  ({ duration, delay }) => css`
    animation-name: ${fadeInKeyframes};
    animation-duration: ${duration}ms;
    animation-delay: ${delay}ms;
    animation-fill-mode: both;
  `
);
