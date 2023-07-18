
import './AppStyle.css';
import Header from './components/header/Header';
import RightSideBar from './components/rightSidebar/RightSidebar';
import LeftSideBar from './components/leftSidebar/LeftSidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="subheader-container">
        <LeftSideBar />
        <div className="calendar-container">

        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
