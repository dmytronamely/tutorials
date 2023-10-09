import './assets/style/app.scss'
import EventSourcing from './components/EventSourcing';
import LongPolling from './components/LongPolling'

function App() {
  return (
    <div className="app">
      {/* <LongPolling /> */}
      <EventSourcing />
    </div>
  );
}

export default App;
