import axios from 'axios';

export const fetchTest = () => {
    return axios.get( process.env.REACT_APP_BACKENDURL + 'questions')

};

