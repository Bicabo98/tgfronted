import './index.scss';
import { FC, useEffect, useRef, useState, useCallback } from "react";
import { Modal, Popup, ProgressCircle, Swiper } from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { userCheckReq, bindWalletReq } from "@/api/common";
import { initUtils, useHapticFeedback } from '@telegram-apps/sdk-react';
import { setUserInfoAction } from "@/redux/slices/userSlice";
import { useTonWallet, useTonConnectModal, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useAdsgram } from '@/hooks/useAdsgram';
import { callBackendAPI, getPokerCustomConf } from '@/utils/gameConfig';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate()
  const [isShowRules, setShowRules] = useState(false);
  const [inputRoomName, setInputRoomName] = useState("Text Room")
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false); // control show advancedsetting
  const [isCreatingGame, setIsCreatingGame] = useState(false); //  control if create game



  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]); // save join room value
  const inputRefs = useRef([]); // save join game input
  const wallet = useTonWallet();
  const dispatch = useDispatch();
  const utils = initUtils();

  useEffect(() => {
    if (wallet?.account) {
      bindWalletReq({ wallet: wallet?.account?.address }).then(res => {
        dispatch(setUserInfoAction(res.data));
      });
    }
  }, [wallet]);

  //Create game
  const handleCreateGame = () => {
    navigate('/creategame')
  };


  // join room
  const handleInputJoinRoomChange = (index: any, value: any) => {
    if (value.length > 1) return;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // focus next input box
    }
    else if (index === inputRefs.current.length - 1 && newInputValues[index] !== "") {

      console.log("输入完成:", newInputValues);
      const deskId = newInputValues.join("")
      callBackendAPI(deskId).then((res: any) => {
        localStorage.setItem('joingame_data', res)
        navigate('/poker')
      })

      // //utils.openLink("https://www.google.com/",)
      // utils.openLink("http://192.168.100.201:23456", { tryInstantView: true, tryBrowser: false });
      // setInputValues(["", "", "", "", "", ""])
      // inputRefs.current[0].focus();

    }
  };

  const handleKeyDown = (index: any, event: any) => {
    if (event.key === "Backspace" && inputValues[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus(); // focus last input box
      }
    }
  };

  return (
    <main>
      <div className="home fadeIn">
        <div className="wrapper">
          <div className="first-box-container">
            {/* first box */}
            <div className={`box ${isCreatingGame ? 'active' : ''}`} onClick={handleCreateGame}>
              {!isCreatingGame ? (
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
          {!isCreatingGame && (
            <div className="box-second">
              <img src="assets/common/home-joingame.png" className='second-box-title-pic' />
              {/* <div className='box-second-title'>
                JOIN GAME
              </div> */}
              <div className="input-group">
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
          )}

        </div>
      </div>
    </main >
  );
}