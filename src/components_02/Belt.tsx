import { Box as MUIBox, BoxProps as MUIBoxProps } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const cell = 30;
const h = 50;

export const StyledBelt = styled(MUIBox)<{
  // w: number;
  bg: string;
  start: number;
  end: number;
}>`
  background: ${(props) => props.bg}50;
  height: calc(${h}px - 8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  z-index: 10;
  left: ${(props) => props.start * cell * 2 + 2}px;
  width: ${(props) => props.end - props.start - 4}px;
  position: absolute;
`;

export const StyledSubTypo = styled(Typography)`
  font-size: 7px;
  line-height: 7px;
`;

interface BeltProps extends MUIBoxProps {
  subTypo?: string;
  // w: string | number;
  bg?: string;
  start: number;
  end: number;
}

export const Belt: FC<BeltProps> = ({
  children,
  subTypo,
  bg = "#333333",
  start,
  end,
  ...props
}) => {
  return (
    <StyledBelt bg={bg} start={start} end={end} {...props}>
      <Typography fontSize="14px">{children}</Typography>
      {subTypo && <StyledSubTypo>{subTypo}</StyledSubTypo>}
    </StyledBelt>
  );
};
