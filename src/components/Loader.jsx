import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress sx={{ color: 'red' }} />
    </Box>
  );
};

export default Loader;
