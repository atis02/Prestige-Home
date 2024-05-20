import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NoPath = () => {
  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        height="80vh"
      >
        <Typography
          fontFamily="Montserrat"
          fontWeight={600}
          textAlign="center"
          color="#3a3a3a"
          fontSize={35}
        >
          ERROR PATH
        </Typography>
        <Link to="/">Go to main page</Link>
      </Stack>
    </Box>
  );
};

export default NoPath;
