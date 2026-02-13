import ReactDOM from "react-dom/client";
import CalendarBoard, { type CalendarInputEvent } from "./components/CalendarBoard";

type SizeValue = number | string;

class ReactCalendarElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountNode: HTMLDivElement | null = null;

  private _data: CalendarInputEvent[] = [];
  private _title = "Calendar";
  private _height: SizeValue = 620;
  private _width: SizeValue = "100%";

  static get observedAttributes() {
    return ["title", "height", "width", "data"];
  }

  connectedCallback() {
    if (!this.mountNode) {
      this.mountNode = document.createElement("div");
      this.appendChild(this.mountNode);
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(this.mountNode);
    }

    this.renderComponent();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
    this.mountNode = null;
  }

  attributeChangedCallback(name: string, _oldValue: string | null, value: string | null) {
    if (value === null) {
      return;
    }

    if (name === "title") {
      this._title = value;
    }

    if (name === "height") {
      this._height = this.parseSize(value);
    }

    if (name === "width") {
      this._width = this.parseSize(value);
    }

    if (name === "data") {
      this._data = this.parseData(value);
    }

    this.renderComponent();
  }

  get data() {
    return this._data;
  }

  set data(value: CalendarInputEvent[]) {
    this._data = Array.isArray(value) ? value : [];
    this.renderComponent();
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
    this.renderComponent();
  }

  get height() {
    return this._height;
  }

  set height(value: SizeValue) {
    this._height = value;
    this.renderComponent();
  }

  get width() {
    return this._width;
  }

  set width(value: SizeValue) {
    this._width = value;
    this.renderComponent();
  }

  private parseSize(value: string): SizeValue {
    return /^\d+(\.\d+)?$/.test(value) ? Number(value) : value;
  }

  private parseData(value: string): CalendarInputEvent[] {
    try {
      const parsed = JSON.parse(value) as unknown;
      return Array.isArray(parsed) ? (parsed as CalendarInputEvent[]) : [];
    } catch {
      return [];
    }
  }

  private renderComponent() {
    if (!this.root) {
      return;
    }

    this.root.render(
      <CalendarBoard
        data={this._data}
        title={this._title}
        height={this._height}
        width={this._width}
      />
    );
  }
}

if (!customElements.get("react-calendar")) {
  customElements.define("react-calendar", ReactCalendarElement);
}

export type { ReactCalendarElement };
