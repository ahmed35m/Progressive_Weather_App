import axios from 'axios';
const API_KEY = '000d564c7c5a854477de5ec196ea98d2'
const URL = 'https://api.openweathermap.org/data/2.5/weather'
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}