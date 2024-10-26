import service from '@/utils/request';

export const bindReq = (data: any) => {
    return service<any>({
      url: '/invite/create',
      method: 'POST',
      data,
    });
  };