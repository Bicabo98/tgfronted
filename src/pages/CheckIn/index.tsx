import { useEffect, useState } from 'react'
import './index.scss'
import { getCheckInRewardListReq, userCheckReq } from '@/api/common'
import { formatNumber } from '@/utils/common'
import { Button } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfoAction } from '@/redux/slices/userSlice'
import EventBus from '@/utils/eventBus'
import { useNavigate } from 'react-router-dom'
import { updateSigninReq } from '@/api/signin'

function CheckInPage() {
  const userInfo = useSelector((state: any) => state.user.info);
  const dispatch = useDispatch()
  const eventBus = EventBus.getInstance()
  const [checkObj, setCheckObj] = useState<any>()
  const [changeScale, setChangeScale] = useState(false)
  const [rewardsList, setRewardList] = useState([])
  const navigate = useNavigate()
  const checkIn = async () => {

    console.log("userInfo=",userInfo)
    const checkinRes = await updateSigninReq({ name: userInfo.username, user_id: userInfo.user_id })
    if (checkinRes.code == 200) {
      var newScore = userInfo.score + checkinRes.data.score
      let mergedData =  {
        ...userInfo,
        ...checkinRes.data,
      }
      mergedData.score = newScore
      console.log("checkin mergedData:",mergedData)
      setCheckObj(mergedData)
      
      dispatch(setUserInfoAction(mergedData))
      setTimeout(() => {
        eventBus.emit('showCongrates', { time: 3000, visible: true })
      }, 1100);
    }

      // let testdata = {
      //   continuous:3,
      //   score:1000
      // }
   
      // let mergedData =  {
      //   ...userInfo,
      //   ...testdata
      // } 
      // console.log("checkin mergedData:",mergedData)
      // setCheckObj(mergedData)
      // dispatch(setUserInfoAction(mergedData))
      // setTimeout(() => {
      //   eventBus.emit('showCongrates', { time: 3000, visible: true })
      // }, 1100);
  }

  const handleContinue = () => {
    navigate('/')
  }
  useEffect(() => {
    console.log("checkin")
    checkIn()
  }, [userInfo])


  useEffect(() => {
    setChangeScale(true)
  }, [checkObj])

  return (
    <div className='checkIn-container'>
      <div className='checkIn-first'>
        {/* <img src='/assets/common/congrate.png' alt='hooray' className='hooray' /> */}
        <div className='daily-reward'>
          <div className='day'>
            {checkObj?.continuous}
          </div>
          Days streak
        </div>
        <div className={`rewards-container ${checkObj?.score ? 'fadeIn' : ''}`}>
          +{checkObj?.score}
          <> BP</>
          <img src="assets/common/coin.png" alt="Score Icon" className='score-coin' />
        </div>
        <div className='rewards-detail'>
          <div className='rewards-detail-top'>
            <Button style={{ fontWeight: 'bold', flex: 1 }} onClick={handleContinue}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckInPage