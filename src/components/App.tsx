import {
  bindViewportCSSVars,
  initBackButton,
  initInitData,
  initMiniApp,
  initSwipeBehavior,
  initViewport,
  retrieveLaunchParams
} from '@telegram-apps/sdk';

import { AppRoot } from '@telegram-apps/telegram-ui';
import { type FC, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { routes } from '@/navigation/routes';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { createTokenReq, getSystemReq, getTokenReq, loginReq } from '@/api/common';
import { setSystemAction, setUserInfoAction } from '@/redux/slices/userSlice';
import Congrates from './Congrates';
import EventBus from '@/utils/eventBus';
import Loading from './Loading';
import PriceComp from './Price';
import { signinReq, updateSigninReq } from '@/api/signin';
import { bindReq } from '@/api/bind';
import { callBackendAPI, getPokerCustomConf, getRequestData } from '@/utils/gameConfig';

import CryptoJS from "crypto-js"
import { Toast } from 'antd-mobile';

export const App: FC = () => {
  const [backButton] = initBackButton()
  const [swipeBehavior] = initSwipeBehavior();
  const [viewport] = initViewport();
  const [miniApp] = initMiniApp()
  const launchParams = retrieveLaunchParams()
  const userInfo = useSelector((state: any) => state.user.info);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isShowCongrates, setShowCongrates] = useState(false)
  const [showTime, setShowTime] = useState(1500)
  const eventBus = EventBus.getInstance()
  const [loading, setLoading] = useState(true)


  const login = async () => {
    setLoading(true)
    //let test = await callBackendAPI()
    // 测试签到页面
    //navigate('/checkIn')

    try {
      const initData = initInitData() as any;
      let resArray: any;
      if (initData && initData.user && initData.user.id) {
        const user = initData.initData.user
        //const data = { ...initData.initData, ...user }
        let inviter_code = 0;
        let inviter_desk = 0;
        let shouldJoinGame = false;
        console.log("App.tsx:", initData.initData)
        console.log("initData.user:", initData)
        console.log("telegram initdata:", window.Telegram.WebView.initParams.tgWebAppData)
        console.log("startParam=", initData.initData.startParam)
        if (initData.initData.startParam != "" && initData.initData.startParam != undefined) {
          if (initData.initData.startParam.includes("deskID")) {
            console.log("邀请链接包含桌子ID")
            const inviterDeskMatch = initData.initData.startParam.match(/deskID=(\d+)/);
            inviter_desk = inviterDeskMatch ? inviterDeskMatch[1] : 0
            const inviterCodeMatch = initData.initData.startParam.match(/inviterCode=(\d+)/);
            inviter_code = inviterCodeMatch ? inviterCodeMatch[1] : 0;
            console.log("邀请桌ID=", inviter_desk)
            shouldJoinGame = true
          } else {
            inviter_code = initData.initData.startParam
          }
        }

        resArray = await (createTokenReq(initData.user, inviter_code))

        console.log("resArray:", resArray)
        if (resArray.code == 200) {
          loginSuccessful(resArray, initData, shouldJoinGame, inviter_desk)
        }
        // else if (resArray == undefined) {
        //   console.log("enter here")
        //   let getReq = await getTokenReq(initData.user.id)
        //   if (getReq.code == 200) {
        //     loginSuccessful(getReq, initData,shouldJoinGame,inviter_desk)
        //   }
        // }
        // else {
        //   console.log("enter here 2")
        //   let getReq = await getTokenReq(initData.user.id)
        //   if (getReq.code == 200) {
        //     loginSuccessful(getReq, initData,shouldJoinGame,inviter_desk)
        //   }
        // }
      }
      setLoading(false)
    } catch (e) {
      //  应该显示网页错误或者404页面
      console.log("抛出异常", e)
      setLoading(false)

    }
  }


  const loginSuccessful = async (res: any, initData: any, shouldJoinGame: boolean, inviter_desk: number) => {

    localStorage.setItem('authorization', res.data.token)
    localStorage.setItem('id', res.data.user_id)
    localStorage.setItem('server_info', JSON.stringify(res.data.server_info))
    console.log("loginSuccessful = ", res)
    localStorage.setItem('invite_url', res.data.invite_url)

    let loginRes = await loginReq(res.data.user_id)
    //let test = await getPokerCustomConf()
    if (loginRes.code == 200) {
      // check sign in
      console.log("loginRes:", loginRes)
      let signRes = await signinReq(res.data.user_id)
      if (signRes.code == 200) {
        console.log("signRes:", signRes)

        if (!signRes.data.sign_in) {
          // Today not sign in,update user sign in
          let data: any = {
            user_id: res.data.user_id,
            username: loginRes.data.username,
            score: loginRes.data.score,
          }
          localStorage.setItem('userinfo', data)
          let mergedData = {
            ...res.data,
            ...data,
            ...signRes.data,
          };
          localStorage.setItem('deskID', inviter_desk.toString())
          localStorage.setItem('inviterJoinGame', "true")
          dispatch(setUserInfoAction(mergedData))
          console.log("渲染setuserinfoaction加载完成")

        } else {
          // Dont show checkIn page
          let mergedData = {
            ...loginRes.data,
            user_id: res.data.user_id,
            sign_in: signRes.data.sign_in,
          }
          // If shouldJoinGame is true
          if (shouldJoinGame) {
            console.log("邀请桌子=", inviter_desk)
            eventBus.emit('loading', true);
            callBackendAPI(inviter_desk).then((res: any) => {
              if (res == -11056) {
                eventBus.emit('loading', false);
                Toast.show({
                  content: 'Table is not exist !!!',
                  duration: 3000
                })
                // Join room failed
                return
              }
              const resBase64 = btoa(res);
              console.log("从邀请链接加入房间base64加密后的数据=", resBase64)
              localStorage.setItem('joingame_data', resBase64);
              eventBus.emit('loading', false);
              navigate('/poker')
            })
          }

          dispatch(setUserInfoAction(mergedData))
        }
      }

      // binding friend
      // if (initData.initData.startParam != "" && initData.initData.startParam != undefined && initData.initData.startParam != res.data.user_id) {
      //   console.log("initData.initData.startParam=", initData.initData.startParam)
      //   let bindingReq = await bindReq({
      //     inviter: Number(initData.initData.startParam),
      //     invitee: Number(res.data.user_id)
      //   });
      //   console.log("绑定结果：", bindingReq)
      // }
    }
  }

  const expandViewPort = async () => {
    const vp = await viewport;
    if (!vp.isExpanded) {
      vp.expand(); // will expand the Mini App, if it's not
    }
    bindViewportCSSVars(vp);
  }

  useEffect(() => {
    login()
    const onMessage = ({ visible, time }: { visible: boolean, time?: number }) => {
      setShowCongrates(visible)
      setShowTime(time || 1500)
    }
    const onLoading = (flag: boolean) => {
      setLoading(flag)
    }
    eventBus.addListener('showCongrates', onMessage)
    eventBus.addListener('loading', onLoading)
  }, [])

  useEffect(() => {
    backButton.on('click', () => {
      navigate(-1)
    })
    swipeBehavior.disableVerticalSwipe();
    // const tp = initThemeParams();
    // bindThemeParamsCSSVars(tp);
    expandViewPort()
  }, [])


  useEffect(() => {
    if (Object.keys(userInfo).length > 0 && !userInfo.sign_in) {
      console.log("即将进入签到页面");
      navigate('/checkIn');
    }
  }, [userInfo, navigate]);

  return (
    <AppRoot
      appearance={miniApp.isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(launchParams.platform) ? 'ios' : 'base'}
    >
      <div className='layout'>
        {/* {
          import.meta.env.PROD ? <PriceComp /> : <div></div>
        } */}
        {/* <PriceComp /> */}
        <div className='content'>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
        <Congrates visible={isShowCongrates} time={showTime} callBack={() => setShowCongrates(false)} />
        {
          loading ? <Loading /> : null
        }
      </div>
    </AppRoot>
  );
};



