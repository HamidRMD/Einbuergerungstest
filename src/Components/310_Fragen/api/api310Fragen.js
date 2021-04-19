import axios from 'axios';

export const fetch310Fragen =()=>{
    return axios.get('http://localhost:5000/questions')
}