import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { bgcolor } from '@mui/system';
import { Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
function Banner() {
  const [activeStep, setActiveStep] = React.useState(0);

  const theme = useTheme();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      src: 'https://media.istockphoto.com/id/1393588419/photo/beautiful-smiling-woman-buying-products-in-supermarket.jpg?s=170667a&w=0&k=20&c=vtNc0VFqpHBjG60tsHnlu1Ljsp1rj9DRbe83oWxjd7o=',
    },
    {
      src: 'https://images.unsplash.com/photo-1528952686551-542043782ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    },
  ];
  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      // sx={{height:500,width:"100%"}
    >
      {images.map((obj) => (
        <Box
          component="img"
          sx={{
            margin: 'auto',

            height: 500,
            display: 'block',
            overflow: 'hidden',
            width: '92%',
            marginTop: 12,
            marginBottom: 3,
            padding: 0.3,
            boxShadow: 9,
            borderRadius: 3,
            [theme.breakpoints.down('md')]: {
              height: 200,
            },
          }}
          src={obj.src}
          // alt={step.label}
        />
      ))}
    </AutoPlaySwipeableViews>
  );
}

export default Banner;
