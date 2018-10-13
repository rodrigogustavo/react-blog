import axios from 'axios';

const instance = axios.create({
    //at this moment I could change the URL for this instance of axios
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;