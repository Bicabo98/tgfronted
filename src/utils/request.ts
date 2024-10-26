import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import { addPending, removePending } from './pending';
import { certificate } from './certificate';
import {initInitData} from '@telegram-apps/sdk';

// 处理响应
const handleResponse = (data: GlobalRequest.Response<any>) => {
  const {code} = data;
  if (code === 403) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authorization');
      window.location.href = `/`;
    }
  }
};
// 处理错误
const handleError = (res: any) => {
  console.log("res:",res)
  return res.data.code
  // if (!res) {
  //   return;
  // }
  // return res;
};


const instance = axios.create({
  baseURL: '/apis/v1/',
  timeout: 500000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});



// 添加请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    if (typeof window !== 'undefined') {
      const initData = initInitData() as any;
      // if (authorization) {
      //   config.headers = {
      //     ...config.headers,
      //     'authorization': `Bearer ${authorization}`,
      //   };
      // }
      config.headers = {
        ...config.headers,
        'TG_ID': `${initData.user.id}`,
        'TG_BEARER': `${window.Telegram.WebView.initParams.tgWebAppData}`,
        'Token_Source': 'MiniApp',
      }
      const authorization = localStorage.getItem('authorization');
      const id = localStorage.getItem('id');
      if(authorization && id) {
        config.headers = {
          ...config.headers,
          'ID':`${id}`,
          'Authorization':`Bearer ${authorization}`,
        }
      } 

    }
    removePending(config);
    addPending(config);

    return config;
  },
  (err) => {

    return Promise.reject(err);
  }
);


instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const data: GlobalRequest.Response<any> = response.data;
    removePending(response);
    handleResponse(data);
    return response;
  },
  (err) => {
    let handleerr = handleError(err.response);
    console.log("handleerr:",handleerr)
    //return Promise.reject(err);
    return handleerr;
  }
);

async function request<T>(config: AxiosRequestConfig) {
  return instance
    .request<GlobalRequest.Response<T>>(config)
    .then((res) => res.data);
}

export default request;
