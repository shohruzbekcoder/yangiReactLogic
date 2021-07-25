import axios from "axios";

const instance = axios.create({
  baseURL: 'https://ferzu-warehouse.herokuapp.com/api/'
});

export default instance;