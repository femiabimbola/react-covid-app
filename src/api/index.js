import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchAll = async ( country) => { 
  let changeableurl = url;

  if(country){
    changeableurl = `${url}/countries/${country}`
  }

  try {
      const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableurl);

      return { confirmed, recovered, deaths, lastUpdate }
  } 
  catch (error) {
      new Error( ' Check your internet connection')
  }
} 

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((daily)=> ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }))
    return modifiedData
  }
  catch (error) {
    new Error( ' Check your internet connection');
  }
}

export const countries  = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    new Error( 'Check the internet connection')   
  }
}