import { NavigationBase } from "../NavigationBase";
import { WidgetsPageObject } from "./WidgetsPageObject";

export class WidgetsPage extends NavigationBase {

    async clickProgressBarTool() {
        await this.click(WidgetsPageObject.PROGRESS_BAR_TOOL);
    }

    async startProgressBar() {
        await this.click(WidgetsPageObject.START_BUTTON);
    }

    async validateProgressBarLoadedByText(text: string) {
        await this.isElementPresentByText(WidgetsPageObject.LOADED_PROGRESS_BAR, text);
    }
}