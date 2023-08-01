
import "./CalendarStyle.css"

import { useLayoutStore } from "../../stores/LayoutStore";

export default function Calendar() {

  //const view = useLayoutStore((state) => state.calendarView)
  const sidebarCollapsed = useLayoutStore((state) => state.sidebarCollapsed)
  const classNameSuffix = sidebarCollapsed ? " collapsed" : ""

  return (
    <div className={"calendar" + classNameSuffix}>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    </div>
  );
}