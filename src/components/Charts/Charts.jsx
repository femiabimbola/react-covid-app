import React, {useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'

const Charts = () => {
    const [ dailyData, setDailyData ] = useState({});

    useEffect(() => {
        const dailyData = async () => await fetchDailyData();
    })
    return (
        <h3> The Charts Components </h3>
    )
}

export default Charts;