import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Videos } from '.';
import useStore from '../store';
import { useParams } from 'react-router-dom';

export default function SearchFeed() {
  const { searchTerm } = useParams();

  const searchVideos = useStore((state) => state.searchVideos);
  const videos = useStore((state) => state.videos);

  useEffect(() => {
    searchVideos(searchTerm);
  }, [searchTerm, searchVideos]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="#ffffff" mb={3} ml={{ sm: '100px' }}>
        Search Results for <span style={{ color: '#fc1503' }}>{searchTerm}</span> videos
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />

        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
}
