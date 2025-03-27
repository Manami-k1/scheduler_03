import { Box as MUIBox, BoxProps as MUIBoxProps } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledBelt = styled(MUIBox)<{ w: string | number; bg: string }>`
  background: ${(props) => props.bg}50;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  z-index: 10;
  width: ${(props) => props.w};
`;

export const StyledSubTypo = styled(Typography)`
  font-size: 7px;
  line-height: 7px;
`;

interface BeltProps extends MUIBoxProps {
  subTypo?: string;
  w: string | number;
  bg?: string;
}

export const Belt: FC<BeltProps> = ({
  children,
  subTypo,
  w,
  bg = "#333333",
  ...props
}) => {
  return (
    <StyledBelt w={w} bg={bg} {...props}>
      <Typography fontSize="14px">{children}</Typography>
      {subTypo && <StyledSubTypo>{subTypo}</StyledSubTypo>}
    </StyledBelt>
  );
};
