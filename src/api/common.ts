import service from '@/utils/request';

export const createTokenReq = (data:any,inviter_code:any) => {
  console.log("data=",data)
  console.log("inviter_codeinviter_code===",typeof inviter_code)
  let req:any = {
    id:data.id,
    user_name:data.username,
    first_name:data.firstName,
    last_name:data.lastName,
    icon:"",
    inviter: Number(inviter_code)
  }
  return service<any>({
    url: '/user/create',
    method: 'POST',
    data:req,
  });
};

export const getTokenReq = (userId:any) => {
  const params = new URLSearchParams({ user_id: userId.toString() });
  return service<any>({
    url: `/user/getToken?${params.toString()}`,
    method: 'GET',
  });
};

// export const loginReq = (userId:number) => {
//   let data:any = {
//     user_id:userId
//   }
//   console.log("data:",data)
//   return service<any>({
//     url: '/user/getUserInfo',
//     method: 'GET',
//     data,
//   });
// };

export const loginReq = (userId:number) => {
  const params = new URLSearchParams({ user_id: userId.toString() });
  return service<any>({
    url: `/user/getUserInfo?${params.toString()}`,
    method: 'GET',
  });
};

export const updateUserReq = (data: any) => {
  return service<any>({
    url: '/user/update',
    method: 'POST',
    data,
  });
};
export const getMyScoreHistoryReq = (userId: any) => {
  const params = new URLSearchParams({ 
    user_id: userId.toString(),
    limit: String(0), 
    page: String(0)   
  });
  return service<any>({
    url: '/record/list',
    method: 'GET',
    params,
  });
};
export const getUserListReq = (params: any) => {
  return service<any>({
    url: '/user/list',
    method: 'GET',
    params,
  });
};
export const getUserGameListReq = (params: any) => {
  return service<any>({
    url: '/user/gamelist',
    method: 'GET',
    params,
  });
};

// get invite list
export const getSubUserListReq = (userId: any) => {
  const params = new URLSearchParams({ 
    inviter: userId.toString(),
    limit: String(0), 
    page: String(0)   
  });
  return service<any>({
    url: '/invite/list',
    method: 'GET',
    params,
  });
};

export const getUserInfoReq = (params: any) => {
  return service<any>({
    url: '/user/userInfo',
    method: 'GET',
    params,
  });
};

export const userCheckReq = () => {
  return service<any>({
    url: '/daily/update',
    method: 'POST',
  });
};


export const bindWalletReq = (data: any) => {
  return service<any>({
    url: '/user/bindWallet',
    method: 'POST',
    data,
  });
};

export const getCheckInRewardListReq = () => {
  return service<any>({
    url: '/daily/update',
    method: 'POST',
  });
};

export const getSystemReq = () => {
  return service<any>({
    url: '/social/update',
    method: 'POST',
  });
};


export const getPriceReq = (dev: boolean, type: string) => {
  const url = dev ? 'https://www.binance.com/api/v3/ticker' : '/binancePrice';
  return service<any>({
    url: url,
    method: 'GET',
    params: {
      symbol: type
    }
  });
}