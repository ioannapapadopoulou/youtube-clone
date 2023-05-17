import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        boxShadow: 'none',
        borderRadius: '20px',
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />

          <Typography variant="h6">
            {channelDetail?.snippet?.title}

            <CheckCircleIcon sx={{ fontSize: '0.875rem', color: 'gray', ml: '5px' }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '0.938rem', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
