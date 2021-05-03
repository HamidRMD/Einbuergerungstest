import axios from 'axios';

//return axios.get('http://localhost:5000/questions')
export const fetch310Fragen =()=>{
    return axios.get(process.env.REACT_APP_BACKENDURL + 'questions')

};