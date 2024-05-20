import {
  Box,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Language() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lng")
  );
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (lng) => {
    localStorage.setItem("lng", lng);
    setSelectedLanguage(lng);
    handleClose();
  };

  const lang =
    i18n.language === "tm"
      ? {
          color: "#3a3a3a",
          backgroundColor: "#666666",
          "&:hover": { backgroundColor: "#666666" },
        }
      : {};
  const lang2 =
    i18n.language === "ru"
      ? {
          color: "#fff",
          backgroundColor: "#666666",
          "&:hover": { backgroundColor: "#666666" },
        }
      : {};
  const lang3 =
    i18n.language === "en"
      ? {
          color: "#fff",
          backgroundColor: "#666666",
          "&:hover": { backgroundColor: "#666666" },
        }
      : {};

  return (
    <Box maxWidth={70}>
      <Stack
        cursor="pointer"
        variant="text"
        direction="row"
        alignItems="center"
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          color: "#000",
          gap: { lg: "5px", md: "3px", xs: 0 },
        }}
        minHeight="32px"
      >
        {localStorage.getItem("lng") === "ru" ? (
          <Stack direction="row" spacing={1}>
            <Typography
              fontFamily="Montserrat"
              textTransform="capitalize"
              fontWeight={500}
              sx={{ ...(isMobile ? { fontSize: 15 } : { fontSize: 16 }) }}
              color="#3a3a3a"
            >
              Рус
            </Typography>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1}>
            <Typography
              fontWeight={500}
              color="#3a3a3a"
              fontFamily="Montserrat"
              textTransform="capitalize"
            >
              Eng
            </Typography>
          </Stack>
        )}
        <KeyboardArrowDownIcon
          sx={{
            color: "#3a3a3a",
            ...(open ? { transform: "rotate(180deg)" } : ""),
            width: { lg: 24, md: 20, xs: 18 },
            height: { lg: 24, md: 20, xs: 18 },
          }}
        />
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ zIndex: "100000", position: "fixed" }}
        MenuListProps={{
          "aris-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("ru")} sx={lang2}>
          <Stack direction="row" spacing={1}>
            <Typography>Русский</Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={lang3} onClick={() => handleLanguageChange("en")}>
          <Stack direction="row" spacing={1}>
            <Typography>English</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );
}
