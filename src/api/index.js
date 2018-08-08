import axios from 'axios';
import apiList from './api.js';
import { defaultOption } from './axios-config.js';


let customGlobalParams = {};

const isJsonFormat = (method) => {
  return ['PUT', 'POST', 'PATCH'].findIndex(x => x === method.toUpperCase()) > -1;
};

let api = {};
const instance = axios.create(defaultOption);
Object.keys(apiList).forEach(o => {
  api[o] = (params, option) => {
    let opts = Object.assign({}, apiList[o], option);
    if (isJsonFormat(apiList[o].method)) {
      opts.data = Object.assign({}, customGlobalParams, params);
    } else {
      opts.params = Object.assign({}, customGlobalParams, params);
    }
    return instance(opts);
  };
});

export default api;


// 设置全局参数，每个请求都会带上该参数
export function setGlobalParams(params) {
  customGlobalParams = params;
}


