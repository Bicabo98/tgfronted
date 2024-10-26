import service from '@/utils/request';

export const taskListReq = () => {
  const params = new URLSearchParams({ 
    limit: String(0), 
    page: String(0)   
  });

  return service<any>({
    url: '/mission/list',
    method: 'GET',
    params 
  });
}

export const taskListStatusReq = (userId:Number) => {
  const params = new URLSearchParams({ 
    user_id: userId.toString(),
    limit: String(0), 
    page: String(0)   
  });
  return service<any>({
    url: '/social/getMissionStatusByUser',
    method: 'GET',
    params 
  });
}


export const handleTakReq = (data: any) => {
  return service<any>({
    url: '/social/update',
    method: 'POST',
    data,
  });
};