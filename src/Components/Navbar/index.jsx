import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grow,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Img } from "react-image";
import { navData } from "./components/navData.mjs";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdownServices, setOpenDropdownServices] = useState(false);
  const [openDropdownServices2, setOpenDropdownServices2] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const partnerImages = [
    {
      link: "https://www.miele.com/en/com/index.htm",
      src: "/images/partners/Vector.png",
    },
    {
      link: "https://www.haecker-kuechen.com/en/",
      src: "/images/partners/Vector-1.png",
    },
    {
      link: "https://www.blanco.com/int-en/",
      src: "/images/partners/Vector-2.png",
    },
    {
      link: "https://www.falmec.com/en-ww/",
      src: "/images/partners/Vector-3.png",
    },
    {
      link: "https://www.kitchenaid.com/",
      src: "/images/partners/Vector-4.png",
    },
    { link: "https://kuvings.com/", src: "/images/partners/Vector-5.png" },
    { link: "https://nivona.com/", src: "/images/partners/Vector-6.png" },
    { link: "https://www.dyson.com/en", src: "/images/partners/Vector-7.png" },
    {
      link: "https://www.loewe.com/usa/en/home",
      src: "/images/partners/Vector-8.png",
    },
    {
      link: "https://www.galameble.com/",
      src: "/images/partners/Vector-9.png",
    },
    {
      link: "https://www.voglauer.com/de/",
      src: "/images/partners/Vector-10.png",
    },
    { link: "https://www.gwinner.de/", src: "/images/partners/Vector-11.png" },
    {
      link: "https://www.arancucine.it/",
      src: "/images/partners/Vector-12.png",
    },
    {
      link: "https://www.colombinicasa.com/",
      src: "/images/partners/Vector-13.png",
    },
    {
      link: "https://www.bauformat.de/",
      src: "/images/partners/Vector-14.png",
    },
    { link: "https://giusti.com/", src: "/images/partners/image 32.png" },
  ];
  const services = [
    {
      id: 1,
      img_src: "/images/services/services (1).png",
      title: t("byuro"),
    },
    {
      id: 2,
      img_src: "/images/services/services (2).png",
      title: t("design"),
    },
    {
      id: 3,
      img_src: "/images/services/services (3).png",
      title: t("projectAgree"),
    },
    {
      id: 4,
      img_src: "/images/services/services (4).png",
      title: t("sizePlace"),
    },
    {
      id: 5,
      img_src: "/images/services/services (5).png",
      title: t("materials"),
    },
    {
      id: 6,
      img_src: "/images/services/services (6).png",
      title: t("designPersonal"),
    },
  ];
  const handleDropdown = () => {
    setOpenDropdownServices(!openDropdownServices);
    setOpenDropdown(false);
  };
  const handleDropdownPartners = () => {
    setOpenDropdown(!openDropdown);
    setOpenDropdownServices(false);
  };
  return (
    <Box
      position="sticky"
      zIndex={1000}
      backgroundColor="#fff"
      top={0}
      sx={{
        ...(scrolled
          ? { boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.25)" }
          : { boxShadow: "0" }),
      }}
      p={{ lg: "5px 80px", md: "10px 60px", sm: "10px 30px", xs: "5px 10px" }}
    >
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        sx={{ gap: "20px" }}
      >
        <Link to="/">
          <Stack
            sx={{
              width: { lg: 65, md: 60, sm: 50, xs: 45 },
              height: { lg: 65, md: 60, sm: 50, xs: 45 },
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/images/main/Logo.png"
              alt=""
            />
          </Stack>
        </Link>
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          sx={{ gap: "20px" }}
        >
          <Stack width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}>
            <TextField
              id="input-with-icon-textfield"
              placeholder={t("search")}
              fullWidth
              sx={{
                "&:placeholder": {
                  color: "#858585",
                },
              }}
              InputProps={{
                startAdornment: (
                  <Img
                    style={{ width: 23, height: 23 }}
                    src="/images/main/Shape.png"
                    alt=""
                  />
                ),
                sx: {
                  backgroundColor: "#fff",
                  height: { lg: "48px", md: "48px", sm: "38px", xs: "38px" },
                  width: "auto",
                  fontWeight: "600",

                  p: "0 13px",
                  borderRadius: {
                    lg: "10px",
                    md: "10px",
                    sm: "100px",
                    xs: "100px",
                  },
                },
              }}
              variant="outlined"
            />
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{ ...(isMobile ? { display: "flex" } : { display: "none" }) }}
          >
            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                width: 24,
                height: 24,
                p: 0,
              }}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>

            <Language />
          </Stack>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            sx={{
              "& .MuiDrawer-paper": {
                width: "40%",
                borderTopLeftRadius: "7%",
                borderBottomLeftRadius: "7%",
              },
            }}
          >
            <Box
              className="mobile-menu"
              sx={{
                bg: "#000",
                height: "100%",
                mt: "140px",
                padding: "16px 0",
              }}
            >
              <Stack
                spacing={2}
                direction="column"
                height="35px"
                alignItems="center"
              >
                <Button
                  sx={{ color: "currentColor" }}
                  onClick={toggleMobileMenu}
                >
                  <svg
                    fillRule="evenodd"
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="close"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                  </svg>
                </Button>
                <Stack
                  direction="column"
                  alignItems="center"
                  width={150}
                  justifyContent="center"
                  spacing={2}
                >
                  <NavLink className="nav-links" to="/">
                    {t("home")}
                  </NavLink>
                  <Button
                    sx={{
                      color: "#3A3A3A",
                      fontSize: 18,
                      fontFamily: "Montserrat",
                      textTransform: "capitalize",
                      ...(openDropdown
                        ? {
                            borderBottom: "1px solid #8B181B",
                            color: "#8B181B",
                            fontWeight: 600,
                          }
                        : ""),
                      p: 0,
                      borderRadius: 0,
                    }}
                    onClick={() => setOpenDropdown2(!openDropdown2)}
                  >
                    Partners
                    <KeyboardArrowDownIcon
                      sx={{
                        ...(openDropdown
                          ? { transform: "rotate(180deg)" }
                          : ""),
                      }}
                    />
                  </Button>

                  <NavLink
                    className="nav-links"
                    style={{
                      width: "auto",
                      minWidth: "100px",
                    }}
                    to="about"
                  >
                    About us
                  </NavLink>
                  <Button
                    sx={{
                      color: "#3A3A3A",
                      fontSize: 18,
                      fontFamily: "Montserrat",
                      textTransform: "capitalize",
                      ...(openDropdownServices2
                        ? {
                            borderBottom: "1px solid #8B181B",
                            color: "#8B181B",
                            fontWeight: 600,
                          }
                        : ""),
                      p: 0,
                      borderRadius: 0,
                    }}
                    onClick={() =>
                      setOpenDropdownServices2(!openDropdownServices2)
                    }
                  >
                    Services
                    <KeyboardArrowDownIcon
                      sx={{
                        ...(openDropdownServices2
                          ? { transform: "rotate(180deg)" }
                          : ""),
                      }}
                    />
                  </Button>

                  <Button
                    sx={{
                      height: 34,
                      mb: "10px",
                      color: "#3A3A3A",
                      fontSize: 18,
                      fontFamily: "Montserrat",
                      textTransform: "capitalize",
                      p: "6px",
                      borderRadius: 0,
                    }}
                    onClick={scrollToBottom}
                  >
                    {t("contacts")}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Drawer>
          <Stack
            sx={{
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              minWidth: "650px",
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <NavLink className="nav-links" to="/">
              {t("home")}
            </NavLink>

            <Button
              sx={{
                mb: "10px",
                height: 40,
                color: "#3A3A3A",
                fontSize: 18,
                fontFamily: "Montserrat",
                textTransform: "capitalize",
                ...(openDropdown
                  ? {
                      borderBottom: "1px solid #8B181B",
                      color: "#8B181B",
                      fontWeight: 600,
                    }
                  : ""),

                p: 0,
                borderRadius: 0,
              }}
              onClick={handleDropdownPartners}
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              {t("partners")}
              <Backdrop
                sx={{
                  backgroundColor: "transparent",
                  color: "#000",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                  width: "100%",
                  height: "100%",
                  alignItems: "start",
                  top: { lg: "10%", md: "12%", sm: "70px", xs: "58px" },
                }}
                className="partners"
                open={openDropdown}
                onClick={() => setOpenDropdown(false)}
              >
                <Stack
                  width="100%"
                  backgroundColor="#fff"
                  direction="row"
                  flexWrap="wrap"
                  boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
                  height={{ lg: 260, md: 260, sm: 260, xs: 400 }}
                  justifyContent={{
                    lg: "start",
                    md: "start",
                    sm: "start",
                    xs: "center",
                  }}
                  sx={{ gap: "0 72px" }}
                  alignItems="center"
                  p={{
                    lg: "5px 80px",
                    md: "10px 60px",
                    sm: "10px 30px",
                    xs: "5px 10px",
                  }}
                >
                  {partnerImages.map((item, index) => (
                    <Link key={index} target="_blank" to={item.link}>
                      <Stack mr={4} width="100px" maxHeight={50}>
                        <img src={item.src} alt="" />
                      </Stack>
                    </Link>
                  ))}
                </Stack>
              </Backdrop>
            </Button>

            <NavLink
              className="nav-links"
              style={{
                width: "auto",
                minWidth: "50px",
              }}
              to="/about"
            >
              {t("about")}
            </NavLink>
            <Button
              sx={{
                height: 40,
                mb: "10px",
                color: "#3A3A3A",
                fontSize: 18,
                fontFamily: "Montserrat",
                textTransform: "capitalize",
                ...(openDropdownServices
                  ? {
                      borderBottom: "1px solid #8B181B",
                      color: "#8B181B",
                      fontWeight: 600,
                    }
                  : ""),
                p: "6px",
                borderRadius: 0,
              }}
              onClick={handleDropdown}
              onMouseEnter={() => setOpenDropdownServices(true)}
              onMouseLeave={() => setOpenDropdownServices(false)}
            >
              {t("services")}

              <Backdrop
                sx={{
                  backgroundColor: "transparent",
                  color: "#000",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                  width: "100%",
                  height: "100%",
                  alignItems: "start",
                  top: { lg: "10%", md: "12%", sm: "70px", xs: "58px" },
                }}
                open={openDropdownServices}
                onClick={() => setOpenDropdownServices(false)}
              >
                <Stack
                  width="100%"
                  backgroundColor="#fff"
                  direction="row"
                  flexWrap="wrap"
                  boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
                  height={{ lg: 300, md: 300, sm: 500, xs: 300 }}
                  justifyContent={{
                    lg: "space-between",
                    md: "start",
                    sm: "space-between",
                    xs: "space-between",
                  }}
                  alignItems="center"
                  p={{
                    lg: "5px 80px",
                    md: "10px 60px",
                    sm: "10px 30px",
                    xs: "5px 10px",
                  }}
                >
                  {services.map((item) => (
                    <Stack
                      flexWrap="wrap"
                      direction="row"
                      alignItems="center"
                      key={item.id}
                      width={{ lg: 420, md: 375, sm: 370, xs: 350 }}
                      maxHeight={120}
                      spacing={2}
                    >
                      <Stack
                        maxWidth={{ lg: 120, md: 90, sm: 70, xs: 40 }}
                        maxHeight={120}
                      >
                        <img
                          style={{
                            borderRadius: "7px",
                          }}
                          src={item.img_src}
                          alt=""
                        />
                      </Stack>
                      <Typography
                        fontFamily="Playfair display"
                        color="#3a3a3a"
                        fontSize={16}
                        fontWeight={800}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Backdrop>
            </Button>

            <Button
              sx={{
                height: 34,
                mb: "10px",
                color: "#3A3A3A",
                fontSize: 18,
                fontFamily: "Montserrat",
                textTransform: "capitalize",
                p: "6px",
                borderRadius: 0,
              }}
              onClick={scrollToBottom}
            >
              {t("contacts")}
            </Button>
            <Language />
          </Stack>
          <Backdrop
            sx={{
              backgroundColor: "transparent",
              color: "#000",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              width: "100%",
              height: "100%",
              alignItems: "start",
              top: { lg: "10%", md: "12%", sm: "70px", xs: "58px" },
            }}
            className="partners"
            open={openDropdown2}
            onClick={() => setOpenDropdown2(false)}
          >
            <Stack
              width="100%"
              backgroundColor="#fff"
              direction="row"
              flexWrap="wrap"
              boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
              height={{ lg: 260, md: 260, sm: 260, xs: 400 }}
              justifyContent={{
                lg: "space-between",
                md: "space-between",
                sm: "space-between",
                xs: "center",
              }}
              alignItems="center"
              p={{
                lg: "5px 80px",
                md: "10px 60px",
                sm: "10px 30px",
                xs: "5px 10px",
              }}
            >
              {partnerImages.map((item, index) => (
                <Link key={index} target="_blank" to={item.link}>
                  <Stack mr={4} maxWidth="145px" maxHeight={40}>
                    <img src={item.src} alt="" />
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Backdrop>
          <Backdrop
            sx={{
              backgroundColor: "transparent",
              color: "#000",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              width: "100%",
              height: "100%",
              alignItems: "start",
              top: { lg: "10%", md: "12%", sm: "70px", xs: "58px" },
            }}
            open={openDropdownServices2}
            onClick={() => setOpenDropdownServices2(false)}
          >
            <Stack
              width="100%"
              backgroundColor="#fff"
              direction="row"
              flexWrap="wrap"
              boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
              height={{ lg: 300, md: 300, sm: 500, xs: 300 }}
              justifyContent={{
                lg: "space-between",
                md: "start",
                sm: "space-between",
                xs: "space-between",
              }}
              alignItems="center"
              p={{
                lg: "5px 80px",
                md: "10px 60px",
                sm: "10px 30px",
                xs: "5px 10px",
              }}
            >
              {services.map((item) => (
                <Stack
                  flexWrap="wrap"
                  direction="row"
                  alignItems="center"
                  key={item.id}
                  width={{ lg: 420, md: 375, sm: 370, xs: 350 }}
                  maxHeight={120}
                  spacing={2}
                >
                  <Stack
                    maxWidth={{ lg: 120, md: 90, sm: 70, xs: 40 }}
                    maxHeight={120}
                  >
                    <img
                      style={{
                        borderRadius: "7px",
                      }}
                      src={item.img_src}
                      alt=""
                    />
                  </Stack>
                  <Typography
                    fontFamily="Playfair display"
                    color="#3a3a3a"
                    fontSize={16}
                    fontWeight={800}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Backdrop>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
