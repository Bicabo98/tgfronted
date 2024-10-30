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
    if (item.status !== 'Done' && item.status !== 'Claim') {
      const _list = JSON.parse(JSON.stringify(list))
      _list[index][cIndex].loading = true
      setList(_list)
      // 社交任务
      if (item.mission_type == 'Social') {
        if (item.name == 'Follow hummer on X') {
          utils.openLink("https://twitter.com/home?lang=zh")

          setTimeout(() => {
            const updatedList = [..._list];
            _list[index][cIndex].loading = false
            _list[index][cIndex].status = "Claim"
            setList(updatedList)
          }, 3000);

        } else if (item.name == 'Subscription hummer on channel' || item.name == 'Join hummer on chat group') {
          utils.openTelegramLink(JSON.parse(item.metadata).link)

          setTimeout(() => {
            const updatedList = [..._list];
            _list[index][cIndex].loading = false
            _list[index][cIndex].status = "Check"
            setList(updatedList)
          }, 3000);

          // 向后端发送已完成但未领取
          //const res = await handleTakReq({ user_id: userInfo.user_id, name: item.name })
        }


      }
      else if (item.mission_type == 'Poker') {
        if (item.name == '') {

        }
      }

    }
    else if (item.status == 'Claim') {
      // 向后端发送领取状态
      const res = await handleTakReq({ user_id: userInfo.user_id, name: item.name })
      console.log("Claim res = ", res)

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
    if (img.includes('Subscription') || (img.includes('chat group'))) {
      return 'channel'
    }
    if (img.includes('NLH')) {
      return 'task-game'
    }
    return 'task-game'
  }

  useEffect(() => {

    setLoading(false)
    if (!userInfo || userInfo.user_id === "") {
      return;
    }

    taskListReq().then(res => {
      if (res.code == 200) {
        console.log("任务请求res:", res)
        res.data.mission_list = res.data.mission_list.map((item: any) => {
          item.loading = false;
          item.status = 'Start';
          return item;
        });

        console.log("userInfo = ", userInfo)
        taskListStatusReq(userInfo.user_id).then(res => {
          console.log("请求自己的任务状态：", res)
        })
        const list = groupByType(res.data.mission_list)
        setList(list)
        //setTasks(list)
        setLoading(true)
      }
    })

  }, [userInfo])

  const handleTabClick = (type: string) => {
    setSelectedType(type)
  }

  const filteredList = selectedType === 'all' ? list : list.filter((group: any) => group[0].mission_type === selectedType)
  //const filteredTasks = selectedType === 'all' ? tasks : tasks.filter((group: any) => group[0].mission_type === selectedType)

  return (
    <div className='task-page fadeIn'>
      <div className='task-title'>
        <div className='desc'>My BP</div>
        <div className='task-score-title'>
          <img src='/assets/common/coin2x1.png' alt='tomato' className='unit-img' />
          <div className="score">{userInfo?.score?.toLocaleString()}</div>
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
                    {citem.mission_type !== 'Social' && (
                      <div className='task-list-top-left-corner'>5/10</div>
                    )}
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
                      {citem.status === 'Finished' ? (
                        <img
                          src="assets/common/task-done.png"
                          alt={`Action for ${citem.status}`} 
                          className="task-done-img"  
                         
                        />
                      ) : (
                        <Button
                          className={`task-list-right-btn ${citem.status}`}
                          onClick={() => handleDoTask(citem, index, cindex)}
                          loading={citem.loading}
                          style={{ cursor: 'pointer' }}
                        >
                          {citem.status}
                        
                        </Button>
                      )}
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