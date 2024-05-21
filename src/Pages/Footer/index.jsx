import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Img } from "react-image";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box id="contacts">
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
        alignItems={{ lg: "center", md: "center", sm: "start", xs: "start" }}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Stack maxWidth={320} spacing={1} mb={3}>
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
              mb={2}
            >
              {t("footerDest")}
            </Typography>
          </Stack>
          <Stack width={20} height={20} direction="row" spacing={3}>
            <Img
              src="/images/main/bi_instagram (1).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
            <Img
              src="/images/main/bi_facebook (1).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
            <Img
              src="/images/main/bi_tiktok (1).png"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Stack>
        </Stack>
        <Stack height={144} spacing={1} justifyContent="space-between">
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
          spacing="6px"
          pr={{ lg: 0, md: 0, sm: 0, xs: 3 }}
          mb={{ lg: 0, md: 0, sm: 3, xs: 3 }}
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
            <li>Home</li>
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
            <li>Services</li>
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
            <li>Partners</li>
          </Link>
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
            <li>About us</li>
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
            <li>Contacts</li>
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
        fontSize={16}
        color="#858585"
        p="8px 0"
      >
        © 2024 All rights reserved | Powered by Alem Tilsimat
      </Typography>
    </Box>
  );
};

export default Footer;
