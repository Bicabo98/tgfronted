import { getSubUserListReq } from "@/api/common";
import { stringToColor } from "@/utils/common";
import { initUtils } from "@telegram-apps/sdk";
import { Button, InfiniteScroll, List, Popup } from "antd-mobile";
import { useState } from "react";
import { useSelector } from "react-redux";
import LogoIcon from '@/assets/logo.jpg'
import './index.scss'
import { useNavigate } from "react-router-dom";
import { useHapticFeedback } from "@telegram-apps/sdk-react";

export default function Friends() {
  const userInfo = useSelector((state: any) => state.user.info);
  const utils = initUtils()
  const [isCopy, setIsCopy] = useState(false)
  // Telegram invite url
  const link = `https://t.me/privatepokerbot/gamepoker?startapp=${(userInfo.user_id)}`;
  var invite_text = "🔥🐹🔥 Come to Earn the Poker point here! 💸🏆💰 I've found a platform where you can play poker. Check out your Telegram profile and claim your USDT rewards🎁 now!👆🏻 ❤️  "

  const [friendsList, setFriendsList] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const hapticFeedback = useHapticFeedback()
  const [isShowInvite, setShowInvite] = useState(false)

  async function loadMore() {
    const append = await getList()
    if (page == 1) {
      if (append.length < 20) {
        setHasMore(false)
      }
      setFriendsList(append)
    } else {
      setFriendsList(val => [...val, ...append])
      setHasMore(append.length > 0)
    }
  }

  const getAllInviteScore = (data: any) => {
    var score = 0
    for (let i = 0; i <= data.length - 1; i++) {
      console.log(data[i].bonus)
      score += data[i].bonus
    }
    return score
  }

  // Get invitee list
  const getList = async () => {
    // const subUserListRes = await getSubUserListReq(userInfo.user_id)
    // if (subUserListRes.code == 200) {
    //   setTotal(subUserListRes.data.list.length)
    //   let allScore = getAllInviteScore(subUserListRes.data.list)
    //   setTotalScore(allScore)
    //   console.log("邀请res:", subUserListRes)

    //   return subUserListRes.data.list
    // }

    let testdata = {
      data: [
        { name: "test1", bonus: 100 },
        { name: "test1", bonus: 100 },
        { name: "test1", bonus: 100 },
        { name: "test1", bonus: 100 },
      ]
    }

    setTotalScore(400)
    setTotal(4)

    return testdata.data

  }
  const handleShare = () => {
    //utils.shareURL(link, invite_text)
    setShowInvite(true)
  }

  const send = () =>{  
    utils.shareURL(link, invite_text)
  }


  const copy = () => {
    hapticFeedback.notificationOccurred('success')

    const textToCopy = link + '\n' + invite_text;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 3000);
  }
  return <div className="friends fadeIn">
    <div className="friends-title">
      <img src="assets/common/invite-card.png" alt="Invite Friends Icon" className="friends-title-image" />
      <div className="friends-title-text">INVITE FRIENDS</div>
      
      {/* <div className="friends-title-text">TO</div> */}
    </div>
    <div className="friends-title3">
      <div className="friends-title2">
        <img src="assets/common/coin2x1.png" alt="Invite Friends Icon" className="friends-title2-image" />
        <div className="friends-title2-text">
          Successfully inviting one friend to join Tonpoker will earn you <span className="highlight-yellow">2000 BP</span> .
        </div>
      </div>
      <div className="friends-title2">
        <img src="assets/common/invite-profit.png" alt="Invite Friends Icon" className="friends-title2-image" />
        <div className="friends-title2-text">
          Friends you invite to join Tonpoker will contribute <span className="highlight-blue">10%</span> of their points to you.
        </div>
      </div>
      <div className="horizontal-line"></div>

      <div className="friends-context">
        <div className="friend-box left">
          <img src="assets/common/invite-frens.png" alt="Left Image" className="friend-box-image" />
          <div className="friend-box-text left">{total}</div>
        </div>
        <div className="friend-box right">
          <img src="assets/common/invite-earn.png" alt="Right Image" className="friend-box-image" />
          <div className="friend-box-text right">{totalScore}&nbsp;BP</div>
        </div>
      </div>
    </div>


    <div className="friends-list-test">
      {!total ? (
        <div className="tap-desc">Tap on the button to invite your friends</div>
      ) : (
        <>
          <div className="friends-list-header">
            <div className="friends-list-header-text">Friend name</div>
            <div className="friends-list-header-text">Earned</div>
          </div>
          <List>
            {
              friendsList.map((item, index) => {
                return <List.Item key={index}>
                  <div className="friends-list" key={index}>
                    <div className="fl-left">
                      {/* <div className="icon" style={{ background: stringToColor(item.name || 'cc') }}>
                        <span style={{ color: 'black' }}>
                          {(item.name || 'cc').slice(0, 2)}
                        </span>
                      </div> */}
                      <div className="name">{item.name || 'cc'}</div>
                    </div>
                    <div className="fl-right">
                      <>
                        +{item.bonus}&nbsp;BP
                        <img src="assets/common/coin.png" alt="Score Icon" style={{ marginLeft: '8px' }} />
                      </>
                    </div>
                  </div>
   
                </List.Item>
              })
            }
          </List>
        </>
      )}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} children={<div></div>} />
    </div>
    <div className="invite-btn">
      <Button color="default" style={{flex: 1 }} onClick={() => handleShare()}>👆🏻 Invite Frens</Button>
    </div>

    <Popup
      visible={isShowInvite}
      onMaskClick={() => {
        setShowInvite(false)
      }}

      className='popup-rule'
    >
      <div className='popup-rule-content'>
        <div className='popup-rule-title'>
          <img src='/assets/common/invite-close.png' alt='Close' className='close-svg' onClick={() => setShowInvite(false)} />
        </div>
        <div className='popup-rule-wrapper'>
          <div className='popup-custom-button' onClick={() => send()}>
            <img src='/assets/common/invite-send.png' alt='Button 1 Image' className='popup-button-image' />
           
            <div className="popyp-button-text">Send</div>
          </div>

          <div className='popup-custom-button' onClick={() => copy()}>
            {
              !isCopy ? <img src='/assets/common/invite-copy.png' alt='Button 1 Image' className='popup-button-image' /> :
              <img src='/assets/common/task-done.png' alt='Button 1 Image' className='popup-button-image' />
            }
            {
              !isCopy? <div className="popyp-button-text"> Copy Link</div> :
              <div className="popyp-button-text"> Success !</div>
            }
            
          </div>
          <div className='popup-custom-button' onClick={() => setShowInvite(false)}>
          <div className="popyp-button-text"> Close</div>
          </div>
        </div>
      </div>
    </Popup>

  </div>
}