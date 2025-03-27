"use client";

import { Belt } from "@/components/Belt";
import { Block } from "@/components/Block";
import { TimeTypo } from "@/components/TimeTypo";
import { Box } from "@mui/material";
import React from "react";

const cell = 30;
const StartTime = 6;
const EndTime = 16;
const h = 50;
const timeArray = Array.from(
  { length: EndTime - StartTime + 1 },
  (_, i) => StartTime + i
);
const belts = [
  {
    w: cell * 2 - 5,
    minWidth: cell * 2 - 5,
    label: "PC",
    subLabel: "PCSub",
    bg: "#f32a2a",
  },
  {
    w: cell * 3 - 5,
    minWidth: cell * 3 - 5,
    label: "PC",
    subLabel: "PCSub",
    bg: "#4946ff",
  },
  {
    w: cell - 5,
    minWidth: cell - 5,
    label: "PC",
    subLabel: "PCSub",
    bg: "#ff46da",
  },
  {
    w: cell * 2 - 5,
    minWidth: cell * 2 - 5,
    label: "PC",
    subLabel: "PCSub",
    bg: "#00c3ff",
  },
  {
    w: cell * 4 - 5,
    minWidth: cell * 4 - 5,
    label: "試験勉強",
    subLabel: "PCSub",
    bg: "#f32a2a",
  },
];

const getThisMonthDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const lastDay = new Date(year, month + 1, 0).getDate();

  return Array.from(
    { length: lastDay },
    (_, i) => new Date(year, month, i + 1)
  ).map(
    (d) =>
      new Intl.DateTimeFormat("ja-JP", {
        day: "2-digit", // ゼロ埋めして2桁表示
      })
        .format(d)
        .replace("日", "") // "日"を削除
  );
};
const Month = new Date().getMonth() + 1;

const onDateMinus = () => {
  Month - 1;
};
const onDatePlus = () => {
  Month - 1;
};

const renderTimeBar = () => {
  const dates = getThisMonthDate();
  return timeArray.map((time, index) => (
    <Box
      key={index}
      sx={{ display: "flex", height: "14px", bgcolor: "#555", color: "#fff" }}
    >
      <Block width={cell * 2}>
        <TimeTypo>{time}</TimeTypo>
      </Block>
      <Block />
      <Block width={cell * 2} />
    </Box>
  ));
};
const renderBlocks = () => {
  return timeArray.map((_, index) => (
    <React.Fragment key={index}>
      <Block width={cell * 2} borderR={true} bgcolor="#fafafa" />
      <Block width={cell * 2} bgcolor="#fafafa" />
    </React.Fragment>
  ));
};

const renderBeltRows = () => {
  return belts.map((belt, index) => (
    <Belt
      key={index}
      subTypo={belt.subLabel}
      w={belt.w}
      minWidth={belt.minWidth}
      bg={belt.bg}
    >
      {belt.label}
    </Belt>
  ));
};
const Test = () => {
  const dates = getThisMonthDate();

  return (
    <Box pl="30px">
      <Box>
        <Box width="fit-content" display="flex" zIndex="10">
          {renderTimeBar()}
        </Box>

        <Box>
          {dates.map((d, index) => (
            <>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    position: "absolute",
                    height: `${h}px`,
                  }}
                >
                  {renderBlocks()}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    height: `${h}px`,
                    p: "4px 2px",
                    columnGap: "5px",
                  }}
                >
                  {renderBeltRows()}
                </Box>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Test;
