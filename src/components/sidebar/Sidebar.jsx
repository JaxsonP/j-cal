
import './LeftSidebarStyle.css';

import { useLayoutStore } from '../../stores/LayoutStore';

export default function LeftSidebar() {

  const collapsed = useLayoutStore((state) => state.sidebarCollapsed)
  const classNameSuffix = collapsed ? " collapsed" : ""

  return (
    <div className={"left-sidebar" + classNameSuffix}>
      <h2 className="left-sidebar-title">Left side bar</h2>
      <h2>collapsed={collapsed.toString()}</h2>
    </div>
  );
}