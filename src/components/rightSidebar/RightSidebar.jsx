import './RightSidebarStyle.css';

import { useLayoutStore } from '../../stores/LayoutStore';

export default function RightSideBar() {

  const collapsed = useLayoutStore((state) => state.rightSidebarCollapsed)
  const classNameSuffix = collapsed ? " collapsed" : ""

  return (
    <div className={"right-sidebar" + classNameSuffix}>
      <h3 className="right-sidebar-title">Right side bar</h3>
    </div>
  );
}