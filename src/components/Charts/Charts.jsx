import React, {useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from '.Chart.module.css';

const Charts = () => {
    const [ dailyData, setDailyData ] = useState([]);
 
    useEffect(() => {
        const dailyDataApi = async () => setDailyData(await fetchDailyData());
        dailyDataApi();
        console.log(dailyData)
    });

    const lineChart = (
        dailyData[0]  ?
        (<Line 
          data = {{
            labels: '',
            datasets: [{}, {}]
          }}
        />) : null
    );

    return (
        <h3> The Charts Components </h3>
    )
}

export default Charts;