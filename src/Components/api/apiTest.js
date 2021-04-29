import axios from 'axios';

export const fetchTest = () => {
    return axios.get('http://localhost:5000/questions')

};

