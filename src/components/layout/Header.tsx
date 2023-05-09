"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import WestIcon from "@mui/icons-material/West";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import BackImg from "@/assets/images/back-left.png";
import ArrowLeftImg from "@/assets/images/arrow-left.svg";
import MenusImg from "@/assets/images/menus.svg";
import UserImg from "@/assets/images/care5.png";

const Wrapper = styled(AppBar)(({ theme }) => ({
  background: "#fff",
  borderBottom: "1px solid #ccc",
  boxShadow: "none",

  [theme.breakpoints.down("md")]: {
    background: "#FFFAF2",
    border: "none",

    ".MuiToolbar-root": {
      minHeight: "48px",
    },
  },
}));

const Content = styled(Box)(({ theme }) => ({
  padding: "20px 56px",

  [theme.breakpoints.down("xl")]: {
    padding: "14px 25px",
  },

  [theme.breakpoints.down("lg")]: {
    padding: "8px 25px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 25px",
  },
}));

const LeftBar = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
}));

const MobileMenus = styled(IconButton)(({ theme }) => ({
  padding: 0,
  marginLeft: "auto",
  display: "none",
  color: "#1B1B1B",

  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
  },
}));

const BackIcon = styled(IconButton)(({ theme }) => ({
  color: "#1B1B1B",
  marginRight: "60px",
  padding: 0,

  svg: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("lg")]: {
    marginRight: "20px",
  },

  [theme.breakpoints.down("md")]: {
    marginRight: "auto",
  },
}));

const MenuCustom = styled(MenuItem)(({ theme }) => ({
  marginLeft: "auto",
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const UserAvatar = styled(IconButton)(() => ({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  overflow: "hidden",
  background: "#8ACDA0",

  "&:hover": {
    background: "#8ACDA0",
  }
}));

const MainMenus = styled(Box)(({ theme }) => ({
  justifyContent: "end",
  marginRight: "56px",

  [theme.breakpoints.down("lg")]: {
    marginRight: "30px",
  },
}));

const ButtonMenuItem = styled(Button)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#1B1B1B !important",
  textTransform: "capitalize",
  marginLeft: "35px",

  "&:hover": {
    background: "none",
    color: "#333",
  },

  [theme.breakpoints.down("lg")]: {
    marginLeft: "20px",
  },
}));

const pages = ["Home", "Treat me now", "Schedule visit", "Messages"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<any>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<any>(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Wrapper position="static">
      <Content>
        <Toolbar disableGutters>
          <LeftBar>
            <BackIcon sx={{ display: { xs: "none", md: "inline-flex" } }}>
              {/* <WestIcon sx={{ display: { xs: "none", md: "inline-block" } }} /> */}
              <Image alt="back icon" src={BackImg} />
            </BackIcon>
            <BackIcon sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <Image alt="back icon" src={ArrowLeftImg} />
            </BackIcon>
            <Link href="/" style={{ display: "inline-flex" }}>
              <Image alt="" src="/images/logo.svg" width={117} height={24} />
            </Link>
            <MobileMenus>
              <Image alt="menus" src={MenusImg} width={16} height={15} />
            </MobileMenus>
          </LeftBar>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>

          <MainMenus sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <ButtonMenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </ButtonMenuItem>
            ))}
          </MainMenus>

          <Box
            sx={{ flexGrow: 0, display: { xs: "none", md: "inline-block" } }}
          >
            <Tooltip title="Open settings">
              <UserAvatar onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar
                  sx={{ width: "44px", height: "44px", background: "#8ACDA0" }}
                  alt="Remy Sharp"
                  src={UserImg}
                /> */}
                <Image alt="" src={UserImg} />
              </UserAvatar>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Content>
    </Wrapper>
  );
};

export default Header;
