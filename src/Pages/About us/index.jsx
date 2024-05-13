import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer";

const About = () => {
  const aboutImg = [
    { img_src: "/images/main/main (1).png", title: "Флагманский шоурум" },
    { img_src: "/images/main/main (1).png", title: "Лучшая цена" },
    { img_src: "/images/main/main (1).png", title: "Высокое качество" },
    { img_src: "/images/main/main (1).png", title: "Известные бренды" },
    { img_src: "/images/main/main (1).png", title: "29 лет успешной работы" },
    { img_src: "/images/main/main (1).png", title: "Профессиональная команда" },
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
          About us
        </Typography>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
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
                fontWeight={500}
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
            Купить немецкую кухню дешевле чем в Германии — ЛЕГКО! Приезжайте
            к нам! Мы удобно расположились в центре столицы, рядом с Ленинским
            проспектом.. Приезжайте, если интересуют кухни из Германии в Москве
            под заказ! Официальный сайт лучшего шоурума с 29-летним опытом
            успешной работы.
          </Typography>
          <Typography
            color="#3A3A3A"
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
            fontWeight={500}
          >
            В салоне можно оценить новинки фабрик — партнеров, высоко
            зарекомендовавших марок. В дополнение к деталям, мы осуществляем
            продажу посетителям всего диапазона встраиваемой бытовой техники
            и дополнительных предметов комнаты.
          </Typography>
          <Typography
            color="#3A3A3A"
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 18, sm: 18, xs: 16 }}
            fontWeight={500}
          >
            Цените в немецкой кухонной мебели изысканность и оригинальное
            исполнение? Желаете совершить покупку, выгодно вкладывая средства?
            Хотите долгие годы радоваться удобству и надежностью? Кухни немецких
            производителей по выгодным ценам — правильный выбор!
          </Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center" mt="50px" mb="70px">
          <Stack>
            <Typography
              fontSize={{ lg: 22, md: 22, sm: 20, xs: 18 }}
              fontWeight={700}
              mb="30px"
              color="#3A3A3A"
              fontFamily="Montserrat"
              textAlign="center"
            >
              Приходите и покупайте дешевле, чем в Европе!!!
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ lg: 22, md: 22, sm: 20, xs: 18 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#3A3A3A"
            >
              Скидки{" "}
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  color: "#858585",
                }}
              >
                 - до 55% на экспо!
              </span>
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ lg: 22, md: 22, sm: 20, xs: 18 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#3A3A3A"
            >
              Скидки{" "}
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  color: "#858585",
                }}
              >
                 - до 35% на мебель под заказ.
              </span>
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ lg: 22, md: 22, sm: 20, xs: 18 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#3A3A3A"
            >
              Фирменная гарантия{" "}
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  color: "#858585",
                }}
              >
                 от производителей на 2 года.
              </span>
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ lg: 22, md: 22, sm: 20, xs: 18 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#3A3A3A"
            >
              Бесплатный {" "}
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  color: "#858585",
                }}
              >
                проект и сборка.
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Divider sx={{ background: "#D0D0D0", opacity: 0.3 }} />

      <Footer />
    </Box>
  );
};

export default About;
