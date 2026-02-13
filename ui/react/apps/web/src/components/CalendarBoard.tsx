import { useMemo } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  type Event as RBCEvent
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";

export type CalendarInputEvent = {
  title: string;
  start: string;
  end: string;
  allDay?: boolean;
};

type CalendarBoardProps = {
  data: CalendarInputEvent[];
  title: string;
  height: number | string;
  width: number | string;
};

type CalendarEvent = RBCEvent & {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
};

const locales = {
  "en-US": enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales
});

const CalendarBoard = ({ data, title, height, width }: CalendarBoardProps) => {
  const events = useMemo<CalendarEvent[]>(
    () =>
      data.map((event) => ({
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
        allDay: event.allDay
      })),
    [data]
  );

  const firstEventDate = useMemo(
    () =>
      events.length > 0
        ? [...events].sort(
            (left, right) => left.start.getTime() - right.start.getTime()
          )[0].start
        : new Date(),
    [events]
  );

  return (
    <section className="calendar-card" style={{ width }}>
      <h2>{title}</h2>
      <div style={{ height }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          defaultDate={firstEventDate}
          popup
        />
      </div>
    </section>
  );
};

export default CalendarBoard;
