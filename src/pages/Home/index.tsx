import './index.scss';
import { FC, useEffect, useRef, useState, useCallback } from "react";
import { Toast } from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { userCheckReq, bindWalletReq } from "@/api/common";
import { initUtils, useHapticFeedback } from '@telegram-apps/sdk-react';
import { setUserInfoAction } from "@/redux/slices/userSlice";
import { useTonWallet, useTonConnectModal, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useAdsgram } from '@/hooks/useAdsgram';
import { callBackendAPI } from '@/utils/gameConfig';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate()

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]); // save join room value
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(inputValues.length).fill(null));
  const wallet = useTonWallet();
  const dispatch = useDispatch();

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
      const prevInput = inputRefs.current[index + 1];
      if (prevInput) {
        prevInput.focus(); // focus next input box
      }

    }
    else if (index === inputRefs.current.length - 1 && newInputValues[index] !== "") {
      const deskId = newInputValues.join("")
      callBackendAPI(deskId).then((res: any) => {
        setInputValues(["", "", "", "", "", ""])
        if (res == -11056) {
          Toast.show({
            content: 'Table is not exist !!!',
            duration: 3000
          })
          // Join room failed
          return
        }
        localStorage.setItem('joingame_data', res)
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

        </div>
      </div>
    </main >
  );
}