import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/wisebox-logo.png";
import wisebox from "../images/Wisebox.png";
import Link from "@mui/material/Link";
import Image from "next/image";
import { useRouter } from "next/router";

const pages = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/hello",
    name: "Documents",
  },
  {
    to: "/",
    name: "Manage",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AppHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenuClick = (to) => {
    setAnchorElNav(null);
    router.push(to);
  };
  return (
    <AppBar
      sx={{ backgroundColor: "#ffff", color: "#353945", height: "80px" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ marginTop: "4px" }}>
          <Link
            sx={{
              maxWidth: "30.85px",

              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
            to="/"
          >
            <Image src={logo} alt="logo" style={{ width: "100%" }} />
          </Link>
          <Link
            sx={{
              maxWidth: "100.85px",

              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
            to="/"
          >
            <Image src={wisebox} alt="logo" style={{ width: "100%" }} />
          </Link>
          <Box sx={{ borderRight: "1px solid black", width: "50px" }}> </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.to}
                  onClick={() => handleMenuClick(page.to)}
                  sx={{ minWidth: "10rem" }}
                >
                  <Typography variant="body1" fontWeight="bold" fontSize="14px">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            sx={{
              maxWidth: "50.85px",
              mt: 1,
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
            to="/"
          >
            <Image src={logo} alt="logo" style={{ width: "100%" }} />
          </Link>
          <Box
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          ></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem
                key={page.to}
                onClick={() => handleMenuClick(page.to)}
                sx={{ minWidth: "10rem" }}
              >
                <Typography
                  textAlign="center"
                  variant="caption"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Wisebox">
                  <Image src={logo}></Image>{" "}
                </Avatar>
              </IconButton>
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
      </Container>
    </AppBar>
  );
};
export default AppHeader;
