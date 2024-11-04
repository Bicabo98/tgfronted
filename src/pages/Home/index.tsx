import './index.scss';
import { FC, useEffect, useRef, useState, useCallback } from "react";
import { Toast } from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { userCheckReq, bindWalletReq } from "@/api/common";
import { initUtils, useHapticFeedback } from '@telegram-apps/sdk-react';
import { setUserInfoAction } from "@/redux/slices/userSlice";
import { useTonWallet, useTonConnectModal, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useAdsgram } from '@/hooks/useAdsgram';
import { callBackendAPI, getHallCashGameList } from '@/utils/gameConfig';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import EventBus from '@/utils/eventBus';

export default function Home() {
  const navigate = useNavigate()
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]); // save join room value
  const [recentGame, setRecentGame] = useState<any>([])
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(inputValues.length).fill(null));
  const wallet = useTonWallet();
  const dispatch = useDispatch();
  const eventBus = EventBus.getInstance()

  const userInfo = useSelector((state: any) => state.user.info);

  useEffect(() => {
    if (wallet?.account) {
      bindWalletReq({ wallet: wallet?.account?.address }).then(res => {
        dispatch(setUserInfoAction(res.data));
      });
    }
  }, [wallet]);


  useEffect(() => {

    if (userInfo) {
      console.log("开始渲染home页面")
      let shouldJoinGame = localStorage.getItem("inviterJoinGame")
      if (shouldJoinGame == 'true') {
        let inviter_desk = localStorage.getItem('deskID')
        localStorage.setItem("inviterJoinGame", "false")
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

      getHallCashGameList().then(res => {
        if (res.code == 1) {
          setRecentGame(res.data.hall_desk)
        }
      })

    }

  }, [])

  //Create game
  const handleCreateGame = () => {
    navigate('/creategame')
  };

  const getInitials = (name: string) => {
    if (!name) return 'U';
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.slice(0, 2).toUpperCase();
  };


  const handleGameItemClick = (deskId: number) => {
    console.log('点击桌子的ID=', deskId);
    eventBus.emit('loading', true);
    callBackendAPI(deskId).then((res: any) => {
      if (res == -11056) {
        Toast.show({
          content: 'Table is not exist !!!',
          duration: 3000
        })
        // Join room failed
        return
      }
      const resBase64 = btoa(res);
      console.log("加入房间base64加密后的数据=", resBase64)
      localStorage.setItem('joingame_data', resBase64);
      eventBus.emit('loading', false);
      //localStorage.setItem('joingame_data', res)
      navigate('/poker')
    })
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


  // join room
  const handleInputJoinRoomChange = (index: any, value: any) => {
    if (value.length > 1) return;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    if (value && index < inputRefs.current.length - 1) {
      const prevInput = inputRefs.current[index + 1];
      if (prevInput) {
        prevInput.focus(); // focus next input box
      }

    }
    else if (index === inputRefs.current.length - 1 && newInputValues[index] !== "") {
      eventBus.emit('loading', true);
      const deskId = newInputValues.join("")
      callBackendAPI(deskId).then((res: any) => {
        setInputValues(["", "", "", "", "", ""])
        eventBus.emit('loading', false);
        if (res == -11056) {
          Toast.show({
            content: 'Table is not exist !!!',
            duration: 3000
          })
          // Join room failed
          return
        }
        const resBase64 = btoa(res);
        console.log("resBase64resBase64resBase64====", resBase64)
        localStorage.setItem('joingame_data', resBase64);

        //localStorage.setItem('joingame_data', res)
        navigate('/poker')
      })
    }
  };

  const handleKeyDown = (index: any, event: any) => {
    if (event.key === "Backspace" && inputValues[index] === "") {
      if (index > 0) {
        const prevInput = inputRefs.current[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  return (
    <main>
      <div className="home fadeIn">
        <div className="wrapper">
          <div className="first-box-container">
            {/* first box */}
            <div className={`box ${true ? 'active' : ''}`} onClick={handleCreateGame}>
              {true ? (
                <div className='first-box-title'>
                  {/* <div className='first-box-title-text'>CREATE GAME</div> */}
                  <img src="assets/common/home-create.png" alt="Score Icon" className='first-box-icon1' />
                  <img src="assets/common/home-create2.png" alt="Score Icon" className='first-box-icon2' />
                </div>
              ) : (
                <>

                </>
              )}
            </div>
          </div>
          {/* Second box */}
          <div className="box-second">
            <img src="assets/common/home-joingame.png" className='second-box-title-pic' />
            <div className="join-input-group">
              {inputValues.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputJoinRoomChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="digit-input"
                />
              ))}
            </div>
          </div>

          {recentGame.length != 0 && (
            <div className='separator'>
              <div className="vertical-line"></div>
              <div className="text">My Game</div>
            </div>
          )}

          {/* recent game */}
          {recentGame.length != 0 && (
            <div className="recent-game-list">
              {recentGame.map((item: any, index: number) => (
                <div className="game-item" key={index} onClick={() => handleGameItemClick(item.desk_id)}>
                  <div className="user-profile-icon" style={{ background: stringToColor(item.share_creator_name || 'User') }}>
                    {getInitials(item.share_creator_name || 'User')}
                  </div>
                  <div className="game-info">
                    <div className='game-info-title'>
                      <div className="roomname">{item.event_name}</div>
                    </div>
                    <div className="turn-context">
                      <img src={`/assets/common/career-turn.png`} alt='tomato' className='turn-context-icon' />
                      <div className='turn-context-text'>
                        {item.small_blind}/{(item.small_blind * 2)}
                      </div>
                    </div>
                    <div className='game-item-bottom'>
                      <div className='playercount'>
                        <img src={`/assets/common/career-playercount.png`} alt='tomato' className='icon' />
                        <div className="playercount-text">{item.players_num}</div>
                      </div>
                      <div className='owner'>
                        <img src={`/assets/common/career-owner.png`} alt='owner icon' className='icon' />
                        <div className="owner-text">
                          {item.share_creator_name.length > 6 ? item.owner.substring(0, 6) + "..." : item.share_creator_name}
                        </div>
                      </div>
                      <div className='timestamp'>
                        <img src={`/assets/common/career-time.png`} alt='tomato' className='icon' />
                        <div className="timestamp-text"> {moment(item.begin_time * 1000).format('DD/MM/YYYY HH:mm')}</div>
                      </div>
                    </div>
                  </div>
                  <div className="game-info-gametype">NLH</div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </main >
  );
}