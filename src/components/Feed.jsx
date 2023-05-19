import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Sidebar, Videos } from ".";
import useStore from "../store";

export default function Feed() {
  const data = useStore(state => state.data);
  const fetchFromAPI = useStore(state => state.fetchFromAPI);

  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(selectedCategory);
  }, [fetchFromAPI, selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#ffffff" }}
        >
          Copyright © 2022 Ioanna Papadopoulou
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={data} />
      </Box>
    </Stack>
  );
}
