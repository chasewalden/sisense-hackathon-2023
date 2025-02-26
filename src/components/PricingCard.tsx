import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

interface PricingCardProps {
  topText: string;
  bottomText: string;
  duration: string;
  flightType: string;
  price: string | number;
  bottomDuration: string;
  bottomFlightType: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ topText, bottomText, duration, flightType, price, bottomDuration, bottomFlightType }) => {
  return (
    <Card sx={{ minWidth: 800, backgroundColor: 'white', padding: '16px' }}>
      <Grid container spacing={2} alignItems="center">
        
        {/* Image Column */}
        <Grid item style={{flexGrow: 0}}>
          <img src="/united-blue.png" width="80px" height="80px" />
        </Grid>
        
        {/* Descriptive Text Column */}
        <Grid item style={{flexGrow: 2}}>
          <Typography variant="body1" align="center">
            {topText}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {bottomText}
          </Typography>
        </Grid>
        
        {/* Flight Duration Column */}
        <Grid item style={{flexGrow: 1}}>
          <Typography variant="body1" align="center">
            {duration}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {bottomDuration}
          </Typography>
        </Grid>

        {/* Flight Type Column */}
        <Grid item style={{flexGrow: 1}}>
          <Typography variant="body1" align="center">
            {flightType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bottomFlightType}
          </Typography>
        </Grid>

        {/* Price Column */}
        <Grid item style={{flexGrow: 2}}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" component="div" fontWeight="bold">
              ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              round-trip
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default PricingCard;
