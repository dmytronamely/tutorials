import './assets/style/app.scss'
import EventSourcing from './components/EventSourcing';
import LongPolling from './components/LongPolling'
import WebSock from './components/WebSock'

function App() {
  return (
    <div className="app">
      <WebSock />
      {/* <LongPolling /> */}
      {/* <EventSourcing  /> */}
    </div>
  );
}

export default App;
