import React from "react";
import type { CalendarInputEvent } from "./components/CalendarBoard";

export type ReactCalendarHTMLElement = HTMLElement & {
  data: CalendarInputEvent[];
  title: string;
  height: number | string;
  width: number | string;
};

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "project-content-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        title?: string;
        content?: string;
      };
      "react-calendar": React.DetailedHTMLProps<
        React.HTMLAttributes<ReactCalendarHTMLElement>,
        ReactCalendarHTMLElement
      > & {
        title?: string;
        data?: string;
        height?: string;
        width?: string;
      };
    }
  }
}
