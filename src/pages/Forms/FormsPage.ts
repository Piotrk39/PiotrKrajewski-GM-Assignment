import { NavigationBase } from "../NavigationBase";
import { FormsPageObject } from "./FormsPageObject";

export class FormsPage extends NavigationBase {

    async clickPracticeFormMenu() {
        await this.click(FormsPageObject.PRACTICE_FORM);
    }

    async fillInStudentForm(firstName: string, lastName: string, email: string, phone: string, month: string, year: string, day: Number, subject: string) {
        await this.type(FormsPageObject.FIRST_NAME, firstName);
        await this.type(FormsPageObject.LAST_NAME, lastName);
        await this.type(FormsPageObject.EMAIL, email);
        await this.click(FormsPageObject.MALE_RADIO_BUTTON);
        await this.type(FormsPageObject.PHONE, phone);
        await this.pickDateOfBirth(month, year, day);
        await this.type(FormsPageObject.SUBJECT, subject);
    }

    async pickDateOfBirth(month: string, year: string, day: Number) {
        await this.click(FormsPageObject.DATE_OF_BIRTH_INPUT);
        await this.selectDropdownList(FormsPageObject.MONTH_PICKER, month);
        await this.selectDropdownList(FormsPageObject.YEAR_PICKER, year);
        await this.click(FormsPageObject.generateDay(day))
    }
}