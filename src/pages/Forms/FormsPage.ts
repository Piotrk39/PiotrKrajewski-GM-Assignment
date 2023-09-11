import { NavigationBase } from "../NavigationBase";
import { FormsPageObject } from "./FormsPageObject";

export class FormsPage extends NavigationBase {

    async clickPracticeFormMenu() {
        await this.click(FormsPageObject.PRACTICE_FORM);
    }

    async fillInStudentForm(firstName: string, lastName: string, email: string, phone: string) {
        await this.type(FormsPageObject.FIRST_NAME, firstName);
        await this.type(FormsPageObject.LAST_NAME, lastName);
        await this.type(FormsPageObject.EMAIL, email);
        await this.click(FormsPageObject.MALE_RADIO_BUTTON);
        await this.type(FormsPageObject.PHONE, phone);

    }
}