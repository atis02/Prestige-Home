import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const aboutImg = [
    {
      img_src: "/images/services/about (1)-min.png",
      title: t("aboutImgDesc1"),
    },
    {
      img_src: "/images/services/about (2)-min.png",
      title: t("aboutImgDesc2"),
    },
    {
      img_src: "/images/services/about (3)-min.png",
      title: t("aboutImgDesc3"),
    },
    {
      img_src: "/images/services/about (4)-min.png",
      title: t("aboutImgDesc4"),
    },
    {
      img_src: "/images/services/about (5)-min.png",
      title: t("aboutImgDesc5"),
    },
    {
      img_src: "/images/services/about (6)-min.png",
      title: t("aboutImgDesc6"),
    },
  ];
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
        >
          {t("about")}
        </Typography>
        <Stack
          direction="row"
          mt="30px"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {aboutImg.map((item, index) => (
            <Stack
              key={index}
              maxWidth={170}
              maxHeight={290}
              direction="column"
              alignItems="center"
              spacing={1}
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
          >
            {t("aboutText2")}
          </Typography>
          <Typography
            color="#3A3A3A"
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
            fontWeight={500}
          >
            {t("aboutText3")}
          </Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center" mt="50px" mb="70px">
          <Typography
            fontFamily="Playfair Display"
            fontWeight={700}
            fontSize={22}
            color="#3a3a3a"
            textAlign="center"
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
