import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../Footer";
import { Trans, useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const aboutImg = [
    {
      img_src: "/images/about/about (1)-min.png",
      title: t("aboutImgDesc1"),
    },
    {
      img_src: "/images/about/about (2)-min.png",
      title: t("aboutImgDesc2"),
    },
    {
      img_src: "/images/about/about (3)-min.png",
      title: t("aboutImgDesc3"),
    },
    {
      img_src: "/images/about/about (4)-min.png",
      title: t("aboutImgDesc4"),
    },
    {
      img_src: "/images/about/about (5)-min.png",
      title: t("aboutImgDesc5"),
    },
    {
      img_src: "/images/about/about (6)-min.png",
      title: t("aboutImgDesc6"),
    },
  ];
  AOS.init({
    duration: 2500,
    offset: 0,
  });
  return (
    <Box>
      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        backgroundColor="#f5f5f5"
      >
        <Typography
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          textAlign="center"
          className="main-title"
          fontFamily="Playfair Display"
          p="  20px 0 "
          data-aos={isMobile ? "fade-down" : "fade-up"}
          data-aos-once="true"
          data-aos-delay="800"
        >
          {t("about")}
        </Typography>
        <Stack
          direction="row"
          mt="30px"
          flexWrap="wrap"
          // spacing={{ lg: 8, md: 10, sm: 8, xs: 2 }}
          sx={{ gap: { lg: "40px", md: "30px", sm: "25px", xs: "15px" } }}
          justifyContent="center"
        >
          {aboutImg.map((item, index) => (
            <Stack
              key={index}
              maxWidth={170}
              maxHeight={290}
              direction="column"
              alignItems="center"
              spacing={1}
              data-aos={isMobile ? "fade-down" : "fade-up"}
              data-aos-once="true"
              data-aos-delay="1200"
            >
              <Stack>
                <img
                  style={{
                    width: "100%",
                    height: "170px",
                    borderRadius: "100%",
                  }}
                  src={item.img_src}
                  alt=""
                />
              </Stack>
              <Typography
                pb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
                fontFamily="Playfair Display"
                fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
                fontWeight={700}
                color="#3A3A3A"
                textAlign="center"
              >
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack mt="50px" spacing={3}>
          <Typography
            color="#3A3A3A"
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
            fontWeight={500}
            data-aos={isMobile ? "fade-down" : "fade-up"}
            data-aos-once="true"
            data-aos-delay="1000"
          >
            {t("aboutText")}

            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: 18,
                color: "#3a3a3a",
              }}
            >
              “ Rysgally ”
            </span>
            {t("aboutText1")}
          </Typography>
          <Typography
            color="#3A3A3A"
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
            fontWeight={500}
            data-aos={isMobile ? "fade-down" : "fade-up"}
            data-aos-once="true"
            data-aos-delay="1200"
          >
            {t("aboutText2")}
          </Typography>
          <Typography
            color="#3A3A3A"
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
            fontWeight={500}
            data-aos={isMobile ? "fade-down" : "fade-up"}
            data-aos-once="true"
            data-aos-delay="1300"
          >
            {t("aboutText3")}
          </Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center" mt="50px" mb="70px">
          <Typography
            fontFamily="Montserrat"
            fontWeight={700}
            fontSize={{ lg: 22, md: 22, sm: 20, xs: 18 }}
            color="#3a3a3a"
            textAlign="center"
            data-aos={isMobile ? "fade-down" : "fade-up"}
            data-aos-once="true"
            data-aos-delay="1300"
          >
            <Trans i18nKey="aboutText4" components={{ 1: <br /> }} />
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ background: "#D0D0D0", opacity: 0.3 }} />

      <Footer />
    </Box>
  );
};

export default About;
