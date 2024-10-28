import { useEffect, useState } from 'react';
import './index.scss';
import { getCheckInRewardListReq, userCheckReq } from '@/api/common';
import { formatNumber } from '@/utils/common';
import { Button } from 'antd-mobile';
import { useDispatch } from 'react-redux';
import { setUserInfoAction } from '@/redux/slices/userSlice';
import EventBus from '@/utils/eventBus';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';


const remote_profile_url = "https://192.168.100.96:8889/images/";
const url = "https://472b-183-14-30-201.ngrok-free.app";


function AccountPage() {
  const userInfo = useSelector((state: any) => state.user.info);
  console.log("用户页面 userinfo:", userInfo)
  const dispatch = useDispatch();
  const eventBus = EventBus.getInstance();
  const navigate = useNavigate();

  const getUserInfo = async () => {
    // const res = await getAvatar(userInfo)
    // console.log("getuserinfo res:",res.code)
    // dispatch(setUserInfoAction({ ...userInfo, profilePhoto: url + '/images/' +  userInfo.id + '.jpg'}));
    //getUserProfilephoto();
    // setTimeout(() => {
    //   eventBus.emit('showCongrates', { time: 1500, visible: true });
    // }, 2000);
  };

  // 获取TG用户的头像照片
  const getUserProfilephoto = async () => {
    const profilePhotoUrl = `${remote_profile_url}${userInfo.id}.jpg`;
    try {
      const response = await axios.get(profilePhotoUrl);
      if (response.status === 200) {
        dispatch(setUserInfoAction({ ...userInfo, profilePhoto: profilePhotoUrl }));
      }
    } catch (error) {
      console.error('Error fetching profile photo:', error);

    }
  };

  const handleContinue = () => {
    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const getInitials = (name: string) => {
    if (!name) return 'U';
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.slice(0, 2).toUpperCase();
  };

  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  };

  return (
    <div className="account-container">
      <div className="profile-section">
        <div className="profile-circle">
          {userInfo?.profilePhoto ? (
            <img src={userInfo.profilePhoto} alt="User" className="profile-photo" />
          ) : (
            <div className="user-profile-icon" style={{ background: stringToColor(userInfo?.username || 'User') }}>
              {getInitials(userInfo?.username || 'User')}
            </div>
          )}
        </div>
        <div className="user-name">
          {userInfo?.username || 'User Name'}
        </div>
      </div>
      <div className="button-container-account">
        <Button className="custom-button" onClick={() => navigate('/career')}>
          <img src="/assets/common/account-career.png" alt="Left Image" className="button-image" />
            <div className='button-name'>Career</div>
          <img src="/assets/common/account-arrow.png" alt="Right Image" className="button-image" />
        </Button>
        <Button className="custom-button" onClick={() => navigate('/detail')}>
          <img src="/assets/common/account-history.png" alt="Left Image" className="button-image" />
            <div className='button-name'>History Points</div>
          <img src="/assets/common/account-arrow.png" alt="Right Image" className="button-image" />
        </Button>
      </div>
    </div>
  );
}

export default AccountPage;