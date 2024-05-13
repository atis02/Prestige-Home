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
import { Transition } from "react-transition-group";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownServices, setOpenDropdownServices] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const { t } = useTranslation();
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
      title: "Конструкторское бюро",
    },
    {
      id: 2,
      img_src: "/images/services/services (2).png",
      title: "Полноценный дизайн - проект",
    },
    {
      id: 3,
      img_src: "/images/services/services (3).png",
      title: "Согласование проекта",
    },
    {
      id: 4,
      img_src: "/images/services/services (4).png",
      title: "Размер вашего помещения",
    },
    {
      id: 5,
      img_src: "/images/services/services (5).png",
      title: "Подбор необходимых материалов",
    },
    {
      id: 6,
      img_src: "/images/services/services (6).png",
      title: "Дизайн персонального проекта",
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
              placeholder="Search"
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
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "48px",
                  width: "auto",
                  fontWeight: "600",
                  p: "0 13px",
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

            {/* <Language /> */}
          </Stack>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            sx={{
              "& .MuiDrawer-paper": {
                width: "100%",
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
                s
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
                    Home
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
                    onClick={handleDropdownPartners}
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
                  {openDropdown && (
                    <Stack
                      position="absolute"
                      top="100%"
                      width="100%"
                      left={-16}
                      backgroundColor="#fff"
                      direction="row"
                      flexWrap="wrap"
                      sx={{ gap: 2 }}
                      boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
                      height={230}
                      justifyContent="start"
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
                  )}

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
                      ...(openDropdownServices
                        ? {
                            borderBottom: "1px solid #8B181B",
                            color: "#8B181B",
                            fontWeight: 600,
                          }
                        : ""),
                      p: 0,
                      borderRadius: 0,
                    }}
                    onClick={handleDropdown}
                  >
                    Services
                    <KeyboardArrowDownIcon
                      sx={{
                        ...(openDropdownServices
                          ? { transform: "rotate(180deg)" }
                          : ""),
                      }}
                    />
                  </Button>
                  {openDropdownServices && (
                    <Stack
                      position="absolute"
                      top="100%"
                      width="100%"
                      left={-16}
                      boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
                      backgroundColor="#fff"
                      direction="row"
                      flexWrap="wrap"
                      sx={{ gap: 2 }}
                      height={330}
                      justifyContent="space-around"
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
                          width={400}
                          maxHeight={120}
                          spacing={2}
                        >
                          <img
                            style={{
                              borderRadius: "7px",
                            }}
                            src={item.img_src}
                            alt=""
                          />
                          <Typography>{item.title}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  )}
                  <NavLink className="nav-links" to="contacts">
                    Contacts
                  </NavLink>
                </Stack>
              </Stack>
            </Box>
          </Drawer>
          <Stack
            sx={{
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
              minWidth: "550px",
            }}
            direction="row"
            spacing={2}
          >
            <NavLink className="nav-links" to="/">
              Home
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
              onClick={handleDropdownPartners}

              // onClick={handleDropdownPartners}
            >
              Partners
              <KeyboardArrowDownIcon
                sx={{
                  ...(openDropdown ? { transform: "rotate(180deg)" } : ""),
                }}
              />
            </Button>
            <Backdrop
              sx={{
                backgroundColor: "transparent",
                color: "#000",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                width: "100%",
                height: "100%",
                alignItems: "start",
                top: "10%",
                left: -16,
              }}
              open={openDropdown}
              onClick={() => setOpenDropdown(false)}
            >
              <Stack
                width="100%"
                backgroundColor="#fff"
                direction="row"
                flexWrap="wrap"
                boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
                height={260}
                justifyContent="start"
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

            <NavLink
              className="nav-links"
              style={{
                width: "auto",
                minWidth: "100px",
              }}
              to="/about"
            >
              About us
            </NavLink>
            <Button
              sx={{
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
                p: 0,
                borderRadius: 0,
              }}
              onClick={handleDropdown}
            >
              Services
              <KeyboardArrowDownIcon
                sx={{
                  ...(openDropdownServices
                    ? { transform: "rotate(180deg)" }
                    : ""),
                }}
              />
            </Button>
            <Backdrop
              sx={{
                backgroundColor: "transparent",
                color: "#000",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                width: "100%",
                height: "100%",
                alignItems: "start",
                top: "10%",
                left: -16,
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
                height={300}
                justifyContent="start"
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
                    width={400}
                    maxHeight={120}
                    spacing={2}
                  >
                    <img
                      style={{
                        borderRadius: "7px",
                      }}
                      src={item.img_src}
                      alt=""
                    />
                    <Typography>{item.title}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Backdrop>

            <NavLink className="nav-links" to="/contacts">
              Contacts
            </NavLink>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
