import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Img } from "react-image";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import TabButtons from "./Components";
import Footer from "../Footer";
import { Trans, useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t, i18n } = useTranslation();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { lg: "80%", md: "80%", sm: "90%", xs: "90%" },
    height: { lg: "690px", md: "580px", sm: "480px", xs: "85%" },
    bgcolor: "background.paper",
    boxShadow: 24,
    overflow: "scroll",
    p: 2,
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  AOS.init({
    duration: 2500,
    offset: 0,
  });
  return (
    <Box>
      <Stack
        id="Home"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
      >
        <Stack
          width={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 700, md: 500, sm: 430, xs: "45vh" }}
        >
          <Swiper
            slidesPerView={1}
            loop={true}
            speed={3000}
            allowTouchMove={false}
            autoplay={{ delay: 2900, disableOnInteraction: false }}
            modules={[Autoplay, Navigation, Scrollbar, A11y]}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SwiperSlide>
              <Stack
                height="100%"
                justifyContent={{
                  lg: "center",
                  md: "center",
                  sm: "center",
                  xs: "end",
                }}
                backgroundColor="#8B181B"
              >
                <Typography
                  fontSize={{ lg: 63, md: 58, sm: 50, xs: 63 }}
                  lineHeight="93px"
                  fontFamily="Montserrat"
                  color="#fff"
                  fontWeight={600}
                  textAlign={{ lg: "end", md: "end", sm: "end", xs: "center" }}
                  mr={{ lg: "20px", md: "20px", sm: "20px", xs: 0 }}
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  Prestige
                </Typography>
              </Stack>
            </SwiperSlide>
            <SwiperSlide>
              <Img
                src="/images/main/main (1).png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Img
                src="/images/main/main (2).png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Stack>

        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 700, md: 500, sm: 430, xs: "45vh" }}
        >
          <Swiper
            slidesPerView={1}
            loop={true}
            speed={3000}
            allowTouchMove={false}
            autoplay={{ delay: 2900, disableOnInteraction: false }}
            modules={[Autoplay, Navigation, Scrollbar, A11y]}
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SwiperSlide>
              <Stack
                height="100%"
                justifyContent={{
                  lg: "center",
                  md: "center",
                  sm: "center",
                  xs: "start",
                }}
                backgroundColor="#3A3A3A"
              >
                <Typography
                  fontSize={{ lg: 63, md: 58, sm: 50, xs: 63 }}
                  lineHeight="93px"
                  fontFamily="Montserrat"
                  color="#fff"
                  fontWeight={600}
                  ml={{ lg: "20px", md: "20px", sm: "20px", xs: 0 }}
                  textAlign={{
                    lg: "start",
                    md: "start",
                    sm: "start",
                    xs: "center",
                  }}
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  Home
                </Typography>
              </Stack>
            </SwiperSlide>
            <SwiperSlide>
              <Img
                src="/images/main/main (2).png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Img
                src="/images/main/main (1).png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </Stack>
      <Typography
        position="absolute"
        top={{ lg: "580px", md: "420px", sm: "370px", xs: "190px" }}
        color="#fff"
        width="100%"
        zIndex={100}
        fontSize={{ lg: 42, md: 38, sm: 25, xs: 25 }}
        fontWeight={600}
        lineHeight={{ lg: "63px", md: "63px", sm: "63px", xs: "none" }}
        textAlign={{ lg: "center", md: "start", sm: "center", xs: "center" }}
        fontFamily="Montserrat"
        p="10px"
        backgroundColor="#2506074D"
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="1000"
      >
        {t("mainText")}
      </Typography>
      <Stack
        width="100%"
        pt="20px"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="1000"
      >
        <Divider sx={{ background: "#D0D0D0" }} />
        <Typography
          fontFamily="Montserrat"
          textAlign="center"
          fontSize={18}
          fontWeight={500}
          p="20px 10px"
          color="#858585"
        >
          {t("mainTextDesc")}
          <span style={{ color: "#8B181B", fontWeight: 600 }}>
            Prestige Home
          </span>
          {t("mainTextDesc2")}
        </Typography>
        <Divider sx={{ background: "#D0D0D0" }} />
      </Stack>
      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        width="97.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column-reverse" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: { lg: "30px", md: "30px", sm: "15px", xs: "10px" } }}
        mb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
      >
        <Stack
          sx={{ scrollMarginTop: "100px" }}
          id={i18n.language === "en" ? "European Kitchen" : "Европейские кухни"}
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-once="true"
          data-aos-delay="1000"
          width={{ xl: "50%", lg: "50%", md: "50%", sm: "55%", xs: "100%" }}
        >
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={600}
            textAlign={{ lg: "end", md: "end", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            {t("europeKitchen")}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={15}
            fontFamily="Montserrat"
            color="#858585"
            textAlign="justify"
            lineHeight="28px"
          >
            {t("europeKitchenDesc")}
          </Typography>
        </Stack>
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 430, md: 300, sm: 300, xs: 250 }}
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-once="true"
          data-aos-delay="1000"
        >
          <img
            src="/images/main/main (3).png"
            alt=""
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />

      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        width="97.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        mb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
        sx={{ gap: { lg: "30px", md: "30px", sm: "15px", xs: "10px" } }}
      >
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 430, md: 300, sm: 300, xs: 250 }}
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-once="true"
          data-aos-delay="1000"
        >
          <img
            src="/images/main/Rectangle 7 (8).png"
            alt=""
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Stack>
        <Stack
          sx={{ scrollMarginTop: "100px" }}
          id="Miele"
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-once="true"
          data-aos-delay="1000"
          width={{ xl: "100%", lg: "47%", md: "50%", sm: "55%", xs: "100%" }}
        >
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={600}
            textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            Miele
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
            textAlign="justify"
          >
            {t("mieleDesc")}
          </Typography>
          <Stack width="100%" alignItems="start" mt={2}>
            <Button
              variant="outlined"
              sx={{
                color: "#8C0014",
                border: "1px solid #8C0014",
                "&:hover": {
                  border: "1px solid #8C0014",
                  background: "#8C0014",
                  color: "#fff",
                },
                p: "10px 20px",
                fontSize: "14px",
                textTransform: "revert",
                width: "170px",
              }}
              onClick={handleOpen}
            >
              {t("moreBtn")}
            </Button>
            <Stack>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Stack
                    sx={{
                      position: "sticky",
                      zIndex: 10000,
                      top: 0,
                      right: 0,
                      alignItems: "end",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      sx={{
                        width: 30,
                        height: 30,
                      }}
                      onClick={handleClose}
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
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      className="modal-title"
                      fontSize={{ lg: 70, md: 60, sm: 50, xs: 45 }}
                      textAlign="center"
                      fontFamily="Playfair Display"
                      width="100%"
                    >
                      Miele
                    </Typography>
                  </Stack>
                  <Stack
                    direction={{
                      lg: "row",
                      md: "column",
                      sm: "column",
                      xs: "column",
                    }}
                    justifyContent="space-between"
                  >
                    <Stack
                      maxWidth="100%"
                      minHeight={250}
                      direction={{
                        lg: "row",
                        md: "row",
                        sm: "row",
                        xs: "column",
                      }}
                      justifyContent="space-evenly"
                      spacing={1}
                    >
                      <Stack
                        sx={{
                          width: {
                            lg: "350px",
                            md: "70%",
                            sm: "70%",
                            xs: "100%",
                          },
                          height: "250px",
                        }}
                      >
                        <img
                          src="/images/main/Rectangle 22.png"
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Stack>
                      <Stack
                        sx={{
                          position: {
                            lg: "absolute",
                            md: "auto",
                            sm: "auto",
                            xs: "auto",
                          },
                          width: {
                            lg: "320px",
                            md: "50%",
                            sm: "50%",
                            xs: "100%",
                          },
                          height: "250px",
                          top: { lg: "50%", md: 0, sm: 0, xs: 0 },
                          left: "19%",
                        }}
                      >
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src="/images/main/Rectangle 23.png"
                          alt=""
                        />
                      </Stack>
                    </Stack>
                    <Typography
                      maxWidth={{ lg: 610, md: "100%", sm: "100%", xs: "100%" }}
                      color="#3A3A3A"
                      fontFamily="Montserrat"
                      fontSize={{ lg: 16, md: 15, sm: 14, xs: 12 }}
                      id="modal-modal-description"
                      lineHeight="27px"
                      mt={2}
                    >
                      <Trans
                        i18nKey="mieleModalDesc"
                        components={{ 1: <br /> }}
                      />
                    </Typography>
                  </Stack>
                </Box>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />

      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        width="97.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column-reverse" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        mb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
        sx={{ gap: { lg: "30px", md: "30px", sm: "15px", xs: "10px" } }}
      >
        <Stack
          sx={{ scrollMarginTop: "100px" }}
          id={
            i18n.language === "en" ? "Upholstered Furniture" : "Мягкие мебели"
          }
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-once="true"
          data-aos-delay="1000"
          width={{ xl: "100%", lg: "47%", md: "50%", sm: "55%", xs: "100%" }}
        >
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={600}
            textAlign={{ lg: "end", md: "end", sm: "center", xs: "center" }}
            mb="15px"
            mr={2.7}
            color="#3A3A3A"
          >
            {t("furniture")}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
            textAlign="justify"
          >
            {t("furnitureDesc")}
          </Typography>
        </Stack>
        <Stack
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-once="true"
          data-aos-delay="1000"
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 430, md: 300, sm: 300, xs: 250 }}
        >
          <img
            src="/images/main/main (4).png"
            alt=""
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />
      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        width="97.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        mb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
        sx={{ gap: { lg: "30px", md: "30px", sm: "15px", xs: "10px" } }}
      >
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 430, md: 300, sm: 300, xs: 250 }}
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-once="true"
          data-aos-delay="1000"
        >
          <img
            src="/images/main/main (7).png"
            alt=""
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Stack>
        <Stack
          sx={{ scrollMarginTop: "150px" }}
          id="Loewe"
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-once="true"
          data-aos-delay="800"
          width={{ xl: "100%", lg: "47%", md: "50%", sm: "55%", xs: "100%" }}
        >
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={600}
            textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            Loewe
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            textAlign="justify"
            lineHeight="28px"
          >
            {t("loewe")}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />

      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        width="97.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column-reverse" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        mb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
        sx={{ gap: { lg: "30px", md: "30px", sm: "15px", xs: "10px" } }}
      >
        <Stack
          sx={{ scrollMarginTop: "150px" }}
          id={
            i18n.language === "en"
              ? "Small Household Appliances"
              : "Мелкая бытовая техника"
          }
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-once="true"
          data-aos-delay="800"
          width={{ xl: "100%", lg: "47%", md: "50%", sm: "55%", xs: "100%" }}
        >
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={600}
            textAlign={{ lg: "end", md: "end", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            {t("smallHouse")}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={15}
            fontFamily="Montserrat"
            textAlign="justify"
            color="#858585"
            lineHeight="28px"
          >
            {t("smallHouseDesc")}
          </Typography>
        </Stack>
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 430, md: 300, sm: 300, xs: 250 }}
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-once="true"
          data-aos-delay="1000"
        >
          <img
            src="/images/main/main (5).png"
            alt=""
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />
      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
        width="97.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        mb={{ lg: 0, md: 0, sm: 0, xs: 3 }}
        sx={{ gap: { lg: "30px", md: "30px", sm: "15px", xs: "10px" } }}
      >
        <Stack
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-once="true"
          data-aos-delay="1000"
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 430, md: 300, sm: 300, xs: 250 }}
        >
          <img
            src="/images/main/main (8).png"
            alt=""
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Stack>
        <Stack
          sx={{ scrollMarginTop: "150px" }}
          id={i18n.language === "en" ? "Wardrobe" : "Гардеробная мебель"}
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-once="true"
          data-aos-delay="800"
          width={{ xl: "100%", lg: "47%", md: "50%", sm: "55%", xs: "100%" }}
        >
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={600}
            textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            {t("garderobFurniture")}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
            textAlign="justify"
          >
            {t("garderobFurnitureDesc")}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />
      <Typography
        fontSize={24}
        fontWeight={700}
        lineHeight="36px"
        textAlign="center"
        className="main-title"
        p="  20px 0 "
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-delay="1000"
        id={i18n.language === "en" ? "Showroom" : "Шоурум"}
        sx={{ scrollMarginTop: "80px" }}
      >
        {t("showroom")}
      </Typography>
      <Divider sx={{ background: "#D0D0D0" }} />

      <Stack
        p={{
          lg: "20px 80px",
          md: "10px 60px",
          sm: "10px 30px",
          xs: "15px 15px",
        }}
      >
        <Swiper
          slidesPerView={isMobile ? 1 : 4}
          loop={true}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Scrollbar, A11y]}
          style={{
            width: "100%",
            height: { ...(isMobile ? "250px" : "") },
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SwiperSlide>
            <Stack
              sx={{
                " &:hover": {
                  transform: "scale(1.1)",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                transition: "all ease-in-out .5s ",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
              }}
              data-aos="flip-right"
              data-aos-once="true"
              data-aos-delay="800"
              data-aos-easing="ease-in-out"
            >
              <img
                src="/images/main/main (9).png"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              sx={{
                " &:hover": {
                  transform: "scale(1.1)",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
              }}
              data-aos="flip-right"
              data-aos-once="true"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out"
            >
              <img
                src="/images/main/main (10).png"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              sx={{
                " &:hover": {
                  transform: "scale(1.1)",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
              }}
              data-aos="flip-right"
              data-aos-once="true"
              data-aos-delay="1100"
              data-aos-easing="ease-in-out"
            >
              <img
                src="/images/main/main (11).png"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              sx={{
                " &:hover": {
                  transform: "scale(1.1)",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
                height: "100%",
              }}
              data-aos="flip-right"
              data-aos-once="true"
              data-aos-delay="1200"
              data-aos-easing="ease-in-out"
            >
              <img
                src="/images/main/main (12).png"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              sx={{
                " &:hover": {
                  transform: "scale(1.1)",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
                height: "100%",
              }}
              data-aos="flip-right"
              data-aos-once="true"
              data-aos-delay="1300"
              data-aos-easing="ease-in-out"
            >
              <img
                src="/images/main/main (13).png"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Stack>
      <Divider sx={{ background: "#D0D0D0" }} />
      <Typography
        fontSize={24}
        fontWeight={700}
        lineHeight="36px"
        textAlign="center"
        className="main-title"
        p="  20px 0 "
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="600"
        data-aos-easing="ease-in-out"
        id={i18n.language === "en" ? "Ideas and Projects" : "Идеи и Проекты"}
        sx={{ scrollMarginTop: "80px" }}
      >
        {t("ideas")}
      </Typography>
      <Divider sx={{ background: "#D0D0D0" }} />
      <TabButtons />
      <Divider
        sx={{
          background: "#D0D0D0",
          mt: { lg: "70px", md: "50px", sm: "40px", xs: "30px" },
        }}
      />

      <Footer />
    </Box>
  );
};

export default Home;
