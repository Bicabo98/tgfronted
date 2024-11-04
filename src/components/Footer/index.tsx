// import './index.scss';
// import { useEffect, useState } from 'react';
// import EventBus from '@/utils/eventBus';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { initBackButton } from '@telegram-apps/sdk';

// // import GameIcon from '../../../public/assets/common/icon-game.png';

// const accountIcon = 'assets/common/icon-Account-2.svg'; 
// const frendsIcon = 'assets/common/icon-Friends-2.svg'; 
// const gameIcon = 'assets/common/icon-game-2.svg'; 
// const earnIcon = 'assets/common/icon-Ern-2.svg'; 

// export default function () {
//     const eventBus = EventBus.getInstance()
//     const [currentTab, setCurrentTab] = useState('Home')
//     const myLocation = useLocation()
//     const [isShowFooter, setShowFooter] = useState(true)
//     const [backButton] = initBackButton()
//     const navigate = useNavigate()
//     const handleClickTab = (item: any) => {
//         navigate(item.to)
//     }
//     const [menu, setMenu] = useState([
//         {
//             title: 'Game',
//             icon: gameIcon,
//             to: '/'
//         },
//         {
//             title: 'Earn',
//             icon: earnIcon,
//             to: '/earn',
//             // to:'/gameleaderboard'
//         },
//         {
//             title: 'Friends',
//             icon: frendsIcon,
//             to: '/frens'
//         },
//         {
//             title: 'Account',
//             icon: accountIcon,
//             to: '/account',
//             //to :'/poker',
//         },
//     ])
//     useEffect(() => {
//         let flag = true
//         if (myLocation.pathname) {
//             flag = menu.map((item) => { return item.to }).includes(myLocation.pathname)
//             setShowFooter(flag)
//         } else {
//             setShowFooter(true)
//         }
//         if (flag) {
//             backButton.hide()
//         } else {
//             backButton.show();
//         }
//     }, [myLocation.pathname])
//     // return <footer className="footer" style={{ display: isShowFooter ? 'block' : 'none' }}>
//     //     <div className='list'>
//     //         {
//     //             menu.map((item => {
//     //                 return <div className={`menu ${myLocation.pathname == item.to ? 'active' : ''}`} key={item.title} onClick={() => handleClickTab(item)}>
//     //                     {item.icon}
//     //                     <p>{item.title}</p>
//     //                 </div>
//     //             }))
//     //         }
//     //     </div>
//     // </footer>

//     return (  
//         <footer className="footer" style={{ display: isShowFooter ? 'block' : 'none' }}>  
//             <div className="list">  
//                 {menu.map((item) => (  
//                     <div  
//                         className={`menu ${myLocation.pathname === item.to ? 'active' : ''}`}  
//                         key={item.title}  
//                         onClick={() => handleClickTab(item)}  
//                     >  
//                         <img src={item.icon} alt={item.title} className="icon" />  
//                         <p>{item.title}</p>  
//                     </div>  
//                 ))}  
//             </div>  
//         </footer>  
//     );  

//     // return (
//     //     <footer className="footer" style={{ display: isShowFooter ? 'block' : 'none' }}>
//     //         <div className='list'>
//     //             {menu.map(item => (
//     //                 <div
//     //                     className={`menu ${myLocation.pathname === item.to ? 'active' : ''}`}
//     //                     key={item.title}
//     //                     onClick={() => handleClickTab(item)}
//     //                     style={{ display: 'flex', alignItems: 'center' }} 
//     //                 >
//     //                     <img src={item.icon} alt={item.title} style={{ width: '24px', height: '24px', marginRight: '8px' }} /> 
//     //                     <p>{item.title}</p>
//     //                 </div>
//     //             ))}
//     //         </div>
//     //     </footer>
//     // );
// }

// import './index.scss';  
// import { useEffect, useState } from 'react';  
// import EventBus from '@/utils/eventBus';  
// import { useLocation, useNavigate } from 'react-router-dom';  
// import { initBackButton } from '@telegram-apps/sdk';  
  

// const gameIcon = 'assets/comm/icon-game-2.png'; 
// const accountIcon = 'assets/comm/icon-Account-2.png';
// const frensIcon = 'assets/comm/icon-Friends-2.png'; 
// const earnIcon = 'assets/comm/icon-Earn-2.png';

// const activeGameIcon = 'assets/comm/icon-game-1.png'
// const activeAccountIcon = 'assets/comm/icon-Account-1.png'
// const activeFrensIcon = 'assets/comm/icon-Friends-1.png'
// const activeEarnIcon = 'assets/comm/icon-Earn-1.png'


  
// export default function () {  
//     const [currentTab, setCurrentTab] = useState('Home');  
//     const myLocation = useLocation();  
//     const [isShowFooter, setShowFooter] = useState(true);  
//     const [backButton] = initBackButton();  
//     const navigate = useNavigate();  
  
//     const handleClickTab = (item: { title?: string; icon?: string; to: any; }) => {  
//         navigate(item.to);  
//     };  
  
//     const menu = [  
//         {  
//             title: 'Home',  
//             icon: gameIcon, 
//             to: '/',  
//         },  
//         {  
//             title: 'Earn',  
//             icon: earnIcon, 
//             to: '/earn',  
//         },  
//         {  
//             title: 'Friends',  
//             icon: frensIcon, // 
//             to: '/frens',  
//         },  
//         {  
//             title: 'Account',  
//             icon: accountIcon, // 
//             to: '/account',  
//         },  
//     ];  
  
//     useEffect(() => {  
//         let flag = true;  
//         if (myLocation.pathname) {  
//             flag = menu.map((item) => item.to).includes(myLocation.pathname);  
//             setShowFooter(flag);  
//         } else {  
//             setShowFooter(true);  
//         }  
//         if (flag) {  
//             backButton.hide();  
//         } else {  
//             backButton.show();  
//         }  
//     }, [myLocation.pathname]);  
  
//     return (  
//         <footer className="footer" style={{ display: isShowFooter ? 'block' : 'none' }}>  
//             <div className="list">  
//                 {menu.map((item) => (  
//                     <div  
//                         className={`menu ${myLocation.pathname === item.to ? 'active' : ''}`}  
//                         key={item.title}  
//                         onClick={() => handleClickTab(item)}  
//                     >  
//                         <img src={item.icon} alt={item.title} />  
//                         <p>{item.title}</p>  
//                     </div>  
//                 ))}  
//             </div>  
//         </footer>  
//     );  
// }  
  


import './index.scss';  
import { useEffect, useState } from 'react';  
import EventBus from '@/utils/eventBus';  
import { useLocation, useNavigate } from 'react-router-dom';  
import { initBackButton } from '@telegram-apps/sdk';  
  
const gameIcon = 'assets/comm/icon-game-2.png';  
const activeGameIcon = 'assets/comm/icon-game-1.png';  
const accountIcon = 'assets/comm/icon-Account-2.png';  
const activeAccountIcon = 'assets/comm/icon-Account-1.png';  
const frensIcon = 'assets/comm/icon-Friends-2.png';  
const activeFrensIcon = 'assets/comm/icon-Friends-1.png';  
const earnIcon = 'assets/comm/icon-Earn-2.png';  
const activeEarnIcon = 'assets/comm/icon-Earn-1.png';  
  
export default function () {  
    const eventBus = EventBus.getInstance();  
    const [currentTab, setCurrentTab] = useState('/'); 
    const myLocation = useLocation();  
    const [isShowFooter, setShowFooter] = useState(true);  
    const [backButton] = initBackButton();  
    const navigate = useNavigate();  
  
    const handleClickTab = (item:any) => {  
        setCurrentTab(item.to);
        navigate(item.to);  
    };  
  
    const getActiveIcon = (to:any) => {  
        if (to === '/') return currentTab === '/' ? activeGameIcon : gameIcon;  
        if (to === '/earn') return currentTab === '/earn' ? activeEarnIcon : earnIcon;  
        if (to === '/frens') return currentTab === '/frens' ? activeFrensIcon : frensIcon;  
        if (to === '/account') return currentTab === '/account' ? activeAccountIcon : accountIcon;  
        return null; 
    };  
  
    const menu = [  
        {  
            title: 'Home',  
            to: '/',  
            className: 'home-btn', 
        },  
        {  
            title: 'Earn',  
            to: '/earn',  
            className: 'earn-btn',  
        },  
        {  
            title: 'Friends',  
            to: '/frens',  
            className: 'friends-btn',  
        },  
        {  
            title: 'Account',  
            to: '/account',  
            className: 'account-btn',  
        },  
    ];  
  
    useEffect(() => {  
        let flag = true;  
        if (myLocation.pathname) {  
            flag = menu.map((item) => item.to).includes(myLocation.pathname);  
            setShowFooter(flag);  
        } else {  
            setShowFooter(true);  
        }  
        if (flag) {  
            backButton.hide();  
        } else {  
            backButton.show();  
        }  
    }, [myLocation.pathname]);  
  
    return (  
        <footer className="footer" style={{ display: isShowFooter ? 'block' : 'none' }}>  
            <div className="list">  
                {menu.map((item) => (  
                    <div  
                        className={`menu ${item.className} ${myLocation.pathname === item.to ? 'active' : ''}`}  
                        key={item.title}  
                        onClick={() => handleClickTab(item)}  
                    >  
                        <img src={getActiveIcon(item.to)} alt={item.title} className="icon" />  
                        <p>{item.title}</p>  
                    </div>  
                ))}  
            </div>  
        </footer>  
    );  
}