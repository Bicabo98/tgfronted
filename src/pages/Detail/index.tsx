import './index.scss'
import { InfiniteScroll, List } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { getMyScoreHistoryReq, getSubUserListReq } from '@/api/common'
import { useLocation } from 'react-router-dom'
import { stringToColor } from '@/utils/common'
import moment from 'moment'
import BackTop from '@/components/BackTop'
import { useSelector } from 'react-redux'

function FrensDetailPage() {
  const userInfo = useSelector((state: any) => state.user.info);
  const [list, setList] = useState<any>([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const myLocation = useLocation()
  const [isMyself, setIsMyself] = useState(false)
  const getList = async (mySelf: boolean) => {
    // 后端获取数据
    if (mySelf) {
      let res = await getMyScoreHistoryReq(userInfo.user_id)
      if (res.code == 200) {
        console.log("历史记录的res=",res)
        setPage((page => page + 1))
        setList(res.data.list)
        return res.data.list
      }
    }
  }

  async function loadMore() {
    const search = myLocation.search
    let isMyself = false
    let type = 'detail'
    if (search) {
      if (search.includes('myself')) {
        isMyself = true
        if (search.includes('play_game_reward')) {
          type = 'play_game_reward'
        } else {
          type = ''
        }
      }
    }
    setHasMore(false)
    // const append = await getList(isMyself)
    // console.log("append:",append)
    // if (page == 1) {
    //   if (append.length < 20) {
    //     setHasMore(false)
    //   }
    //   setList(append)
    // } else {
    //   setList((val: any) => [...val, ...append])
    //   setHasMore(append.length > 0)
    // }
  }

  const safeJSONParse = (str: any, defaultValue = {}) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return defaultValue;
    }
  };

  useEffect(() => {
    const search = myLocation.search
    setIsMyself(true)
    getList(true)

  }, [])

  return <div className="frens-detail-page">
    <div className="frens-title">
      {
        isMyself ? <span>My Scores</span> : <span>{total}&nbsp;frens</span>
      }
    </div>
    <List className='list-wrapper'>
      {
        list.map((item: any, index: number) => {
          return <List.Item key={index}>
            <div className='score-list'>
              <div className='score-detail-left'>
                <div className={item.mission_type == 'Bonus' ? 'by-user' : 'type'}>
                  {item.mission_type == 'Bonus' ? (
                    <>
                      Invite <div className="user-icon" style={{ background: stringToColor(safeJSONParse(item.description, {}).username || '') }}>
                        {(safeJSONParse(item.description, {}).username || '').slice(0, 2)}
                      </div>
                      {safeJSONParse(item.description, {}).username}
                    </>
                  ) : (
                    item.name
                  )}
                </div>
                <div className='score-detail-time'>{moment(item.create_time * 1000).format('YYYY.MM.DD HH:mm')}</div>
                {/* <div className="score-detail-time"> {moment(item.create_time * 1000).format('DD/MM/YYYY HH:mm')}</div> */}
              </div>
              <div className='score-detail-right'>
                <>
                  +{item.score.toLocaleString()} BP
                  <img src="assets/common/coin.png" alt="Score Icon" className='score-coin' />
                </>
              </div>
            </div>
          </List.Item>
        })

      }
    </List>
    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    <BackTop scrollName={'content'} />
  </div>
}

export default FrensDetailPage