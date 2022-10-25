import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { ROUTS } from '../routs/routsList'
import { StartPage } from '../components/pages/startPage/startPage'
import { LoginPage } from '../components/pages/login/loginPage'
import { RegisterPage } from '../components/pages/register/registerPage'
import { LeaderBoardPage } from '../components/pages/leaderBoardPage/leaderBoardPage'
import { ForumPage } from '../components/pages/forumPage/forumPage'
import { ProfilePage } from '../components/pages/profile/profile'
import { GamePage } from '../components/pages/gamePage/gamePage'


export const MainRouter: React.FC = () => {


  const auth = true // mock auth


  return (

    <ErrorBoundary>
      <Routes>

        <Route path={ ROUTS.LOGIN_PAGE } element={ <LoginPage /> } />
        <Route path={ ROUTS.REGISTER_PAGE } element={ <RegisterPage /> } />
        <Route path={ ROUTS.LEADERBOARD_PAGE } element={ <LeaderBoardPage /> } />
        <Route path={ ROUTS.FORUM_PAGE } element={ <ForumPage /> } />
        <Route path={ ROUTS.PROFILE_PAGE } element={ <ProfilePage /> } />
        <Route path={ ROUTS.GAME_PAGE } element={ <GamePage /> } />
        <Route path={ ROUTS.START_PAGE } element={ <StartPage /> } />
      </Routes>
    </ErrorBoundary>

  )
}
