import React, {useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.css';

const Charts = () => {
    const [ dailyData, setDailyData ] = useState([]);
 
    useEffect(() => {
        const dailyDataApi = async () => setDailyData(await fetchDailyData());
        dailyDataApi();
    });

    const lineChart = (
        dailyData[0]  ?
        (<Line 
          data = {{
            labels: dailyData(({date }) => date),
            datasets: [{
              data: dailyData(({ confirmed }) => confirmed ),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            }, {
              data: dailyData(({ deaths }) => deaths ),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true
            }]
          }}
        />) : null
    );

    return (
        <h3> The Charts Components </h3>
    )
}

export default Charts;