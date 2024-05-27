import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const PreLoader = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        backgroundColor="#000"
        spacing={2}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            P
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            r
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            e
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            s
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            t
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            i
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            g
          </Typography>
          <Typography
            className="Loader"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            e
          </Typography>
        </Stack>
        <Stack
          height={30}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            className="Loader2"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            H
          </Typography>
          <Typography
            className="Loader2"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            o
          </Typography>
          <Typography
            className="Loader2"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            m
          </Typography>
          <Typography
            className="Loader2"
            fontSize={{ lg: 60, md: 60, sm: 50, xs: 40 }}
          >
            e
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PreLoader;
