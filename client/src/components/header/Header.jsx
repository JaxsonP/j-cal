
import './HeaderStyle.css';


export default function Header() {

  //<button className="left-sidebar-open-btn" onClick={() => toggleLeftSidebar()}>&#9776; Open Sidebar</button>
  return (
    <div className="header">
      <div className='left-anchor'>
        <a href="/" className="site-title">J Cal</a>
        <button className="left-sidebar-open-btn">&#9776; Open Sidebar</button>
      </div>
      <div className='right-anchor'>
        <ul>
          <text className='settings'>Settings</text>
        </ul>
      </div>
    </div>
  );
}