
import axios from 'axios';


const apiAxios = axios.create({
    baseURL: 'https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app',
 
})

export default apiAxios;