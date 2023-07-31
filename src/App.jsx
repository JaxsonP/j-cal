
import './AppStyle.css';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="subheader-container">
        <Sidebar />
        <div className="calendar-container">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
