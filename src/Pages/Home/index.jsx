import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
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
import TabButtons from "./Components";
import Footer from "../Footer";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: { lg: "690px", md: "580px", sm: "480px", xs: "80%" },
    bgcolor: "background.paper",
    boxShadow: 24,
    overflow: "scroll",
    p: 2,
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Stack direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}>
        <Stack
          width={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 500, md: 400, sm: 330, xs: "45vh" }}
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
                  fontSize={63}
                  lineHeight="93px"
                  fontFamily="Montserrat"
                  color="#fff"
                  fontWeight={600}
                  textAlign={{ lg: "end", md: "end", sm: "end", xs: "center" }}
                  mr={{ lg: "20px", md: "20px", sm: "20px", xs: 0 }}
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
          height={{ lg: 500, md: 400, sm: 330, xs: "45vh" }}
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
                  fontSize={63}
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
      <Stack
        position="absolute"
        top={{ lg: "420px", md: "230px", sm: "270px", xs: "190px" }}
        left={{ lg: "20%", md: "10%", sm: "13%" }}
        p="10px"
        backgroundColor="#2506074D"
        zIndex={100}
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
      >
        <Typography
          color="#fff"
          fontSize={{ lg: 42, md: 38, sm: 25, xs: 25 }}
          fontWeight={600}
          lineHeight={{ lg: "63px", md: "63px", sm: "63px", xs: "none" }}
          textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
          fontFamily="Montserrat"
        >
          Мы воплощаем фантазии в реальность
        </Typography>
      </Stack>
      <Stack width="100%" pt="20px">
        <Divider sx={{ background: "#D0D0D0" }} />
        <Typography
          fontFamily="Montserrat"
          textAlign="center"
          fontSize={18}
          fontWeight={500}
          p="20px 10px"
          color="#858585"
        >
          Мы предлагаем вам уникальные и изысканные решения для создания вашей
          идеальной кухни и оформления интерьера
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
        width="99.5vw"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Stack>
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={500}
            textAlign={{ lg: "end", md: "end", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            Европейские кухни
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
          >
            Основа гармонии в разработке дизайн-проекта кухни — это знание
            базовых стилей, их особенностей, того, как они сочетаются между
            собой. Элегантная классика, уютный прованс, современный хай-тек,
            пышный ампир и ар-деко — выбрать оформление интерьера не так просто,
            как кажется. Чтобы упростить эту задачу, мы рассмотрим основные
            популярные стили, а фото на сайте помогут вдохновиться интересными
            идеями дизайна кухни.
          </Typography>
        </Stack>
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 360, md: 300, sm: 300, xs: 250 }}
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
        width="99.5"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 360, md: 300, sm: 300, xs: 250 }}
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
        <Stack>
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={500}
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
          >
            Вот уже более 120 лет качество техники Miele не вызывает сомнений.
            Мы тестируем свою продукцию на долгий срок службы. Именно поэтому
            потребители Miele остаются преданными своему выбору и рекомендуют
            нашу продукцию другим. Для нас не существует никаких компромиссов,
            если речь идёт о качестве и долговечности! Бытовая техника Miele
            обеспечивает превосходные результаты при минимальном потреблении
            электроэнергии. ....
          </Typography>
          <Stack width="100%" alignItems="end" mt={2}>
            <Button
              variant="outlined"
              sx={{
                color: "#8C0014",
                border: "1px solid #8C0014",
                "&:hover": { border: "1px solid #8C0014" },
                p: "10px 20px",
                fontSize: "14px",
                textTransform: "revert",
                width: "170px",
              }}
              onClick={handleOpen}
            >
              Узнать подробнeе
            </Button>
            <Stack>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
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
                    <Stack>
                      <IconButton onClick={handleClose}>
                        <img
                          src="/images/main/Vector-3.png"
                          style={{ width: 24, height: 24 }}
                          alt=""
                        />
                      </IconButton>
                    </Stack>
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
                      Вот уже более 120 лет качество техники Miele не вызывает
                      сомнений. Мы тестируем свою продукцию на долгий срок
                      службы. Именно поэтому потребители Miele остаются
                      преданными своему выбору и рекомендуют нашу продукцию
                      другим. Для нас не существует никаких компромиссов, если
                      речь идёт о качестве и долговечности! <br /> Бытовая
                      техника Miele обеспечивает превосходные результаты при
                      минимальном потреблении электроэнергии. Передовые
                      технологии с инновационными характеристиками, которые
                      предлагает исключительно Miele, гарантируют безупречный и
                      бережный уход за бельём, домом и посудой, а также
                      удовольствие от приготовления изысканных кулинарных
                      шедевров. Это подтверждается победами в многочисленных
                      тестах продукции, проводимых по всему миру.
                      <br /> Во многих странах Miele является наиболее
                      привлекательным брендом в своей отрасли. На внутреннем
                      рынке Германии Miele была признана «Лучшим брендом» среди
                      других немецких компаний. Такое признание говорит о
                      многом: покупатели продукции Miele уделяют особое внимание
                      качеству и очень требовательны к дизайну, удобству и
                      экологичности бытовой техники. Покупая технику Miele, вы
                      можете быть уверены в правильности своего выбора!
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
        width="99.5"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Stack>
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={500}
            textAlign={{ lg: "end", md: "end", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            Мягкие мебели
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
          >
            Мягкая мебель — это наш комфорт и удобство. В зависимости от
            назначения особенностей мягкой мебели, она помогает нам расслабиться
            и отдохнуть в уютной атмосфере или, напротив, сконцентрироваться и
            максимально комфортно трудиться. Диваны, кресла, пуфы призваны
            окружать нас удобством и быть нашими мягкими помощниками.
          </Typography>
        </Stack>
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 360, md: 300, sm: 300, xs: 250 }}
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
        width="99.5"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 360, md: 300, sm: 300, xs: 250 }}
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
        <Stack>
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={500}
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
            lineHeight="28px"
          >
            Немецкий бренд Loewe производит телевизоры и аудиотехнику
            премиум-класса. Каждый продукт этой марки – результат уникальных
            разработок. Алмаз, который получил великолепную огранку: долговечные
            материалы, дизайн вне времени, превосходное качество звука и
            картинки. 
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
        width="99.5"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Stack>
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={500}
            textAlign={{ lg: "end", md: "end", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            Мелкая бытовая техника
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
          >
            Мелкая бытовая техника — это компактные переносные приборы для
            приготовления пищи, ухода за вещами, а также поддержания здорового
            микроклимата в помещении. Главное отличие мелкой бытовой техники от
            крупной — габариты и мобильность.
          </Typography>
        </Stack>
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 360, md: 300, sm: 300, xs: 250 }}
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
        width="99.5"
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "center",
        }}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Stack
          maxWidth={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          height={{ lg: 360, md: 300, sm: 300, xs: 250 }}
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
        <Stack>
          <Typography
            fontFamily="Playfair Display"
            fontSize={22}
            fontWeight={500}
            textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
            mb="15px"
            color="#3A3A3A"
          >
            Гардеробная мебель
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={16}
            fontFamily="Montserrat"
            color="#858585"
            lineHeight="28px"
          >
            Гардеробная – это место, где можно аккуратно и рационально
            разместить одежду, обувь, аксессуары, при этом они всегда будут
            доступны, они не деформируются и не изветшают от неправильного
            хранения. Сегодня особенно актуальны минималистичные гардеробные,
            которые могут быть максимально функциональными.
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
      >
        Наш шоурум
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
                  opacity: "80%",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                transition: "all ease-in-out .5s ",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
              }}
            >
              <Typography
                textAlign="center"
                position="absolute"
                color="#fff"
                fontSize={24}
                fontWeight={700}
                fontFamily="Montserrat"
                top="45%"
                left="33%"
                className="text"
                sx={{
                  display: "none",
                }}
              >
                Диван
              </Typography>
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
                  opacity: "80%",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
              }}
            >
              <Typography
                textAlign="center"
                position="absolute"
                color="#fff"
                fontSize={24}
                fontWeight={700}
                fontFamily="Montserrat"
                top="45%"
                left="33%"
                className="text"
                sx={{
                  display: "none",
                }}
              >
                Диван
              </Typography>
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
                  opacity: "80%",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
              }}
            >
              <Typography
                textAlign="center"
                position="absolute"
                color="#fff"
                fontSize={24}
                fontWeight={700}
                fontFamily="Montserrat"
                top="45%"
                left="33%"
                className="text"
                sx={{
                  display: "none",
                }}
              >
                Диван
              </Typography>
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
                  opacity: "80%",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
                height: "100%",
              }}
            >
              <Typography
                textAlign="center"
                position="absolute"
                color="#fff"
                fontSize={24}
                fontWeight={700}
                fontFamily="Montserrat"
                top="45%"
                left="33%"
                className="text"
                sx={{
                  display: "none",
                }}
              >
                Диван
              </Typography>
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
                  opacity: "80%",
                },
                " &:hover .text": {
                  display: "block",
                },
                cursor: "pointer",
                pr: { lg: "10px", md: "10px", sm: "10px", xs: "0" },
                transition: "all ease-in-out .5s ",
                height: "100%",
              }}
            >
              <Typography
                textAlign="center"
                position="absolute"
                color="#fff"
                fontSize={24}
                fontWeight={700}
                fontFamily="Montserrat"
                top="45%"
                left="33%"
                className="text"
                sx={{
                  display: "none",
                }}
              >
                Диван
              </Typography>
              <img
                src="/images/main/main (12).png"
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
      >
        Реализованные проекты
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
