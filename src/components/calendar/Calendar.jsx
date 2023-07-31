
import "./CalendarStyle.css"

import { useLayoutStore } from "../../stores/LayoutStore";

export default function Calendar() {

  const view = useLayoutStore((state) => state.calendarView)
  const leftSidebarCollapsed = useLayoutStore((state) => state.leftSidebarCollapsed)
  const classNameSuffix = leftSidebarCollapsed ? " collapsed" : ""

  return (
    <div className={"calendar" + classNameSuffix}>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    </div>
  );
}