import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-8e70a.cloudfunctions.net/api',
    // baseURL: 'http://localhost:5001/clone-8e70a/us-central1/api', //Test on localhost
});

export default instance;
