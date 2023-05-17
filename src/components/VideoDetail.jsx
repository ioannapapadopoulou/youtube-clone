import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Box, Stack, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useStore from '../store';
import Videos from './Videos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Loader from './Loader';

const VideoDetail = () => {
  const getVideoDetail = useStore((state) => state.getVideoDetail);
  const getRelatedVideos = useStore((state) => state.getRelatedVideos);
  const videoDetail = useStore((state) => state.videoDetail);
  const videos = useStore((state) => state.videos);
  const isLoading = useStore((state) => state.isLoading);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      await getVideoDetail(id);
      await getRelatedVideos(id);
    };
    fetchResults();
  }, [getRelatedVideos, getVideoDetail, id]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color="#ffffff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#ffffff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#ffffff">
                  {videoDetail?.snippet?.channelTitle}

                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
