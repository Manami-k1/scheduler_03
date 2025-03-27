import { Box as MUIBox, BoxProps as MUIBoxProps } from "@mui/material";
import { FC } from "react";

interface BoxProps extends MUIBoxProps {
  borderR?: boolean;
}

export const Block: FC<BoxProps> = ({ borderR, ...props }) => {
  return (
    <MUIBox
      {...props}
      sx={{
        height: "100%",
        position: "relative",
        borderRight: borderR ? "1px solid #cccccc" : "none",
        ...props.sx,
      }}
    />
  );
};
