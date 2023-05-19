import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";
import useStore from "../store";

export default function Videos({ videos }) {
  const isLoading = useStore(state => state.isLoading);

  if (isLoading) {
    <Loader />;
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((item, idx) => (
        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}
