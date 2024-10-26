import { useEffect, useState } from 'react'
import './index.scss'
import { taskListReq, handleTakReq, taskListStatusReq } from '@/api/task'
import { initUtils } from '@telegram-apps/sdk'
import { Button, Skeleton, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import BackTop from '@/components/BackTop'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import { useSelector } from 'react-redux'

function TaskPage() {
  const userInfo = useSelector((state: any) => state.user.info);
  const launchParams = useLaunchParams();
  const utils = initUtils();
  const [list, setList] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [selectedType, setSelectedType] = useState<string>('all')
  const navigate = useNavigate()

  const handleDoTask = async (item: any, index: number, cIndex: number) => {
    console.log("test do task: item:", item)
    console.log("index:", index)
    console.log("cIndex:", cIndex)

    if (item.status !== 'Done' && item.status !== 'Claim') {
      const _list = JSON.parse(JSON.stringify(list))
      _list[index][cIndex].loading = true
      setList(_list)
      // 社交任务
      if (item.mission_type == 'Social') {
        if (item.name == 'Follow hummer on X') {
          //utils.openTelegramLink('https://t.me/zheshiwodeceshifreechanel')
          utils.openLink("https://twitter.com/home?lang=zh")
        } else if (item.name == 'Subscription hummer on channel') {
          utils.openTelegramLink('https://t.me/zheshiwodeceshifreechanel')
        } 

        _list[index][cIndex].status = "Claim"
        _list[index][cIndex].loading = false

        // 向后端发送已完成但未领取
       // const res = await handleTakReq({ user_id: userInfo.user_id, name: item.name })

      } else if (item.mission_type == 'Daily') {
        if (item.id == 3) {
          //navigate('/checkIn')
        }
        _list[index][cIndex].status = "Claim"
        _list[index][cIndex].loading = false
      } else if (item.mission_type == 'Poker') {
        if (item.name == '') {

        }
      }

      // 后端做任务
      // const res = await handleTakReq(item)

      // if (res.code === 0) {
      //   const _list = JSON.parse(JSON.stringify(list))
      //   _list[index][cIndex].status = res.data.status
      //   _list[index][cIndex].loading = false
      //   setTimeout(() => {
      //     setList(_list)
      //   }, 10000)
      // } else {
      //   Toast.show({ content: res.msg, position: 'top' })
      //   const _list = JSON.parse(JSON.stringify(list))
      //   _list[index][cIndex].loading = false
      //   setList(_list)
      // }


      if (item.status == null) {
        if (localStorage.getItem('h5PcRoot') === '1' || launchParams.platform === 'tdesktop') {
          if (item.linkType === 'self') {
            navigate(item.link)
          } else {
            window.open(item.link)
          }
        } else {
          if (item.linkType.includes('telegram')) {
            utils.openLink(item.link)
          } else if (item.linkType === 'outside') {
            location.href = item.link
          } else if (item.linkType === 'self') {
            navigate(item.link)
          }
        }
      }
    } else if (item.status == 'Claim') {
      console.log("claim your reward")
    }
  }

  const groupByType = (arr: any) => {
    return Object.values(
      arr.reduce((acc: any, item: any) => {
        const type = item.mission_type
        if (!acc[type]) acc[type] = []
        acc[type].push(item)
        return acc
      }, {})
    )
  }

  const getImgSrc = (img: string) => {
    if (img.includes('Follow') || img.includes('on X')) {
      return 'twitter'
    }
    if (img.includes('Subscription')) {
      return 'channel'
    }
    if (img.includes('NLH')) {
      return 'task-game'
    }
    return 'task-game'
  }

  useEffect(() => {
    setLoading(true)

    taskListReq().then(res => {
      if (res.code == 200) {
        console.log("任务请求res:", res)
        res.data.mission_list = res.data.mission_list.map((item: any) => {
          item.loading = false;
          item.status = 'Start';
          return item;
        });

        taskListStatusReq(userInfo.user_id).then(res => {
          console.log("请求自己的任务状态：",res)
        })


        console.log("task userInfo:", userInfo)
        const list = groupByType(res.data.mission_list)
        setList(list)
        setLoading(true)
      }
    })

  }, [])

  const handleTabClick = (type: string) => {
    setSelectedType(type)
  }

  const filteredList = selectedType === 'all' ? list : list.filter((group: any) => group[0].mission_type === selectedType)

  return (
    <div className='task-page fadeIn'>
      <div className='task-title'>
        <div className='desc'>My BP</div>
        <div className='task-score-title'>
          <img src='/assets/common/coin2x1.png' alt='tomato' className='unit-img' />
          <div className="score">{userInfo.score}</div>
        </div>
      </div>
      <div className='task-tabs'>
        {list.map((group: any, index: number) => (
          <div
            key={index}
            className={`task-tab ${selectedType === group[0].mission_type ? 'active' : 'unactive'}`}
            onClick={() => handleTabClick(group[0].mission_type)}
          >
            {group[0].mission_type}({group.length})
          </div>
        ))}
      </div>
      <div className='task-list'>
        {loading ? [...Array(5)].map((_, index) => {
          return <Skeleton className='skeleton' animated key={index} />
        }) : <div></div>}
        {filteredList.map((item: any, index: number) => {
          return (
            <div className='item-wrapper' key={index}>
              {item.map((citem: any, cindex: number) => {
                return (
                  <div key={cindex} className='task-list-item'>
                    <div className='task-list-top-left-corner'>5/10</div> 
                    <div className='task-list-left'>

                      <img src={`/assets/common/${getImgSrc(citem.name)}.png`} alt='tomato' className='middle-icon' />

                      <div className='middle'>
                        <div className='middle-name'>{citem.name}</div>
                        <div className='reward'>
                          <span>+{citem?.score?.toLocaleString()}</span>
                          &nbsp;BP&nbsp;<img src='/assets/common/coin.png' alt='tomato' className='unit-img' />
                        </div>
                      </div>
                    </div>
                    <div className='task-list-right'>
                      <Button className={`task-list-right-btn ${'Start'}`} onClick={() => handleDoTask(citem, index, cindex)} loading={citem.loading}>
                        {citem.status || 'Start'}
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <BackTop scrollName='content' />
    </div>
  )
}


export default TaskPage