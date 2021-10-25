
import axios from 'axios';


const apiAxios = axios.create({
    baseURL: 'https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app',
    
})

// apiAxios.interceptors.request.use(function (config) {

//     // console.log(config);

//     return config;
// },function (err) {
//     return Promise.reject(err);
// })


apiAxios.interceptors.response.use(function (response) {
    console.log(response);

    return response;

},function (err) {
    return promise.reject(err);
})

export default apiAxios;