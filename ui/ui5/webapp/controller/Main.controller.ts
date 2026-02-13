import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
	public onInit(): void {
		const calendarModel = new JSONModel();
		calendarModel.loadData(sap.ui.require.toUrl("com/myorg/myapp/model/calendar-config.json"));
		this.getView().setModel(calendarModel, "calendar");
	}
}
