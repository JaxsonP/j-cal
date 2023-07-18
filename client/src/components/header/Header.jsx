
import './HeaderStyle.css';

import { useLayoutStore } from '../../stores/LayoutStore';

export default function Header() {

  const { leftSidebarCollapsed, toggleLeftSidebar } = useLayoutStore()

  //<button className="left-sidebar-open-btn" onClick={() => toggleLeftSidebar()}>&#9776; Open Sidebar</button>
  return (
    <div className="header">
      <div className='left-anchor'>
        <a href="/" className="site-title">J Cal</a>
        <button className="left-sidebar-open-btn" onClick={() => toggleLeftSidebar()}>&#9776; Open Sidebar</button>
      </div>
      <div className='right-anchor'>
        <ul>
          <div className='settings'>Settings</div>
        </ul>
      </div>
    </div>
  );
}