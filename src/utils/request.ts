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
      config.headers = {
        ...config.headers,
        'TG_ID': `${initData.user.id}`,
        //'TG_BEARER': `${window.Telegram.WebView.initParams.tgWebAppData}`,
        'TG_BEARER': 'query_id=AAFJOi4vAgAAAEk6Li8GtOoJ&user=%7B%22id%22%3A5086526025%2C%22first_name%22%3A%22123%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22omegachaino%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1730366671&hash=03a5a3940e58d53e9afae17b8946d7c51e808041cb7ccb2bbd5addf5899a9ce1',
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
