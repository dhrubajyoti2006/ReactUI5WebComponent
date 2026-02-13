import ReactDOM from "react-dom/client";
import { projectContent } from "./project-content";

type ViewerProps = {
  title: string;
  content: string;
};

const Viewer = ({ title, content }: ViewerProps) => {
  return (
    <section className="viewer">
      <style>
        {`
          :host {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: #14213d;
          }
          .viewer {
            border: 1px solid #c6d3e1;
            border-radius: 12px;
            background: #f8fbff;
            padding: 1rem;
          }
          h2 {
            margin: 0 0 0.75rem;
            font-size: 1.1rem;
          }
          pre {
            margin: 0;
            padding: 0.75rem;
            border-radius: 8px;
            background: #0b132b;
            color: #e0f2f1;
            overflow: auto;
          }
        `}
      </style>
      <h2>{title}</h2>
      <pre>{content}</pre>
    </section>
  );
};

class ProjectContentViewer extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  static get observedAttributes() {
    return ["title", "content"];
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    }

    this.renderComponent();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
  }

  attributeChangedCallback() {
    this.renderComponent();
  }

  private renderComponent() {
    if (!this.root) {
      return;
    }

    const title = this.getAttribute("title") ?? "Project Content";
    const content =
      this.getAttribute("content") ??
      JSON.stringify(projectContent, null, 2);

    this.root.render(<Viewer title={title} content={content} />);
  }
}

if (!customElements.get("project-content-viewer")) {
  customElements.define("project-content-viewer", ProjectContentViewer);
}
