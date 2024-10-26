import { useEffect, useState } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { setUserInfoAction } from '@/redux/slices/userSlice';
import EventBus from '@/utils/eventBus';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';

import { InfiniteScroll, List } from 'antd-mobile';


function CareerPage() {
  const userInfo = useSelector((state: any) => state.user.info);
  console.log("careerpage:", userInfo);
  const dispatch = useDispatch();
  const eventBus = EventBus.getInstance();
  const navigate = useNavigate();
  const [list, setList] = useState<any[]>([]);
  const [careerInfo, setCareerInfo] = useState<any>(null);
  const [gameHistoryInfo, setGameHistoryInfo] = useState<any>(null);

  const [activeGame, setActiveGame] = useState('NLH');  //default active NLH

  const getUserCareerInfo = async () => {
    // 获取生涯数据
    //const careerRes = await getCareer(userInfo)
    // 获取游戏记录
    //const gameRes = await getGameHistory(userInfo)

    //测试数据
    let careerRes = {
      data: {
        playercount: 144,
        profit: 88668,
        vpip: "35.5%",
        winrate: "20%",
        pfr: "34%",
        af: "16",
      }
    }

    let gameRes = {
      data: {
        game: [
          { owner: "texttext", roomname: "私局1", playercount: 2, time: "time", result: "loss", profit: "-200", turn: 5, type: "Ring", gametype: "NLH" },
          { owner: "text1", roomname: "私局2", playercount: 2, time: "time", result: "win", profit: "+200", turn: 2, type: "Ring", gametype: "NLH" },
          { owner: "text1", roomname: "私局3", playercount: 4, time: "time", result: "win", profit: "+600", turn: 11, type: "Ring", gametype: "NLH" },
        ]
      }
    }

    setCareerInfo(careerRes.data);
    setGameHistoryInfo(gameRes.data);
  };


  const handleActiveClick = (game: any) => {
    setActiveGame(game);
  };

  // // 获取用户的生涯记录
  // const getCareer = (userInfo: any) => {
  //   return service<any>({
  //     url: '/',
  //     method: 'GET',
  //   });
  // };

  // // 获取用户的游戏记录
  // const getGameHistory = (userInfo: any) => {
  //   return service<any>({
  //     url: '/',
  //     method: 'GET',
  //   });
  // };

  const handleContinue = () => {
    navigate('/');
  };

  useEffect(() => {
    getUserCareerInfo();
  }, []);

  return (
    <div className="career-page">

      <div className="button-group">
        <button
          className={`game-button ${activeGame === 'NLH' ? 'active' : ''}`}
          onClick={() => handleActiveClick('NLH')}
        >
          NLH
        </button>
        <button
          className={`game-button ${activeGame === 'TRUCO' ? 'active' : ''}`}
          onClick={() => handleActiveClick('TRUCO')}
        >
          TRUCO
        </button>
        <button
          className={`game-button ${activeGame === 'RUMMY' ? 'active' : ''}`}
          onClick={() => handleActiveClick('RUMMY')}
        >
          RUMMY
        </button>
        <button
          className={`game-button ${activeGame === 'DOMINO' ? 'active' : ''}`}
          onClick={() => handleActiveClick('DOMINO')}
        >
          DOMINO
        </button>
      </div>

      {activeGame === 'NLH' && careerInfo && (
        <div className="info-box">
          <div className="row row-multiple-1">
            <div className="item">
              <img src={`/assets/common/career-card.png`} alt='tomato' className='row-multiple-icon' />
              <div className="label">Count:{careerInfo.playercount}</div>
            </div>
            <div className="item">
              <img src={`/assets/common/career-profit.png`} alt='tomato' className='row-multiple-icon-2' />
              <div className="label">Profit:{careerInfo.profit}</div>
            </div>
          </div>

          {/* <hr className="divider" /> */}

          <div className="row row-multiple">
            <div className="item">
              <div className="label">VPIP</div>
              <div className="label-vpip">{careerInfo.vpip}</div>
            </div>
            <div className="item">
              <div className="label">Winrate</div>
              <div className="label-winrate">{careerInfo.winrate}</div>
            </div>
            <div className="item">
              <div className="label">PFR</div>
              <div className="label-pfr">{careerInfo.pfr}</div>
            </div>
            <div className="item">
              <div className="label">AF</div>
              <div className="label-af">{careerInfo.af}</div>
            </div>
          </div>
        </div>
      )}

      <div className='separator'>
        {/* <div className="vertical-line"></div> */}
        <div className="text">Game History</div>
      </div>

      {gameHistoryInfo && (
        <div className="game-history">
          {gameHistoryInfo.game.map((item: any, index: number) => (
            <div className="game-item" key={index}>
              <div className="avatar"></div>
              <div className="game-info">
                <div className='game-info-title'>
                  <div className="roomname">{item.roomname}</div>
                  <div className="game-info-type">{item.type}</div>
                  <div className="game-info-gametype">{item.gametype}</div>
                </div>

                <div className="turn-context">
                  <img src={`/assets/common/career-turn.png`} alt='tomato' className='turn-context-icon' />
                  <div className='turn-context-text'>
                    {item.turn}
                  </div>
                </div>


                <div className='game-item-bottom'>
                  <div className='playercount'>
                    <img src={`/assets/common/career-playercount.png`} alt='tomato' className='icon' />
                    <div className="playercount-text">{item.playercount}</div>
                  </div>
                  <div className='owner'> 
                    <img src={`/assets/common/career-owner.png`} alt='owner icon' className='icon' />
                    <div className="owner-text">
                      {item.owner.length > 6 ? item.owner.substring(0, 6)+"..." : item.owner}
                    </div>
                  </div>
                  <div className='timestamp'>
                    <img src={`/assets/common/career-time.png`} alt='tomato' className='icon' />
                    <div className="timestamp-text">{item.time}</div>
                  </div>
                </div>

              </div>
              <div className={`profit ${item.result === 'win' ? 'win' : 'loss'}`}>
                {item.profit}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CareerPage;