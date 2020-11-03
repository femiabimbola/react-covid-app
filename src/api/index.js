import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchAll = async () => { 
  try {
      const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);

      return { confirmed, recovered, deaths, lastUpdate }
  } 
  catch (error) {
      new Error( ' Check your internet connection')
  }
} 

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    console.log(data)
    return data
  }
  catch (error) {
    new Error( ' Check your internet connection')
  }
}