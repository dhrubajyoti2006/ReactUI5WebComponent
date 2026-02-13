import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";

export type CalendarItem = {
	title: string;
	start: string;
	end: string;
	allDay?: boolean;
};

type ReactCalendarElement = HTMLElement & {
	title: string;
	width: string;
	height: string;
	data: CalendarItem[];
};

/**
 * @namespace com.myorg.myapp.controls
 */
export default class ReactCalendar extends Control {
	private static loadPromise: Promise<void> | null = null;

	public static readonly metadata = {
		properties: {
			title: {
				type: "string",
				defaultValue: "UI5 Hosted Calendar"
			},
			width: {
				type: "sap.ui.core.CSSSize",
				defaultValue: "720px"
			},
			height: {
				type: "sap.ui.core.CSSSize",
				defaultValue: "360px"
			},
			data: {
				type: "any",
				defaultValue: []
			}
		}
	};

	public static renderer = {
		apiVersion: 2,
		render: (rm: RenderManager, control: ReactCalendar): void => {
			rm.openStart("div", control);
			rm.style("padding", "0.5rem");
			rm.style("border", "1px solid #b8d6ea");
			rm.style("border-radius", "12px");
			rm.style("background-color", "#eef9ff");
			rm.openEnd();

			rm.openStart("react-calendar", `${control.getId()}-wc`);
			rm.openEnd();
			rm.close("react-calendar");

			rm.close("div");
		}
	};

	private ensureWebComponentAssetsLoaded(): Promise<void> {
		if (ReactCalendar.loadPromise) {
			return ReactCalendar.loadPromise;
		}

		ReactCalendar.loadPromise = new Promise((resolve, reject) => {
			const cssId = "react-calendar-webcss";
			const scriptId = "react-calendar-webjs";
			const cssHref = sap.ui.require.toUrl("com/myorg/myapp/thirdparty/web.css");
			const scriptSrc = sap.ui.require.toUrl("com/myorg/myapp/thirdparty/web.js");

			if (!document.getElementById(cssId)) {
				const link = document.createElement("link");
				link.id = cssId;
				link.rel = "stylesheet";
				link.href = cssHref;
				document.head.appendChild(link);
			}

			if (document.getElementById(scriptId)) {
				customElements.whenDefined("react-calendar").then(() => resolve()).catch(reject);
				return;
			}

			const script = document.createElement("script");
			script.id = scriptId;
			script.type = "module";
			script.src = scriptSrc;
			script.onload = () => {
				customElements.whenDefined("react-calendar").then(() => resolve()).catch(reject);
			};
			script.onerror = () => reject(new Error("Failed to load react calendar web component script"));
			document.head.appendChild(script);
		});

		return ReactCalendar.loadPromise;
	}

	public onAfterRendering(): void {
		this.ensureWebComponentAssetsLoaded()
			.then(() => {
				const webComponent = document.getElementById(`${this.getId()}-wc`) as ReactCalendarElement | null;

				if (!webComponent) {
					return;
				}

				webComponent.title = this.getTitle();
				webComponent.width = this.getWidth();
				webComponent.height = this.getHeight();
				webComponent.data = (this.getData() as CalendarItem[]) ?? [];
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.error(error);
			});
	}
}
