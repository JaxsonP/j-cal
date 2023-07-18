
import './AppStyle.css';

import Header from './components/header/Header';
import RightSideBar from './components/rightSidebar/RightSidebar';
import LeftSideBar from './components/leftSidebar/LeftSidebar';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="subheader-container">
        <LeftSideBar />
        <div className="calendar-container">
          <Calendar />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
