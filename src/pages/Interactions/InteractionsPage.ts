import { NavigationBase } from "../NavigationBase";
import { InteractionsPageObject } from './InteractionsPageObject';

export class InteractionsPage extends NavigationBase {

    async clickDroppableListMenu() {
        await this.click(InteractionsPageObject.DROPPABLE);
    }

    async dragAndDropElement() {
        await this.dragAndDrop(InteractionsPageObject.DRAG, InteractionsPageObject.DROP)
    }

    async validateElementDropped(text: string) {
        await this.isElementPresentByText(InteractionsPageObject.DROPPED_CONFIRMATION_PARAGRAPH, text)
    }
}