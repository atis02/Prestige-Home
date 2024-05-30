import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  AOS.init({
    duration: 2500,
    offset: 0,
  });
  const servicesData = [
    {
      img_url: "/images/services/servces (4).png",
      title: t("servicesTitle"),
      description: <Trans i18nKey="servicesText2" components={{ 1: <br /> }} />,
    },
    {
      img_url: "/images/services/servces (1).png",
      title: t("servicesTitle2"),
      description: t("servicesText4"),
    },
    {
      img_url: "/images/services/servces (5).png",
      title: t("servicesTitle3"),
      description: <Trans i18nKey="servicesText" components={{ 1: <br /> }} />,
    },
    {
      img_url: "/images/services/servces (2).png",
      title: t("servicesTitle4"),
      description: <Trans i18nKey="servicesText3" components={{ 1: <br /> }} />,
    },
    {
      img_url: "/images/services/servces (3).png",
      title: t("servicesTitle5"),
      description: t("servicesText5"),
    },
  ];
  return (
    <>
      <Box>
        <Stack
          p={{
            lg: "20px 80px",
            md: "10px 60px",
            sm: "10px 30px",
            xs: "15px 15px",
          }}
          backgroundColor="#f5f5f5"
          mb={10}
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
            {t("services")}
          </Typography>
          <Stack mt="30px" direction="row" flexWrap="wrap" sx={{ gap: "40px" }}>
            {servicesData.map((elem, index) => (
              <Stack
                key={index}
                sx={{ gap: "20px" }}
                direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
                width={{ lg: "48%", md: "100%", sm: "100%", xs: "100%" }}
                alignItems={{
                  lg: "start",
                  md: "start",
                  sm: "center",
                  xs: "center",
                }}
              >
                <Stack
                  width={{ lg: 280, md: 250, sm: 200, xs: 280 }}
                  height={{ lg: 300, md: 280, sm: 200, xs: 280 }}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="800"
                >
                  <img
                    src={elem.img_url}
                    style={{ width: "auto", height: "100%" }}
                    alt=""
                  />
                </Stack>
                <Stack>
                  <Typography
                    fontFamily="Montserrat"
                    fontSize={18}
                    fontWeight={600}
                    color="#3a3a3a"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="800"
                  >
                    {elem.title}
                  </Typography>
                  <Typography
                    fontFamily="Montserrat"
                    fontSize={16}
                    fontWeight={400}
                    color="#858585"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1000"
                    textAlign="justify"
                    mt={{ lg: "23px", md: "20px", sm: "18px", xs: "15px" }}
                  >
                    {elem.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ background: "#D0D0D0", opacity: 0.3 }} />
      </Box>
      <Footer />
    </>
  );
};

export default Services;
