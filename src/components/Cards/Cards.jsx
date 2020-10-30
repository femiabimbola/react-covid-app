import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css'

const Cards = ({confirmed, recovered, deaths, lastUpdate }) => {
  if(!confirmed){
    return 'Loaaading......'
  }
  return (
        <div className = {styles.container}>
          <Grid container spacing={3} justify='center'>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Infected </Typography>
                <Typography variant='h5'> {confirmed.value} </Typography>
                <Typography colour="textSecondary"> The real date </Typography>
                <Typography variant="body2"> Number of active cases of Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                <Typography variant='h5'> {recovered.value} </Typography>
                <Typography colour="textSecondary"> The real date </Typography>
                <Typography variant="body2"> Number of recoveries from Covid19 </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                <Typography variant='h5'> T{deaths.value} </Typography>
                <Typography colour="textSecondary"> The real date </Typography>
                <Typography variant="body2"> Number of deaths  caused by Covid19 </Typography>
              </CardContent>
            </Grid>
          </Grid>

        </div>
    )
}

export default Cards;