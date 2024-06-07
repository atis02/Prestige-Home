import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Img } from "react-image";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollIntoView from "react-scroll-into-view";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AnimationWrapper } from "react-hover-animation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdownServices2, setOpenDropdownServices2] = useState(false);
  AOS.init({
    duration: 600,
    offset: 0,
  });
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
    const handleScrollBottom = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollBottom);
    return () => {
      window.removeEventListener("scroll", handleScrollBottom);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();

  const scrollToBottom = () => {
    scroll.scrollToBottom();
    setMobileMenuOpen(false);
    setOpenDropdown(false);
  };
  const partnerImages = [
    {
      title: "Miele",
      link: "https://www.miele.com",
      src: "/images/partners/Vector.png",
    },
    {
      title: "Gala collezione",
      link: "https://www.galameble.com",
      src: "/images/partners/Vector-9.png",
    },
    {
      title: "Haecker-kuechen",
      link: "https://www.haecker-kuechen.com",
      src: "/images/partners/Vector-1.png",
    },
    {
      title: "Blanco",
      link: "https://www.blanco.com",
      src: "/images/partners/Vector-2.png",
    },
    {
      title: "Falmec",
      link: "https://www.falmec.com",
      src: "/images/partners/Vector-3.png",
    },
    {
      title: "KitchenAid",
      link: "https://www.kitchenaid.com",
      src: "/images/partners/Vector-4.png",
    },
    {
      title: "Kuvings",
      link: "https://kuvings.com",
      src: "/images/partners/Vector-5.png",
    },
    {
      id: 1,
      title: "Nivona",
      link: "https://nivona.com/",
      src: "/images/partners/Vector-6.png",
    },
    {
      title: "Dyson",
      link: "https://www.dyson.com",
      src: "/images/partners/Vector-7.png",
    },
    {
      title: "Loewe",
      link: "https://www.loewe.tv",
      src: "/images/partners/Vector-8.png",
    },

    {
      title: "Voglauer",
      link: "https://www.voglauer.com",
      src: "/images/partners/Vector-10.png",
    },
    {
      title: "Gwinner",
      link: "https://www.gwinner.de/",
      src: "/images/partners/Vector-11.png",
    },
    {
      title: "Aran Cucine",
      link: "https://www.arancucine.it/",
      src: "/images/partners/Vector-12.png",
    },
    {
      title: "Colombini casa",
      link: "https://www.colombinicasa.com/",
      src: "/images/partners/Vector-13.png",
    },
    {
      title: "Bauformat Küchen",
      link: "https://www.bauformat.de/",
      src: "/images/partners/Vector-14.png",
    },
    {
      title: "Giusti",
      link: "https://giusti.com/",
      src: "/images/partners/image 32.png",
    },
  ];
  const handleDropdownPartners = () => {
    setOpenDropdown(!openDropdown);
    setHoverOpen(false);
    setScrolling(false);
  };
  const handleDropdownPartnersMobile = () => {
    setOpenDropdown2(!openDropdown);
    setOpenDropdownServices2(false);
    setMobileMenuOpen(false);
  };

  const navStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: "#3A3A3A",
      fontFamily: "Montserrat",
      fontSize: 18,
      fontWeight: 500,
      lineHeight: "27px",
      ...(openDropdown === false && scrolling === false
        ? {
            fontWeight: isActive ? 600 : 500,
            color: isActive ? "#8B181B" : "#3A3A3A",
            borderBottom: isActive ? " 2px solid #8B181B" : "",
          }
        : ""),
    };
  };
  return (
    <Box
      position="sticky"
      zIndex={1000}
      backgroundColor="#fff"
      height={{ lg: 80, md: 80, sm: 80, xs: 60 }}
      top={0}
      sx={{
        ...(scrolled
          ? {
              boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.25)",
              opacity: "90%",
            }
          : { boxShadow: "0" }),
      }}
      p={{ lg: "5px 80px", md: "10px 60px", sm: "10px 30px", xs: "5px 10px" }}
    >
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        sx={{ gap: { lg: "10px", md: "10px", sm: "10px", xs: "5px" } }}
      >
        <ToastContainer />
        <Link to="/">
          <Stack
            sx={{
              width: { lg: 270, md: 180, sm: 50, xs: 50 },
              height: { lg: 70, md: 60, sm: 50, xs: 50 },
            }}
          >
            {isMobile ? (
              <img
                style={{
                  width: 50,
                  height: 50,
                }}
                src="/images/main/Logo.png"
                alt=""
              />
            ) : (
              <img
                style={{ width: "100%", height: "100%" }}
                src="/images/main/logo 2.png"
                alt=""
              />
            )}
          </Stack>
        </Link>
        <Stack
          direction="row"
          width={{ lg: "100%", md: "100%", sm: "100%", xs: "70px" }}
          alignItems="center"
          justifyContent="center"
          sx={{ gap: "20px" }}
        >
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
                alignItems="start"
              >
                <Button
                  sx={{ color: "currentColor", pl: 7 }}
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
                  alignItems="start"
                  pl={3}
                  width={150}
                  justifyContent="center"
                  spacing={2}
                >
                  <NavLink
                    className="nav-links"
                    style={navStyle}
                    to="/"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                      setOpenDropdown2(false);
                      setOpenDropdownServices2(false);
                    }}
                  >
                    {t("home")}
                  </NavLink>
                  <Button
                    id="Partners"
                    sx={{
                      color: "#3A3A3A",
                      fontSize: 18,
                      fontFamily: "Montserrat",
                      textTransform: "capitalize",
                      ...(openDropdown2
                        ? {
                            borderBottom: "2px solid #8B181B",
                            color: "#8B181B",
                            fontWeight: 600,
                          }
                        : ""),
                      p: 0,
                      borderRadius: 0,
                    }}
                    onClick={handleDropdownPartnersMobile}
                  >
                    {t("partners")}
                    <KeyboardArrowDownIcon
                      sx={{
                        ...(openDropdown2
                          ? { transform: "rotate(180deg)" }
                          : ""),
                      }}
                    />
                  </Button>

                  <NavLink
                    className="nav-links"
                    style={navStyle}
                    to="/services"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                      setOpenDropdown2(false);
                      setOpenDropdownServices2(false);
                    }}
                  >
                    {t("services")}
                  </NavLink>
                  <NavLink
                    className="nav-links"
                    style={navStyle}
                    to="/about"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                      setOpenDropdown2(false);
                      setOpenDropdownServices2(false);
                    }}
                  >
                    {t("about")}
                  </NavLink>
                  <ScrollIntoView smooth={true} selector="#contacts">
                    <Button
                      sx={{
                        height: 34,
                        mb: "10px",
                        color: "#3A3A3A",
                        fontSize: 18,
                        fontFamily: "Montserrat",
                        textTransform: "capitalize",
                        p: 0,
                        borderRadius: 0,
                        ...(scrolling
                          ? {
                              fontWeight: 600,
                              color: "#8B181B",
                              borderBottom: " 2px solid #8B181B",
                            }
                          : ""),
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenDropdown2(false);
                        setOpenDropdownServices2(false);
                      }}
                    >
                      {t("contacts")}
                    </Button>
                  </ScrollIntoView>
                </Stack>
              </Stack>
            </Box>
          </Drawer>
          <Stack
            sx={{
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ lg: 2, md: 1.5, sm: 3, xs: 3 }}
          >
            <NavLink
              className="nav-links"
              onClick={() => {
                setOpenDropdown(false);
                window.scrollTo(0, 0);
              }}
              to="/"
              style={navStyle}
            >
              <AnimationWrapper>{t("home")}</AnimationWrapper>
            </NavLink>

            <Button
              sx={{
                mb: "10px",
                height: 30,
                color: "#3A3A3A",
                fontSize: 18,
                fontFamily: "Montserrat",
                textTransform: "capitalize",
                ...(openDropdown || hoverOpen
                  ? {
                      borderBottom: "2px solid #8B181B",
                      color: "#8B181B",
                      fontWeight: 600,
                    }
                  : ""),

                p: 0,
                borderRadius: 0,
              }}
              onClick={handleDropdownPartners}
              onMouseEnter={() => setHoverOpen(true)}
              onMouseLeave={() => setHoverOpen(false)}
            >
              <AnimationWrapper>{t("partners")}</AnimationWrapper>
            </Button>
            {openDropdown || hoverOpen ? (
              <Stack
                sx={{
                  backgroundColor: "transparent",
                  color: "#000",
                  width: "106.9%",
                  height: "250px",
                  alignItems: "start",
                  top: { lg: "60px", md: "70px", sm: "70px", xs: "58px" },
                  cursor: "auto",
                  position: "absolute",
                }}
                className="partners"
                data-aos="fade"
                data-aos-once="true"
                data-aos-delay="100"
                onMouseEnter={() => setHoverOpen(true)}
                onMouseLeave={() => setHoverOpen(false)}
              >
                <Stack
                  width="100%"
                  backgroundColor="#fff"
                  boxShadow="0px 5px 10px 0px rgba(0,0,0,0.25)"
                  height={{ lg: 460, md: 260, sm: 260, xs: 400 }}
                  p={{
                    lg: "5px 20px 0 140px",
                    md: "10px 60px",
                    sm: "10px 30px",
                    xs: "5px 10px",
                  }}
                >
                  <Stack
                    sx={{
                      position: "absolute",
                      zIndex: 10000,
                      top: 10,
                      right: 30,
                    }}
                  >
                    <AnimationWrapper>
                      <IconButton
                        sx={{
                          width: 30,
                          height: 30,
                        }}
                        onClick={() => {
                          setHoverOpen(false);
                          setOpenDropdown(false);
                        }}
                      >
                        <img
                          src="/images/main/Vector-3.png"
                          style={{
                            width: 24,
                            height: 24,
                          }}
                          alt=""
                        />
                      </IconButton>
                    </AnimationWrapper>
                  </Stack>
                  <Stack
                    width="100%"
                    height="100%"
                    direction="row"
                    flexWrap="wrap"
                    justifyContent={{
                      lg: "center",
                      md: "start",
                      sm: "start",
                      xs: "center",
                    }}
                    sx={{ gap: "0 42px" }}
                    alignItems="center"
                    mt={3}
                  >
                    {partnerImages.map((item, index) => (
                      <AnimationWrapper>
                        <Link key={index} target="_blank" to={item.link}>
                          <Stack mr={4} width="120px" maxHeight={60}>
                            <img src={item.src} alt="" />
                          </Stack>
                        </Link>
                      </AnimationWrapper>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            ) : (
              ""
            )}
            <NavLink
              className="nav-links"
              style={navStyle}
              onClick={() => {
                window.scrollTo(0, 0);
                setOpenDropdown(false);
              }}
              to="/services"
            >
              <AnimationWrapper>{t("services")}</AnimationWrapper>
            </NavLink>
            <NavLink
              className="nav-links"
              style={navStyle}
              to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpenDropdown(false);
              }}
            >
              <AnimationWrapper>{t("about")}</AnimationWrapper>
            </NavLink>
            <Button
              sx={{
                height: 28,
                mb: "10px",
                color: "#3A3A3A",
                fontSize: 18,
                fontFamily: "Montserrat",
                textTransform: "capitalize",
                p: "6px",
                borderRadius: 0,
                ...(scrolling
                  ? {
                      fontWeight: 600,
                      color: "#8B181B",
                      borderBottom: " 2px solid #8B181B",
                    }
                  : ""),
              }}
              onClick={scrollToBottom}
            >
              <AnimationWrapper>{t("contacts")}</AnimationWrapper>
            </Button>
          </Stack>
          <Backdrop
            sx={{
              backgroundColor: "transparent",
              color: "#000",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              width: "100%",
              height: "100%",
              alignItems: "start",
              top: { lg: "80px", md: "80px", sm: "70px", xs: "60px" },
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
              height={{ lg: 260, md: 260, sm: 260, xs: 250 }}
              justifyContent="space-between"
              alignItems="center"
              p={{
                lg: "5px 80px",
                md: "10px 60px",
                sm: "10px 30px",
                xs: "5px 10px",
              }}
            >
              {partnerImages.map((item, index) => (
                <Link
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                  target="_blank"
                  to={item.link}
                >
                  <Stack maxWidth="85px" justifyContent="center" height={40}>
                    <img src={item.src} alt="" />
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Backdrop>
        </Stack>
        <Stack
          width={{ lg: "50%", md: "30%", sm: "100%", xs: "1000px" }}
          direction="row"
          spacing={2}
        >
          <Stack
            sx={{
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
            spacing={1}
          >
            <Link
              to="tel:+99365687740"
              style={{
                textDecoration: "none",
                color: "#3a3a3a",
                fontWeight: 600,
                fontSize: 18,
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              <AnimationWrapper> +993 65687740</AnimationWrapper>
            </Link>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img
                src="/images/main/bi_instagram (1).png"
                style={{ width: 18, height: 18 }}
                alt=""
              />
              <AnimationWrapper>
                <Typography
                  fontFamily="Montserrat"
                  fontSize={15}
                  fontWeight={400}
                >
                  <a
                    href="https://www.instagram.com/prestigehome_tm?igsh=NmxodjM3eXg5a3Bo"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#8B181B" }}
                  >
                    prestigehome_tm
                  </a>
                </Typography>
              </AnimationWrapper>
            </Stack>
          </Stack>
          <Autocomplete
            fullWidth
            freeSolo
            options={partnerImages.map((elem) => elem.title)}
            onChange={(event, value) => {
              partnerImages.find(
                (item) =>
                  item.title === value
                    ? setTimeout(() => {
                        window.location.assign(item.link);
                      }, 1500)
                    : "",
                toast.warn(t("redirect"))
              );
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                padding: "0 15px !important",
                width: "100%",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                name="user_name"
                id="outlined-basic"
                autoComplete="off"
                placeholder={t("search")}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  style: {
                    color: "#3a3a3a",
                    gap: "10px",
                  },

                  startAdornment: (
                    <Img
                      style={{ width: 23, height: 23 }}
                      src="/images/main/Shape.png"
                      alt=""
                    />
                  ),
                  sx: {
                    backgroundColor: "transparent",
                    height: {
                      lg: "48px",
                      md: "48px",
                      sm: "38px",
                      xs: "38px",
                    },
                    width: "auto",
                    fontWeight: "500",
                    borderRadius: {
                      lg: "10px",
                      md: "10px",
                      sm: "100px",
                      xs: "100px",
                    },
                  },
                }}
              />
            )}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ ...(isMobile ? { display: "flex" } : { display: "none" }) }}
          ml={2}
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
        </Stack>
        <Language />
      </Stack>
    </Box>
  );
};

export default Navbar;
