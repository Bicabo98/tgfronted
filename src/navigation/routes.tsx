
import { lazy, type ComponentType } from 'react';

const HomePage = lazy(() => import('@/pages/Home'))
const WelcomePage = lazy(() => import('@/pages/Welcome'))
const EmojiGamePage = lazy(() => import('@/pages/Emoji'))
const LeaderBoardPage = lazy(() => import('@/pages/LeaderBoard'))
const FrensPage = lazy(() => import('@/pages/Frens'))
const GamePage = lazy(() => import('@/pages/Game'))
const FallGamePage = lazy(() => import('@/pages/Fall'))
const MemoryGamePage = lazy(() => import('@/pages/Memory'))
const DetailPage = lazy(() => import('@/pages/Detail'))
const SecondPage = lazy(() => import('@/pages/Second'))
const CheckInlPage = lazy(() => import('@/pages/CheckIn'))
const GameLeaderBoardPage = lazy(() => import('@/pages/GameLeaderBoard'))
const TaskPage = lazy(() => import('@/pages/Task'))
const AccountPage = lazy(() => import('@/pages/Account'))
const CareerPage = lazy(() => import('@/pages/Career'))

const PokerPage = lazy(() => import('@/pages/Poker'))
const CreateGame = lazy(() => import('@/pages/CreateGame'))


interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: HomePage },
  { path: '/begin', Component: WelcomePage },
  { path: '/second', Component: SecondPage },
  { path: '/emoji', Component: EmojiGamePage },
  { path: '/fall', Component: FallGamePage },
  { path: '/memory', Component: MemoryGamePage },
  //{ path: '/leaderBoard', Component: LeaderBoardPage },
  { path: '/earn', Component: TaskPage },
  { path: '/gameleaderboard', Component: GameLeaderBoardPage },
  { path: '/frens', Component: FrensPage },
  { path: '/game', Component: GamePage },
  { path: '/detail', Component: DetailPage },
  { path: '/checkIn', Component: CheckInlPage },
  { path: '/account', Component: AccountPage},
  { path: '/career', Component: CareerPage},
  // { path: '/account', Component: GamePage},


  { path: '/poker', Component:PokerPage }, 
  { path : '/creategame', Component:CreateGame},

];
