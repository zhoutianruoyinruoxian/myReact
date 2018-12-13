import axios from 'axios';
import _ from 'lodash';
import apiList from './api.js';
import { defaultOption } from './axios-config.js';


let customGlobalParams = {};

const isJsonFormat = (method) => {
  return ['PUT', 'POST', 'PATCH'].findIndex(x => x === method.toUpperCase()) > -1;
};

let api = {};
const instance = axios.create(defaultOption);

instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Object.keys(apiList).forEach(o => {
  api[o] = (params, option) => {
    let opts = Object.assign({}, apiList[o], option);
    if (isJsonFormat(apiList[o].method)) {
      // opts.data = Object.assign({}, customGlobalParams, params);
      if (!_.isPlainObject(params)) {//判断是否为一个普通的对象（如果是文件：formData则不是普通对象），不是普通对象不能合并
        opts.data = params;
        // opts.headers = { 'content-type': 'application/json;charset=UTF-8' };//貌似没用，axios会自动加上headers
      } else {
        opts.data = Object.assign({}, params, customGlobalParams);
      }
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


