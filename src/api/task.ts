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

export const taskListStatusReq = (userId: Number) => {
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


export const handleBotCheck = (chat_id: any, tg_id: any, user_id: any, mission_name: any,checkType:any) => {
  const params = new URLSearchParams({
    chat_id: chat_id,
    tg_id: tg_id,
    user_id: user_id,
    mission_name: mission_name,
    checkType:checkType,
  })
  return service<any>({
    url: '/bot/checked',
    method: 'GET',
    params
  });
}