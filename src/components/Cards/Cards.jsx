import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed){
    return 'Loaaading......'
  }
  return (
        <div className = {styles.container}>
          <Grid container spacing={3} justify='center'>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Infected </Typography>
                <Typography variant='h5'> 
                <CountUp start={0}  end={confirmed.value} duration= {3.5} separator="," /></Typography>
                <Typography colour="textSecondary"> The real date </Typography>
                <Typography variant="body2"> Number of active cases of Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                {/*  Just check if data.recovered.value will work */}
                <Typography variant='h5'> <CountUp start={0}  end={recovered.value} duration= {3.5} separator="," /> </Typography>
                <Typography colour="textSecondary"> The real date </Typography>
                <Typography variant="body2"> Number of recoveries from Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                <Typography variant='h5'> <CountUp start={0}  end={deaths.value} duration= {3.5} separator="," /> </Typography>
                <Typography colour="textSecondary"> The real date </Typography>
                <Typography variant="body2"> Number of deaths  caused by Covid19 </Typography>
              </CardContent>
            </Grid>
          </Grid>

        </div>
    )
}

export default Cards;