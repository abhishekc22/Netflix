import axios from "axios";
import {baseurl} from './Constants/Constant';

const instance = axios.create({
    baseURL: baseurl,

  });
export default instance