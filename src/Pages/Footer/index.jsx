import {
  Backdrop,
  Box,
  Divider,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdownServices, setOpenDropdownServices] = useState(false);
  const [openDropdownServices2, setOpenDropdownServices2] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDropdown = () => {
    setOpenDropdownServices(!openDropdownServices);
    setOpenDropdown(false);
  };
  const handleDropdownPartners = () => {
    setOpenDropdown(!openDropdown);
    setOpenDropdownServices(false);
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
  AOS.init({
    duration: 1500,
    offset: 0,
  });
  return (
    <Box id="contacts" sx={{ scrollMarginTop: "40px" }}>
      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        mt="10px"
        mb="10px"
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Stack maxWidth={320} spacing={0.5}>
          <Stack direction="row" spacing={1}>
            <Typography
              fontFamily="Montserrat"
              fontSize={{ lg: 40, md: 30, sm: 30, xs: 30 }}
              lineHeight="60px"
              color="#444444"
              fontWeight={700}
            >
              Prestige
            </Typography>
            <Typography
              fontFamily="Montserrat"
              fontSize={{ lg: 40, md: 30, sm: 30, xs: 30 }}
              lineHeight="60px"
              fontWeight={700}
              color="#8B181B"
            >
              Home
            </Typography>
          </Stack>
          <Stack>
            <Typography
              fontFamily="Montserrat"
              fontSize={16}
              lineHeight="24px"
              fontWeight={400}
            >
              {t("footerDest")}
            </Typography>
            <Typography
              fontFamily="Montserrat"
              fontSize={16}
              lineHeight="24px"
              fontWeight={400}
              mb={2}
            >
              {t("footerDest2")}
            </Typography>
          </Stack>
          <Stack width={20} height={20} direction="row" spacing={3}>
            <a href="https://www.instagram.com/prestigehome_tm?igsh=NmxodjM3eXg5a3Bo">
              <Img
                src="/images/main/bi_instagram (1).png"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/">
              <Img
                src="/images/main/bi_facebook (1).png"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            </a>
            <a href="https://www.tiktok.com/@prestige_home_">
              <Img
                src="/images/main/bi_tiktok (1).png"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            </a>
          </Stack>
        </Stack>
        <Stack height={144} spacing={1} mt={2} justifyContent="space-between">
          <Stack>
            <Typography
              color="#8B181B"
              fontWeight={500}
              fontSize={18}
              fontFamily="Montserrat"
            >
              Instagram:{" "}
            </Typography>
            <Typography fontWeight={300} fontSize={18} fontFamily="Montserrat">
              prestigehome_tm
            </Typography>
            <Typography fontWeight={300} fontSize={18} fontFamily="Montserrat">
              miele_turkmenistan
            </Typography>
            <Typography fontWeight={300} fontSize={18} fontFamily="Montserrat">
              haecker_kuchen_tm
            </Typography>
          </Stack>
          <Stack>
            <Typography
              color="#8B181B"
              fontWeight={500}
              fontSize={18}
              fontFamily="Montserrat"
            >
              Phone:
            </Typography>
            <Link
              to="tel:+99365687740"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: 300,
                fontSize: 18,
                fontFamily: "Montserrat",
              }}
            >
              +993 65687740
            </Link>
            <Link
              to="tel:197-197"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: 300,
                fontSize: 18,
                fontFamily: "Montserrat",
              }}
            >
              197-197
            </Link>
          </Stack>
        </Stack>
        <Stack
          spacing="16px"
          pr={{ lg: 0, md: 0, sm: 0, xs: 3 }}
          mb={{ lg: 0, md: 0, sm: 3, xs: 3 }}
          mt={2}
        >
          <Link
            to="/"
            style={{
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: 400,
              textDecoration: "none",
              color: "#000",
            }}
          >
            <li>{t("home")}</li>
          </Link>

          <Link
            to="/services"
            style={{
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: 400,
              textDecoration: "none",
              color: "#000",
            }}
          >
            <li>{t("services")}</li>
          </Link>

          <Button
            sx={{
              height: 22,

              color: "#000",
              fontWeight: 400,
              fontSize: 16,
              fontFamily: "Montserrat",
              textTransform: "capitalize",
              m: 0,
              p: 0,
              borderRadius: 0,
            }}
            onClick={handleDropdownPartners}
          >
            <li>{t("partners")}</li>
            <Backdrop
              sx={{
                backgroundColor: "transparent",
                color: "#000",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                width: "100%",
                height: "100%",
                alignItems: "start",
                top: { lg: "8%", md: "12%", sm: "70px", xs: "55px" },
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
          <Link
            to="/about"
            style={{
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: 400,
              textDecoration: "none",
              color: "#000",
            }}
          >
            <li>{t("about")}</li>
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: 400,
              textDecoration: "none",
              color: "#000",
            }}
          >
            <li>{t("contacts")}</li>
          </Link>
        </Stack>
        <Stack width={420} justifyContent="center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.6922681065533!2d58.35887708397274!3d37.93953251298427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7001f042f737ab%3A0x8d105438ab3be3b5!2sRysgally%20S%C3%B6wda%20Merkezi!5e1!3m2!1sen!2s!4v1715144428553!5m2!1sen!2s"
            style={{ width: "auto" }}
            height="216px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />

      <Typography
        textAlign="center"
        fontWeight={300}
        fontFamily="Montserrat"
        fontSize={{ lg: 16, md: 15, sm: 14, xs: 12 }}
        color="#858585"
        p="8px 0"
      >
        Copyright © {new Date().getFullYear()} Prestige Home | Powered by{" "}
        <a
          href="https://alemtilsimat.com/"
          style={{ textDecoration: "none", color: "gray" }}
        >
          Alem Tilsimat
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
