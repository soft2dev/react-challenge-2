
import axios from 'axios';
export const getEntries = () => axios.get('http://localhost:8080/getEntries')