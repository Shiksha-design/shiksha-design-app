import Axios from 'axios';
import { baseURL } from '../../default-start';  // Import

const appConfig = Axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// // Request interceptor to log details
// appConfig.interceptors.request.use(request => {
//     console.log('request', request)
//     console.log('🚀 Request Details:');
//     console.log('URL:', request.baseURL ? request.baseURL + request.url : request.url);
//     console.log('Method:', request.method);
//     console.log('Headers:', request.headers);
//     console.log('Data:', request.data);
//     return request;
// }, error => {
//     // console.log('❌ Request Error:', error);
//     return Promise.reject(error);
// });

// // Response interceptor (optional)
// appConfig.interceptors.response.use(response => {
//     console.log('✅ Response:', response);
//     return response;
// }, error => {
//     console.log('❌ Response Error:', error.response);
//     return Promise.reject(error);
// });

export default appConfig;   