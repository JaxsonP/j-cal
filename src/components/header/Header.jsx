
import './HeaderStyle.css';

import { useLayoutStore } from '../../stores/LayoutStore';

export default function Header() {

  const toggleLeftSidebar = useLayoutStore((state) => state.toggleLeftSidebar);
  const toggleRightSidebar = useLayoutStore((state) => state.toggleRightSidebar);
  const calendarView = useLayoutStore((state) => state.calendarView);


  //<button className="left-sidebar-open-btn" onClick={() => toggleLeftSidebar()}>&#9776; Open Sidebar</button>
  return (
    <div className="header">
      <div className='left-anchor'>
        <a href="/" className="site-title">J Cal</a>
        <button className="left-sidebar-open-btn" onClick={() => toggleLeftSidebar()}>&#9776; Left Sidebar</button>
      </div>
      <div className='right-anchor'>
        <button className="right-sidebar-open-btn" onClick={() => toggleRightSidebar()}>&#9776; Right Sidebar</button>
        <div className='calendar-view'>View:{calendarView}</div>
        <div className='settings'>Settings</div>
      </div>
    </div>
  );
}