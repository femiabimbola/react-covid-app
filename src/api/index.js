import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchAll = async () => {
try {
    const {data: { confirmed, recovered, deaths, lastupdate }} = await axios.get(url);

    return confirmed, recovered, deaths, lastupdate
   

} catch (error) {
    new Error( ' Check your internet connection')
}

} 