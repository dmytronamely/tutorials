import './assets/style/app.scss'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
// Pages
import SigninPage from './pages/SigninPage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

// Features
import { EventSourcing, LongPolling, WebSock } from './features/chat';
import { AuthState } from './features/auth';

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <MainLayout />} >
            <Route index element={ <SigninPage /> } />
            <Route path ='sign-in' element={ <SigninPage /> } />
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
    </AuthState>
  );
}

export default App;
