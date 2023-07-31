
import "./CalendarStyle.css"

import { useLayoutStore } from "../../stores/LayoutStore";

export default function Calendar() {

  const view = useLayoutStore((state) => state.calendarView)

  return (
    <div className="calendar">
    </div>
  );
}