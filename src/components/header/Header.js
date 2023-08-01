
import './HeaderStyle.css';

import { useLayoutStore } from '../../stores/LayoutStore';

export default function Header() {

  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  //const calendarView = useLayoutStore((state) => state.calendarView);


  return (
    <div className="header">
      <div className='left-anchor'>
        <a href="/" className="site-title">J Cal</a>
        <button className="sidebar-open-btn" onClick={() => toggleSidebar()}>&#9776; Left Sidebar</button>
      </div>
      <div className='right-anchor'>
        <div className='settings'>Settings</div>
      </div>
    </div>
  );
}