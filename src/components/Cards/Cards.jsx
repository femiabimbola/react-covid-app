import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed){
    return 'Loaaading......'
  }
  return (
        <div className = {styles.container}>
          <Grid container spacing={1} justify='center'>

            <Grid item component={Card} xs={3} sm={3} className = {cx(styles.card, styles.infected)} >
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Infected </Typography>
                <Typography variant='h5'> 
                <CountUp start={0}  end={confirmed.value} duration= {3.5} separator="," /></Typography>
                <Typography colour="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                <Typography variant="body2"> Number of active cases of Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={3} sm={3} className = {cx(styles.card, styles.active)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Active Cases </Typography>
                <Typography variant='h5'> <CountUp start={0}  end={confirmed.value - (recovered.value + deaths.value)} duration= {3.5} separator="," /> </Typography>
                <Typography colour="textPrimary"> {new Date(lastUpdate).toDateString()} </Typography>
                <Typography variant="body2"> Number of active cases from Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}  xs={3} sm={3}  className = {cx(styles.card, styles.recovered)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                {/*  Just check if data.recovered.value will work */}
                <Typography variant='h5'> <CountUp start={0}  end={recovered.value} duration= {3.5} separator="," /> </Typography>
                <Typography colour="textPrimary"> {new Date(lastUpdate).toDateString()} </Typography>
                <Typography variant="body2"> Number of recoveries from Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={3} sm={3} className = {cx(styles.card, styles.deaths)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                <Typography variant='h5'> <CountUp start={0}  end={deaths.value} duration= {3.5} separator="," /> </Typography>
                <Typography colour="textSecondary"> {new Date(lastUpdate).toDateString()}  </Typography>
                <Typography variant="body2"> Number of deaths  caused by Covid19 </Typography>
              </CardContent>
            </Grid>
          </Grid>

        </div>
    )
}

export default Cards;