import {
  Box,
  Button,
  Grow,
  Slide,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Img } from "react-image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import {
  loftSwiper,
  modernSwiper,
  neoSwiper,
  sowrSwiper,
} from "./swiperData.mjs";
import { useTranslation } from "react-i18next";

const TabButtons = () => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setChecked((prev) => !prev);
    setValue(newValue);
  };
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box
            sx={{
              p: 1,
              height: "100%",
              maxWidth: 1280,
            }}
          >
            <Grow
              style={{ transformOrigin: "0 0 1" }}
              {...(value === index ? { timeout: 2600 } : {})}
              in={value === index}
            >
              {children}
            </Grow>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Stack
      p={{
        lg: "20px 80px",
        md: "10px 60px",
        sm: "10px 30px",
        xs: "15px 15px",
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Tabs
          variant="scrollable"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tab
            label={
              <Typography
                sx={{
                  ...(value === 0
                    ? {
                        color: "#fff",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }
                    : {
                        background:
                          "linear-gradient(to right,  #af272c, #1f1f1f)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "all ease-in-out 0.4s",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }),
                }}
              >
                {t("classic")}
              </Typography>
            }
            {...a11yProps(0)}
            variant="outlined"
            sx={{
              ...(value == 0
                ? {
                    backgroundImage: `linear-gradient(to right, #3A3A3AE5, #8C0014  )`,
                  }
                : ""),
              borderImage: "linear-gradient(#af272c 0%,#000 100%)30 ",
              borderWidth: "2px",
              borderStyle: "solid",
              borderImageSlice: "1",
              borderRadius: 0,
              textTransform: "capitalize",

              transition: "all ease-in-out 0.4s",
              "&:hover": {
                borderImage: "linear-gradient(#8C0014 0%,#3A3A3A 100%)30 ",
                borderWidth: "2px",
                borderRadius: 0,
                borderImageSlice: "1",
                borderStyle: "solid",
              },
              m: "10px",
            }}
          />
          <Tab
            label={
              <Typography
                sx={{
                  ...(value === 1
                    ? {
                        color: "#fff",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }
                    : {
                        background:
                          "linear-gradient(to right,  #af272c, #1f1f1f)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "all ease-in-out 0.4s",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }),
                }}
              >
                {t("neoClassical")}
              </Typography>
            }
            {...a11yProps(1)}
            variant="outlined"
            sx={{
              ...(value == 1
                ? {
                    backgroundImage: `linear-gradient(to right, #3A3A3AE5, #8C0014  )`,
                  }
                : ""),
              borderImage: "linear-gradient(#af272c 0%,#000 100%)30 ",
              borderWidth: "2px",
              borderStyle: "solid",
              borderImageSlice: "1",
              borderRadius: 0,
              textTransform: "capitalize",
              transition: "all ease-in-out 0.4s",
              "&:hover": {
                borderImage: "linear-gradient(#8C0014 0%,#3A3A3A 100%)30 ",
                borderWidth: "2px",
                borderRadius: 0,
                borderImageSlice: "1",
                borderStyle: "solid",
              },
              m: "10px",
            }}
          />
          <Tab
            label={
              <Typography
                sx={{
                  ...(value === 2
                    ? {
                        color: "#fff",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }
                    : {
                        background:
                          "linear-gradient(to right,  #af272c, #1f1f1f)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "all ease-in-out 0.4s",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }),
                }}
              >
                {t("loft")}
              </Typography>
            }
            {...a11yProps(2)}
            variant="outlined"
            sx={{
              ...(value == 2
                ? {
                    backgroundImage: `linear-gradient(to right, #3A3A3AE5, #8C0014  )`,
                  }
                : ""),
              borderImage: "linear-gradient(#af272c 0%,#000 100%)30 ",
              borderWidth: "2px",
              borderStyle: "solid",
              borderImageSlice: "1",
              borderRadius: 0,
              textTransform: "capitalize",

              transition: "all ease-in-out 0.4s",
              "&:hover": {
                borderImage: "linear-gradient(#8C0014 0%,#3A3A3A 100%)30 ",
                borderWidth: "2px",
                borderRadius: 0,
                borderImageSlice: "1",
                borderStyle: "solid",
              },
              m: "10px",
            }}
          />
          <Tab
            label={
              <Typography
                sx={{
                  ...(value === 3
                    ? {
                        color: "#fff",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }
                    : {
                        background:
                          "linear-gradient(to right,  #af272c, #1f1f1f)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "all ease-in-out 0.4s",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                      }),
                }}
              >
                {t("modern")}
              </Typography>
            }
            {...a11yProps(3)}
            variant="outlined"
            sx={{
              ...(value == 3
                ? {
                    backgroundImage: `linear-gradient(to right, #3A3A3AE5, #8C0014  )`,
                  }
                : ""),
              borderImage: "linear-gradient(#af272c 0%,#000 100%)30 ",
              borderWidth: "2px",
              borderStyle: "solid",
              borderImageSlice: "1",
              borderRadius: 0,
              textTransform: "capitalize",

              transition: "all ease-in-out 0.4s",
              "&:hover": {
                borderImage: "linear-gradient(#8C0014 0%,#3A3A3A 100%)30 ",
                borderWidth: "2px",
                borderRadius: 0,
                borderImageSlice: "1",
                borderStyle: "solid",
              },
              m: "10px",
            }}
          />
        </Tabs>
      </Stack>
      <CustomTabPanel value={value} index={1}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          spacing={2}
          minHeight={600}
        >
          <Stack
            maxWidth={{ lg: 500, md: 400, sm: 300, xs: "100%" }}
            maxHeight={600}
          >
            <Img
              src="/images/neoClassics/neo (1).png"
              style={{ width: "auto", height: "auto" }}
              alt=""
            />
          </Stack>
          <Stack
            spacing={3}
            width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
          >
            <Typography
              fontFamily="Playfair Display"
              fontWeight={600}
              fontSize={22}
              lineHeight="30px"
              color="#3A3A3A"
              textAlign={{
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
            >
              {t("neoClassicalKtichen")}
            </Typography>
            <Typography color="#858585" fontFamily="Montserrat" fontSize={18}>
              {t("neoClassicalKtichenDesc")}
            </Typography>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Swiper
                slidesPerView={isMobile ? 1 : 2.5}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                style={{
                  width: "100%",
                  height: "auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiperNextButton"
              >
                {neoSwiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Stack
                      maxWidth={{ lg: 280, md: 210, sm: 260, xs: "100%" }}
                      maxHeight={{ lg: 280, md: 210, sm: 350, xs: "100%" }}
                    >
                      <Img
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt=""
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          minHeight={600}
          spacing={2}
        >
          <Stack
            maxWidth={{ lg: 500, md: 400, sm: 300, xs: "100%" }}
            maxHeight={600}
          >
            <Img
              src="/images/loft/loft (1).png"
              style={{ width: "auto", height: "auto" }}
              alt=""
            />
          </Stack>
          <Stack
            spacing={3}
            width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
          >
            <Typography
              fontFamily="Playfair Display"
              fontWeight={600}
              fontSize={22}
              lineHeight="30px"
              color="#3A3A3A"
              textAlign={{
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
            >
              {t("loftStyle")}
            </Typography>
            <Typography color="#858585" fontFamily="Montserrat" fontSize={18}>
              {t("loftStyleDesc")}
            </Typography>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Swiper
                slidesPerView={isMobile ? 1 : 2.5}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                style={{
                  width: "100%",
                  height: "auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiperNextButton"
              >
                {loftSwiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Stack
                      maxWidth={{ lg: 280, md: 210, sm: 260, xs: "100%" }}
                      maxHeight={{ lg: 280, md: 210, sm: 350, xs: "100%" }}
                    >
                      <Img
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt=""
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={0}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          minHeight={600}
          spacing={2}
        >
          <Stack
            maxWidth={{ lg: 500, md: 400, sm: 300, xs: "100%" }}
            maxHeight={600}
          >
            <Img
              src="/images/sowr/sowr (1).png"
              style={{ width: "auto", height: "auto" }}
              alt=""
            />
          </Stack>
          <Stack
            spacing={3}
            width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
          >
            <Typography
              fontFamily="Playfair Display"
              fontWeight={600}
              fontSize={22}
              lineHeight="30px"
              color="#3A3A3A"
              textAlign={{
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
            >
              {t("classicKitchen")}
            </Typography>
            <Typography color="#858585" fontFamily="Montserrat" fontSize={18}>
              {t("classicKitchenDesc")}
            </Typography>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Swiper
                slidesPerView={isMobile ? 1 : 2.5}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                style={{
                  width: "100%",
                  height: "auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiperNextButton"
              >
                {sowrSwiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Stack
                      maxWidth={{ lg: 280, md: 210, sm: 260, xs: "100%" }}
                      maxHeight={{ lg: 280, md: 210, sm: 350, xs: "100%" }}
                    >
                      <Img
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt=""
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          minHeight={600}
          spacing={2}
        >
          <Stack
            maxWidth={{ lg: 500, md: 400, sm: 300, xs: "100%" }}
            maxHeight={600}
          >
            <Img
              src="/images/modern/Rectangle 9.png"
              style={{ width: "auto", height: "auto" }}
              alt=""
            />
          </Stack>
          <Stack
            spacing={3}
            width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
          >
            <Typography
              fontFamily="Playfair Display"
              fontWeight={600}
              fontSize={22}
              lineHeight="30px"
              color="#3A3A3A"
              textAlign={{
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
            >
              {t("modernStyle")}
            </Typography>
            <Typography color="#858585" fontFamily="Montserrat" fontSize={18}>
              {t("modernStyleDesc")}
            </Typography>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Swiper
                slidesPerView={isMobile ? 1 : 2.5}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                style={{
                  width: "100%",
                  height: "auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiperNextButton"
              >
                {modernSwiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Stack
                      maxWidth={{ lg: 280, md: 210, sm: 260, xs: "100%" }}
                      maxHeight={{ lg: 280, md: 210, sm: 350, xs: "100%" }}
                    >
                      <Img
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt=""
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>
    </Stack>
  );
};

export default TabButtons;
