import axios from "axios";

const instance = axios.create({
    baseURL: "https://makeup-api.herokuapp.com/api/v1"
});

export default instance;