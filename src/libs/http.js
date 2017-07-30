import { invokeApig } from './awsLib';
import axios from 'axios';

export default {
    get:(url) => get(url),
    delete:axios.delete,
    put:axios.put,
    post:axios.post
};

function get(url) {
    return axios.get(url).then(r => r.data)
}