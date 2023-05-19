import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <CircularProgress sx={{ color: "red" }} />
    </Box>
  );
}
