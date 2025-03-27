import styled from "styled-components";
import { FC, ReactNode } from "react";

interface TimeTypoProps {
  children: ReactNode;
}

const StyledTimeTypo = styled("p")`
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  right: -8px;
  width: 18px;
  text-align: center;
`;

export const TimeTypo: FC<TimeTypoProps> = ({ children }) => {
  return <StyledTimeTypo>{children}</StyledTimeTypo>;
};
