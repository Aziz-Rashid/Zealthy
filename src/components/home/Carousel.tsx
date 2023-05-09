"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";

// icons
import EastIcon from "@mui/icons-material/East";

// images
import Img1 from "@/assets/images/slide1.png";
import Img2 from "@/assets/images/slide8.png";
import Img3 from "@/assets/images/slide2.png";
import Img5 from "@/assets/images/slide6.png";
import Img6 from "@/assets/images/slide5.png";
import Img7 from "@/assets/images/slide3.png";
import Img8 from "@/assets/images/slide7.png";

const data = [
  {
    background: Img1,
    text: "Try Zealthy’s weight loss program. We predict you’ll lose at least [30] lbs to achieve a weight of [170] lbs. ",
  },
  {
    background: Img2,
    text: "Achieve better long-term outcomes through our mental health program (with coaching + medication options). ",
  },
  {
    background: Img3,
    text: "Our Zealthy primary care providers offer exceptional,  individualized care for general health concerns.",
  },
  {
    background: Img1,
    text: "Try Zealthy’s weight loss program. We predict you’ll lose at least [30] lbs to achieve a weight of [170] lbs. ",
  },
  {
    background: Img5,
    text: "Achieve better long-term outcomes through our mental health program (with coaching + medication options). ",
  },
  {
    background: Img6,
    text: "Find an effective hair loss treatment plan through Zealthy and regrow your hair in as little as 3 to 6 months.",
  },
  {
    background: Img7,
    text: "Improve your sexual health through FDA-approved erectile dysfunction medication. ",
  },
  {
    background: Img8,
    text: "Our Zealthy primary care providers offer exceptional,  individualized care for general health concerns.",
  },
];

const Wrapper = styled(Box)(() => ({
  width: "100%",

  ".slick-dots": {
    textAlign: "left",

    li: {
      width: "16px",
      height: "16px",
      padding: 0,
      margin: "0 10px 0 0",

      button: {
        width: "16px",
        height: "16px",
        padding: 0,
        margin: 0,

        "&:before": {
          content: "''",
          width: "16px",
          height: "16px",
          background: "#CCCCCC",
          borderRadius: "50%",
        },
      },
    },

    "li.slick-active": {
      button: {
        "&:before": {
          background: "#00872B",
        },
      },
    },
  },
}));

const Slide = styled(Box)(() => ({
  width: "100%",
  position: "relative",
}));

const ViewImage = styled(Box)(({ theme }) => ({
  width: "100%",

  img: {
    width: "100%",
    height: "400px",
  },

  [theme.breakpoints.down("md")]: {
    img: {
      width: "100%",
      height: "220px",
    },
  },
}));

const ViewDetail = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  left: 0,
  right: 0,
  zIndex: 2,
  padding: "33px 24px",
  boxSizing: "border-box",
  background: "rgba(0, 33, 11, 0.8)",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    padding: "7px 24px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.3px",
  color: "#fff",
  width: "calc(100% - 44px)",

  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
}));

const ButtonNext = styled(IconButton)(() => ({
  padding: 0,
  marginLeft: "28px",

  svg: {
    fontSize: "16px",
    color: "#fff",
  },
}));

type SlideProp = {
  text: string;
  background: any;
};

const Carousel = () => {
  const slideRef = useRef<any>(null);

  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",right:'20px' }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",zIndex:7878,left:'20px' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const handleNext = () => {
    slideRef.current.slickNext();
  };

  const SlideItem = ({ text, background }: SlideProp) => {
    return (
      <Slide>
        <ViewImage>
          <Image alt="" src={background} />
        </ViewImage>

        <ViewDetail>
          <Title>{text}</Title>
          <ButtonNext onClick={handleNext}>
            <EastIcon />
          </ButtonNext>
        </ViewDetail>
      </Slide>
    );
  };

  return (
    <Wrapper>
      <Slider {...settings} ref={slideRef}>
        {data.map((item: SlideProp, i: number) => (
          <SlideItem key={i} text={item.text} background={item.background} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
