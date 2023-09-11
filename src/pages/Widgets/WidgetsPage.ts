import { NavigationBase } from "../NavigationBase";
import { WidgetsPageObject } from "./WidgetsPageObject";

export class WidgetsPage extends NavigationBase {

    async clickProgressBarTool() {
        await this.click(WidgetsPageObject.PROGRESS_BAR_TOOL);
    }

    async clickToolTipsTool() {
        await this.click(WidgetsPageObject.TOOL_TIPS_TOOL);
    }

    async startProgressBar() {
        await this.click(WidgetsPageObject.START_BUTTON);
    }

    async validateProgressBarLoadedByText(text: string) {
        await this.isElementPresentByText(WidgetsPageObject.LOADED_PROGRESS_BAR, text);
    }

    async hooverOverToolTip() {
        await this.hover(WidgetsPageObject.TOOL_TIP_BUTTON);
    }

    async validateHoverToolTipByAriaLabel() {
        await this.isElementPresent(WidgetsPageObject.HOVER_TOOL_TIP_ELEMENT)
    }
}