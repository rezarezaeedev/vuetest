import axios from "axios";

const instance  = axios.create({
    baseURL: 'https://test4vue-default-rtdb.europe-west1.firebasedatabase.app',
    timeout:6000
})


export default instance