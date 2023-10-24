import './assets/style/app.scss'
import SigninPage from './pages/SigninPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import { EventSourcing, LongPolling, WebSock } from './features/chat';
import NotFoundPage from './pages/NotFoundPage';
import DashboardLayout from './layouts/DashboardLayout';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <MainLayout />} >
          <Route index element={ <SigninPage /> } />
        </Route>
        <Route path='/chat' element={ <DashboardLayout /> } >
          <Route path='*' element = {<ChatPage><Outlet /></ChatPage>} >
            <Route index element = { <LongPolling /> } />
            <Route path='long-polling' element = { <LongPolling /> } />
            <Route path='event-sourcing' element = { <EventSourcing /> } />
            <Route path='websockets' element = { <WebSock /> } />
          </Route>
        </Route>
        <Route path = '*' element = {<NotFoundPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
