"use client";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Avatar, Typography } from "@mui/material";

import { BadgetDetail, Carousel } from "@/components/home";

import { actionData, careDate } from "@/data";

const Wrapper = styled(Box)(() => ({
  width: "100%",
  background: "#FFFAF2",
  padding: "0 24px",
  boxSizing: "border-box",
}));

const Content = styled(Box)(({ theme }) => ({
  width: "568px",
  padding: "114px 0px",
  boxSizing: "border-box",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingTop: "66px",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: "48px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "24px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "40px",
  color: "#1B1B1B",
  letterSpacing: "0.0025em",
  marginBottom: "48px",

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "24px",
    marginBottom: "24px",
  },
}));

const SubTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "26px",
  color: "#1B1B1B",
  marginBottom: "16px",
}));

const ViewIcon = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  background: "#E38869",
  borderRadius: "50%",
  overflow: "hidden",
  boxSizing: "border-box",
  padding: "8px",

  img: {
    // width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    width: "40px",
    height: "40px",
  },
}));


export default function Home() {
  const handleView = () => {};

  const UserAvatar = () => {
    return (
      <Avatar
        alt="user"
        src="/images/user.png"
        sx={{ width: "48px", height: "48px" }}
      />
    );
  };

  const ActionIcon = ({ image }: { image: any }) => {
    return (
      <ViewIcon>
        <Image alt="" src={image} />
      </ViewIcon>
    );
  };

  const CareIcon = ({ image }: { image: any }) => {
    return (
      <ViewIcon sx={{ background: "#8ACDA0", padding: "10px" }}>
        <Image alt="" src={image} />
      </ViewIcon>
    );
  };

  return (
    <Wrapper>
      <Content>
        <Title>Hi, [Kyle]! </Title>

        <Section sx={{ mb: "48px" }}>
          <BadgetDetail
            type="primary"
            icon={<UserAvatar />}
            text="Join [Video] Visit with Dr. Mark Greene"
            time="Today at 4:00 PM ET"
            onView={handleView}
          />
          <BadgetDetail
            type="primary"
            icon={<UserAvatar />}
            text="Join [Video] Visit with Dr. Mark Greene"
            time="Today at 4:00 PM ET"
            onView={handleView}
          />
        </Section>

        <Section>
          <SubTitle>Action items</SubTitle>

          {actionData && actionData.map((item: any, i: number) => (
            <BadgetDetail
              key={i}
              type={item.type}
              icon={<ActionIcon image={item.icon} />}
              text={item.title}
              time={item.text}
              onView={handleView}
            />
          ))}
        </Section>

        <Section>
          <SubTitle>Get the care you need</SubTitle>

          {careDate && careDate.map((item: any, i: number) => (
            <BadgetDetail
              key={i}
              type={item.type}
              icon={<CareIcon image={item.icon} />}
              text={item.title}
              time={item.text}
              onView={handleView}
            />
          ))}
        </Section>

        <Section>
          <SubTitle>Explore our offerings</SubTitle>

          <Carousel />
        </Section>
      </Content>
    </Wrapper>
  );
}
