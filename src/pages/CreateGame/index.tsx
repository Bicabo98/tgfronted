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


export default function CreateGame() {
  const navigate = useNavigate()
  const [isShowRules, setShowRules] = useState(false);
  const [inputRoomName, setInputRoomName] = useState("Text Room")
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false); // control show advancedsetting


  const [inputCreateGameMustValues, setInputCreateGameMustValues] = useState(["1", "2", ""]);   // Must values
  const inputCreateGameRefs = useRef({});  // save create game input

  // Ante  Auto-starddle 
  const [inputCreateGameValues, setInputCreateGameValues] = useState(["", ""]);
  const [anteMinPlacehoder, setMinAntePlacehoder] = useState(0);
  const [anteMaxPlacehoder, setMaxAntePlacehoder] = useState(100);
  const [auto_starddleMinPlacehoder, setAuto_starddleMinPlacehoder] = useState(2);
  const [auto_starddleMaxPlacehoder, setAuto_starddleMaxPlacehoder] = useState(20);

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]); // save join room value
  const inputRefs = useRef([]); // save join game input
  const wallet = useTonWallet();
  const dispatch = useDispatch();
  const utils = initUtils();

  //min buy in
  const [minBuyin, setMinBuyin] = useState(100);
  const [sliderMinMinBuyin, setSliderMinMinBuyin] = useState(100);
  const [sliderMinMaxBuyin, setSliderMinMaxBuyin] = useState(1000);
  const [stepMinBuyin, setStepMinBuyin] = useState(100);

  // max buy in
  const [maxBuyin, setMaxBuyin] = useState(200);
  const [sliderMaxMinBuyin, setSliderMaxMinBuyin] = useState(200);
  const [sliderMaxMaxBuyin, setSliderMaxMaxBuyin] = useState(2000);
  const [stepMaxBuyin, setStepMaxBuyin] = useState(200);
  const [tablePlayer, setTablePlayer] = useState(9);
  const [tableDuration, setTableDuration] = useState(6);
  const [tableAutoStart, setTableAutoStart] = useState(2);
  const [toggleStates, setToggleStates] = useState({
    standupGame: false,
    disableDecimal: false,
    insurance: false,
    runMultipleTimes: false,
    buyinApproval: false,
    voiceChatting: false,
    lookRemainingCards: false,
    rabbitHunt: false,
    postBB: false,
    autoMuck: false,
    delayedHand: false,
    gpsRestriction: false,
    randomSeat: false,
    spectatorMute: false,
    hidePlayerStats: false,
    hidePlayerProfit: false,
    minTableVpip: false,
  });

  const [activeGame, setActiveGame] = useState('NLH');  //default active NLH
  const [activeFeesMode, setActiveFeesMode] = useState('Fees-free');
  const [showMinTableVPIP, setShowMinTableVPIP] = useState(false);
  const [minTableVpipValues, setMinTableVpipValues] = useState([15, 0]);


  // minumum players
  const [minimumPlayers, setMinimumPlayers] = useState(3);
  // ante per squid(BB)
  const [antePerSquid, setAntePerSquid] = useState(1);

  const handleTableSize = (e: any) => {
    const newTableSize = parseInt(e, 10);
    if (newTableSize == 6 || newTableSize == 5 || newTableSize == 4 || newTableSize == 3 || newTableSize == 2) {
      setTableAutoStart(newTableSize);
    }
    setTablePlayer(newTableSize)
  }

  const handleAutoStart = (e: any) => {
    const newAutoStart = parseInt(e, 10);
    if (newAutoStart <= tablePlayer) {
      setTableAutoStart(newAutoStart)
    }
  }

  const getDisplayValue = () => {
    return tableAutoStart === 1 ? 'Close' : tableAutoStart;
  };

  const handleToggle = (id: any) => {
    var test = {
      ...toggleStates,
      [id]: !toggleStates[id],
    }
    console.log("toggleStates:", test)

    setToggleStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    if (id == 'minTableVpip') {
      setShowMinTableVPIP(!showMinTableVPIP)
    }
  };




  useEffect(() => {
    if (wallet?.account) {
      bindWalletReq({ wallet: wallet?.account?.address }).then(res => {
        dispatch(setUserInfoAction(res.data));
      });
    }
  }, [wallet]);

  //Create game
  const handleCreateGame = () => {

  };

  const handleAdvancedSettingsToggle = () => {
    setShowAdvancedSettings(!showAdvancedSettings);
  };

  const handleActiveClick = (game: any) => {

    //setActiveGame(game);

  };


  // active fees mod button
  const handleFeesModeClick = (item: any) => {
    setActiveFeesMode(item);

    
    
  };

  const handleMinTableVpipValue = (index: any, value: any) => {
    const newVlaues = [...minTableVpipValues];
    newVlaues[index] = value;

    setMinTableVpipValues(newVlaues);
  }


  // Create room must value
  const handleInputCreateRoomMustChange = (index: any, value: any) => {
    const newInputCreateGameValues = [...inputCreateGameMustValues];
    newInputCreateGameValues[index] = value;
    // Current is SB
    if (index == 0) {
      let newValue = value * 2;
      newInputCreateGameValues[index + 1] = newValue.toString();
      setMinBuyin(value * 100);
      setSliderMinMinBuyin(value * 100);
      setSliderMinMaxBuyin(value * 1000);
      setStepMinBuyin(value * 100);

      setMaxBuyin(value * 200);
      setSliderMaxMinBuyin(value * 200);
      setSliderMaxMaxBuyin(value * 2000);
      setStepMaxBuyin(value * 200);
      setMaxAntePlacehoder(value * 10);
      setAuto_starddleMinPlacehoder(newValue);
      setAuto_starddleMaxPlacehoder(newValue * 10);
    }
    // Current is BB
    else if (index == 1) {
      let newValue = value / 2;
      newInputCreateGameValues[index - 1] = newValue.toString();
      setMaxBuyin(newValue * 200);
      setSliderMaxMinBuyin(newValue * 200);
      setSliderMaxMaxBuyin(newValue * 2000);
      setStepMaxBuyin(newValue * 200);

      setMinBuyin(newValue * 100);
      setSliderMinMinBuyin(newValue * 100);
      setSliderMinMaxBuyin(newValue * 1000);
      setStepMinBuyin(newValue * 100);

      setMaxAntePlacehoder(newValue * 10);
      setAuto_starddleMinPlacehoder(value);
      setAuto_starddleMaxPlacehoder(value * 10);
    }

    setInputCreateGameMustValues(newInputCreateGameValues);

  }

  // SB小盲滑动条
  const handleMinBuyinChange = (e: any) => {
    const newMinBuyin = parseInt(e, 10);
    if ((newMinBuyin + maxBuyin) - (maxBuyin * 2) == 0) {
      const newMaxBuyin = Number(inputCreateGameMustValues[1]) * 100
      setMaxBuyin(newMinBuyin + newMaxBuyin);
    }
    setMinBuyin(newMinBuyin)
  };

  // BB大盲滑动条
  const handleMaxBuyinChange = (e: any) => {
    const newMaxBuyin = parseInt(e, 10);
    const BB = Number(inputCreateGameMustValues[1]) * 100
    console.log("BB = ", BB)
    if ((newMaxBuyin - minBuyin) == 0) {
      const newMinBuyin = minBuyin - BB
      setMinBuyin(newMinBuyin)
    } else if (newMaxBuyin < sliderMinMaxBuyin) {

    }
    setMaxBuyin(newMaxBuyin);
  }


  // Ante and Auto-straddle
  const handleInputCreateRoomChange = (index: any, value: any) => {
    const newInputCreateGameValues = [...inputCreateGameValues];
    // Current is Ante
    if (index == 0) {
      if (value < anteMinPlacehoder || value > anteMaxPlacehoder) {
        newInputCreateGameValues[index] = "";
        setInputCreateGameValues(newInputCreateGameValues);
        return
      }
    }
    // Current is Auto-straddle
    else if (index == 1) {
      console.log("index:", index, "value:", value)
      if (value < auto_starddleMinPlacehoder || value > auto_starddleMaxPlacehoder) {
        newInputCreateGameValues[index] = "";
        setInputCreateGameValues(newInputCreateGameValues);
        return
      }
    }
    newInputCreateGameValues[index] = value
    setInputCreateGameValues(newInputCreateGameValues);
  }
  

  return (
    <main>
      <div className="create-game fadeIn">
        <div className="wrapper">
          <div className="first-box-container">
            {/* first box */}
            <div className={`box ${true ? 'active' : ''}`}>
              <>
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

                {activeGame == 'NLH' && (
                  <div className='NLH-create-game-info'>
                    <div className='NLH-title'>MTT Name *</div>
                    <input
                      type="text"
                      placeholder="name"
                      onChange={(e) => setInputRoomName(e.target.value)}
                      className="digst-input-value"
                    />
                    <div className="first-box-input-group">
                      <div className="input-wrapper">
                        <div className='NLH-title'>SB *</div>
                        <input
                          id="sb"
                          type="text"
                          placeholder="0.05 - 1000"
                          value={inputCreateGameMustValues[0]}
                          onChange={(e) => handleInputCreateRoomMustChange(0, e.target.value)}

                          className="digst-input-value"
                        />
                      </div>
                      <div className="input-wrapper">
                        <div className='NLH-title'>BB *</div>
                        <input
                          id="bb"
                          type="text"
                          placeholder='1 SB - 10 SB'
                          value={inputCreateGameMustValues[1]}
                          onChange={(e) => handleInputCreateRoomMustChange(1, e.target.value)}

                          className="digst-input-value"
                        />
                      </div>

                    </div>
                    <div className="first-box-input-group">
                      <div className="input-wrapper">
                        <div className='NLH-title'>Ante</div>
                        <input
                          id="ante"
                          type="text"
                          placeholder={`${anteMinPlacehoder} ~ ${anteMaxPlacehoder}`}
                          value={inputCreateGameValues[0]}
                          onChange={(e) => handleInputCreateRoomChange(0, e.target.value)}
                          className="digst-input-value"
                        />
                      </div>
                      <div className="input-wrapper">
                        <div className='NLH-title'>Auto-straddle</div>
                        <input
                          id="auto-straddle"
                          type="text"
                          placeholder={`${auto_starddleMinPlacehoder} ~ ${auto_starddleMaxPlacehoder}`}
                          value={inputCreateGameValues[1]}
                          onChange={(e) => handleInputCreateRoomChange(1, e.target.value)}
                          className="digst-input-value"
                        />
                      </div>
                    </div>

                    <div className="slider-wrapper">
                      <label htmlFor="min-buyin">Minimum buy-in</label>
                      <input
                        id="min-buyin"
                        type="range"
                        min={sliderMinMinBuyin}
                        max={sliderMinMaxBuyin}
                        step={stepMinBuyin}
                        value={minBuyin}
                        onChange={(e) => handleMinBuyinChange(e.target.value)}
                        className="slider"
                        style={{ '--filled-width': `${(minBuyin / sliderMinMaxBuyin) * 100}%` }}
                      />
                      <div className="slider-values">
                        <span className="min-value">{sliderMinMinBuyin}</span>
                        <span className="current-value" style={{ left: `${(minBuyin / sliderMinMaxBuyin) * 100}%` }}>{minBuyin}</span>
                        <span className="max-value">{sliderMinMaxBuyin}</span>
                      </div>
                    </div>

                    <div className="slider-wrapper">
                      <label htmlFor="max-buyin">Maximum buy-in</label>
                      <input
                        id="max-buyin"
                        type="range"
                        min={sliderMaxMinBuyin}
                        max={sliderMaxMaxBuyin}
                        step={stepMaxBuyin}
                        value={maxBuyin}
                        onChange={(e) => handleMaxBuyinChange(e.target.value)}
                        className="slider"
                        style={{ '--filled-width': `${(maxBuyin / sliderMaxMaxBuyin) * 100}%` }}
                      />
                      <div className="slider-values">
                        <span className="min-value">{sliderMaxMinBuyin}</span>
                        <span className="current-value" style={{ left: `${(maxBuyin / sliderMaxMaxBuyin) * 100}%` }}>{maxBuyin}</span>
                        <span className="max-value">{sliderMaxMaxBuyin}</span>
                      </div>
                    </div>

                    <div className="slider-wrapper">
                      <label htmlFor="table-player">Table size (players)</label>
                      <input
                        id="table-player"
                        type="range"
                        min="2"
                        max="9"
                        step="1"
                        value={tablePlayer}
                        onChange={(e) => handleTableSize(e.target.value)}
                        className="slider"
                        style={{ '--filled-width': `${((tablePlayer - 2) / 7) * 100}%` }}
                      />
                      <div className="slider-values">
                        <span className="min-value">2</span>
                        <span className="current-value" style={{ left: `${((tablePlayer - 2) / 7) * 100}%`, top: '-55px' }}>{tablePlayer}</span>
                        <span className="max-value">9</span>
                      </div>
                    </div>


                    <div className="slider-wrapper">
                      <label htmlFor="table-duration">Duration (hours)</label>
                      <input
                        id="table-duration"
                        type="range"
                        min="0.5"
                        max="6"
                        step="0.5"
                        value={tableDuration}
                        onChange={(e) => setTableDuration(e.target.value)}
                        className="slider"
                        style={{ '--filled-width': `${((tableDuration - 0.5) / 5.5) * 100}%` }}
                      />
                      <div className="slider-values">
                        <span className="min-value">0.5</span>
                        <span className="current-value" style={{ left: `${((tableDuration - 0.5) / 5.5) * 100}%` }}>{tableDuration}</span>
                        <span className="max-value">6</span>
                      </div>
                    </div>

                    <div className="slider-wrapper">
                      <label htmlFor="table-AutoStart">Auto-start (players)</label>
                      <input
                        id="table-AutoStart"
                        type="range"
                        min="1"
                        max="6"
                        value={tableAutoStart}
                        // onChange={handleSliderChange}
                        onChange={(e) => handleAutoStart(e.target.value)}
                        className="slider"
                        style={{ '--filled-width': `${((tableAutoStart - 0.35) / 6) * 100}%` }}
                      />
                      <div className="slider-values">
                        <span className="min-value">Close</span>
                        <span className="current-value" style={{ left: `${((tableAutoStart - 0.35) / 6) * 100}%` }}>{getDisplayValue()}</span>
                        <span className="max-value">6</span>
                      </div>
                    </div>

                    <div className='separator' />

                    <div className="second-bot-input-group">
                      <div className="input-wrapper">
                        <label htmlFor="standupGame">Stand up game</label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            id="standupGame"
                            checked={toggleStates.standupGame}
                            onChange={() => handleToggle('standupGame')}
                          />
                          <span className="slider" />
                        </label>
                      </div>

                      <div className='NLH-create-game-info'>{toggleStates.standupGame && (
                        <>
                          <div className="slider-wrapper">
                            <label htmlFor="minimum_players">Minimum players</label>
                            <input
                              id="minimum_players"
                              type="range"
                              min='3'
                              max='9'
                              step='1'
                              value={minimumPlayers}
                              onChange={(e) => setMinimumPlayers(parseInt(e.target.value))}
                              className="slider"
                              style={{ '--filled-width': `${((minimumPlayers - 3) / 6) * 100}%` }}
                            />
                            <div className="slider-values">
                              <span className="min-value">3</span>
                              <span className="current-value" style={{ left: `${((minimumPlayers - 3) / 6) * 100}%` }}>{minimumPlayers}</span>
                              <span className="max-value">9</span>
                            </div>
                          </div>

                          <div className="slider-wrapper">
                            <label htmlFor="antePerSquid">Ante per squid (BB)</label>
                            <input
                              id="antePerSquid"
                              type="range"
                              min='1'
                              max='2'
                              step='1'
                              value={antePerSquid}
                              onChange={(e) => setAntePerSquid(parseInt(e.target.value))}
                              className="slider"
                              style={{ '--filled-width': `${((antePerSquid - 1) / 1) * 100}%` }}
                            />
                            <div className="slider-values">
                              <span className="min-value">1</span>
                              <span className="current-value" style={{ left: `${((antePerSquid - 1) / 1) * 100}%` }}>{antePerSquid}</span>
                              <span className="max-value">2</span>
                            </div>
                          </div>
                        </>
                      )}</div>



                      <div className='separator' />

                      <div className="input-wrapper">
                        <label htmlFor="insurance">Insurance</label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            id="insurance"
                            checked={toggleStates.insurance}
                            onChange={() => handleToggle('insurance')}
                          />
                          <span className="slider" />
                        </label>
                      </div>

                      <div className='separator' />

                      <div className="input-wrapper">
                        <label htmlFor="runMultipleTimes">Run multiple times</label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            id="runMultipleTimes"
                            checked={toggleStates.runMultipleTimes}
                            onChange={() => handleToggle('runMultipleTimes')}
                          />
                          <span className="slider" />
                        </label>
                      </div>

                      <div className='separator' />

                      <div className="input-wrapper">
                        <label htmlFor="buyinApproval">Buy-in approval</label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            id="buyinApproval"
                            checked={toggleStates.buyinApproval}
                            onChange={() => handleToggle('buyinApproval')}
                          />
                          <span className="slider" />
                        </label>
                      </div>

                      <div className='separator' />

                      <div className="input-wrapper">
                        <label htmlFor="voiceChatting">Voice chatting</label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            id="voiceChatting"
                            checked={toggleStates.voiceChatting}
                            onChange={() => handleToggle('voiceChatting')}
                          />
                          <span className="slider" />
                        </label>
                      </div>

                      <button onClick={handleAdvancedSettingsToggle} className={`advanced-settings-button ${showAdvancedSettings ? 'expanded' : ''}`} >
                        More
                      </button>


                    </div>

                    <div className="button-container">
                      {showAdvancedSettings && (
                        <>
                          <div className='separator' />
                          <div className="second-bot-input-group">

                            <div className="input-wrapper">
                              <label htmlFor="rabbitHunt">Rabbit hunt</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="rabbitHunt"
                                  checked={toggleStates.rabbitHunt}
                                  onChange={() => handleToggle('rabbitHunt')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="postBB">Post BB</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="postBB"
                                  checked={toggleStates.postBB}
                                  onChange={() => handleToggle('postBB')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="autoMuck">Auto-muck</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="autoMuck"
                                  checked={toggleStates.autoMuck}
                                  onChange={() => handleToggle('autoMuck')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="delayedHand">Delayed hand</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="delayedHand"
                                  checked={toggleStates.delayedHand}
                                  onChange={() => handleToggle('delayedHand')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="gpsRestriction">GPS/IP restriction</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="gpsRestriction"
                                  checked={toggleStates.gpsRestriction}
                                  onChange={() => handleToggle('gpsRestriction')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="ramdomSet">Random seat</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="ramdomSet"
                                  checked={toggleStates.ramdomSet}
                                  onChange={() => handleToggle('ramdomSet')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="spectatorMute">Spectator mute</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="spectatorMute"
                                  checked={toggleStates.spectatorMute}
                                  onChange={() => handleToggle('spectatorMute')}
                                />
                                <span className="slider" />
                              </label>
                            </div>


                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="hidePlayerStats">Hide player stats</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="hidePlayerStats"
                                  checked={toggleStates.hidePlayerStats}
                                  onChange={() => handleToggle('hidePlayerStats')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="hidePlayerProfit">Hide player profit</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="hidePlayerProfit"
                                  checked={toggleStates.hidePlayerProfit}
                                  onChange={() => handleToggle('hidePlayerProfit')}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='separator' />

                            <div className="input-wrapper">
                              <label htmlFor="minTableVpip">Min. Table VPIP (%)</label>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  id="minTableVpip"
                                  checked={toggleStates.minTableVpip}
                                  onChange={() => handleToggle('minTableVpip')}
                                //onChange={() => setShowMinTableVPIP(!showMinTableVPIP)}
                                />
                                <span className="slider" />
                              </label>
                            </div>

                            <div className='NLH-create-game-info'>{showMinTableVPIP && (
                              <>
                                <div className="slider-wrapper">
                                  <input
                                    id="minTableVpip1"
                                    type="range"
                                    min='15'
                                    max='70'
                                    step='1'
                                    value={minTableVpipValues[0]}
                                    onChange={(e) => handleMinTableVpipValue(0, e.target.value)}
                                    className="slider"
                                    style={{ '--filled-width': `${((minTableVpipValues[0] - 15) / 55) * 100}%` }}
                                  />
                                  <div className="slider-values">
                                    <span className="min-value">15</span>
                                    {/* <span className="current-value" style={{ left: `${(minTableVpipValues[0] / 70) * 100}%` }}>{minTableVpipValues[0]}</span> */}
                                    <span className="current-value" style={{ left: `${((minTableVpipValues[0] - 15) / 55) * 100}%` }}>{minTableVpipValues[0]}</span>
                                    <span className="max-value">70</span>
                                  </div>
                                </div>

                                <div className="slider-wrapper">
                                  <input
                                    id="minTableVpip2"
                                    type="range"
                                    min='0'
                                    max='100'
                                    step='1'
                                    value={minTableVpipValues[1]}
                                    onChange={(e) => handleMinTableVpipValue(1, e.target.value)}
                                    className="slider"
                                    style={{ '--filled-width': `${(minTableVpipValues[1] / 100) * 100}%` }}
                                  />
                                  <div className="slider-values">
                                    <span className="min-value">0</span>
                                    <span className="current-value" style={{ left: `${(minTableVpipValues[1] / 100) * 100}%` }}>{minTableVpipValues[1]}</span>
                                    <span className="max-value">100</span>
                                  </div>
                                </div>
                              </>
                            )}</div>

                            <div className='showAdvancedSettings-bottom'>
                              <div className='showAdvancedSettings-bottom-title'>Fees mode</div>
                              <div className='showAdvancedSettings-bottom-box'>
                                <div
                                  className={`showAdvancedSettings-bottom-box-item ${activeFeesMode === 'Fees-free' ? 'active' : ''}`}
                                  onClick={() => handleFeesModeClick('Fees-free')}
                                >
                                  Fees-free
                                </div>
                                <div
                                  className={`showAdvancedSettings-bottom-box-item ${activeFeesMode === 'Pot fees' ? 'active' : ''}`}
                                  onClick={() => handleFeesModeClick('Pot fees')}
                                >
                                  Pot fees
                                </div>
                                <div
                                  className={`showAdvancedSettings-bottom-box-item ${activeFeesMode === 'Profit fees' ? 'active' : ''}`}
                                  onClick={() => handleFeesModeClick('Profit fees')}
                                >
                                  Profit fees
                                </div>
                              </div>
                            </div>

                          </div>
                        </>
                      )}
                      <button onClick={handleCreateGame}>Confirm</button>
                    </div>
                  </div>
                )}


              </>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}