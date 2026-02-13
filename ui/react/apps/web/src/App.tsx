import { useEffect, useRef } from "react";
import type { ReactCalendarHTMLElement } from "./custom-elements";
import calendarData from "./data/calendar-data.json";
import "./react-calendar-element";

const App = () => {
  const calendarRef = useRef<ReactCalendarHTMLElement | null>(null);

  useEffect(() => {
    if (!calendarRef.current) {
      return;
    }

    calendarRef.current.data = calendarData;
    calendarRef.current.title = "Team Delivery Calendar";
    calendarRef.current.height = 620;
    calendarRef.current.width = "100%";
  }, []);

  return (
    <main className="page">
      <h1>React Calendar Web Component</h1>
      <p>
        This reusable web component is rendered as {"<react-calendar>"} and
        receives data, title, height, and width as properties.
      </p>
      <react-calendar ref={calendarRef} />
    </main>
  );
};

export default App;
