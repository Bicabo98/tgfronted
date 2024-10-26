import service from '@/utils/request';


export const signinReq = (userId:number) => {
    const params = new URLSearchParams({ user_id: userId.toString() });
    return service<any>({
      url: `/signin/info?${params.toString()}`,
      method: 'GET',
    });
  };


export const updateSigninReq = (data:any) => {
    return service<any>({
        url: `/signin/update`,
        method: 'POST',
        data,
    });
}
  