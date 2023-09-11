import { NavigationBase } from "../NavigationBase";
import { WidgetsPageObject } from "./WidgetsPageObject";

export class WidgetsPage extends NavigationBase {

    async clickProgressBarTool() {
        await this.click(WidgetsPageObject.PROGRESS_BAR_TOOL);
    }
}