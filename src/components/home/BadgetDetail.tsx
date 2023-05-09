"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";

// icons
import EastIcon from "@mui/icons-material/East";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "24px",
  borderRadius: "16px",
  marginBottom: "16px",

  [theme.breakpoints.down("md")]: {
    padding: "16px",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: "400px",
  marginRight: "28px",
  marginLeft: "24px",

  [theme.breakpoints.down("md")]: {
    width: "calc(100% - 82px)",
    margin: "0 16px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.3px",
  marginBottom: "2px",

  [theme.breakpoints.down("md")]: {
    letterSpacing: "0.004em",
    fontSize: "12px",
    lineHeight: "16px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",

  [theme.breakpoints.down("md")]: {
    letterSpacing: "0.004em",
    fontSize: "12px",
    lineHeight: "16px",
  },
}));

const ButtonNext = styled(IconButton)(({ type }) => ({
  marginLeft: "auto",
  padding: 0,
  svg: {
    fontSize: "16px",
  },
}));

type MainProp = {
  type: string; // type = primary / danger / default
  icon: any;
  text: string;
  time: string;
  onView: () => void;
};

const BadgetDetail = ({ type, icon, text, time, onView }: MainProp) => {
  return (
    <Wrapper
      sx={{
        border: `1px solid ${type === "primary" ? "#00210B" : "#ccc"}`,
        background:
          type === "primary"
            ? "#00210B"
            : type === "danger"
            ? "#FFEAE3"
            : "#fff",
        color: type === "primary" ? "#fff" : "#1B1B1B",
      }}
    >
      {icon}
      <Content>
        <Title>{text || ""}</Title>
        <Text>{time || ""}</Text>
      </Content>
      <ButtonNext onClick={onView}>
        <EastIcon sx={{ color: type === "primary" ? "#fff" : "#1B1B1B" }} />
      </ButtonNext>
    </Wrapper>
  );
};

export default BadgetDetail;
