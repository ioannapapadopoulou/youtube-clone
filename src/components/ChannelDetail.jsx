import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import useStore from "../store";
import { ChannelCard, Videos } from "./index";

const ChannelDetail = () => {
  const { id } = useParams();

  const videos = useStore(state => state.videos);
  const channelDetails = useStore(state => state.channelDetails);
  const getVideos = useStore(state => state.getVideos);
  const getChannelDetails = useStore(state => state.getChannelDetails);

  useEffect(() => {
    const fetchResults = async () => {
      await getChannelDetails(id);
      await getVideos(id);
    };

    fetchResults();
  }, [getChannelDetails, getVideos, id]);

  return (
    <>
      <Box minHeight="95vh">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,121,9,1) 23%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetails?.[0]} marginTop="-110px" />

        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />

          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
