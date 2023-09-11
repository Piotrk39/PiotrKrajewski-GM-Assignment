import { NavigationBase } from "../NavigationBase";
import { ElementsPageObject } from './ElementsPageObject';

export class ElementsPage extends NavigationBase {

    async clickWebElementsListMenu() {
        await this.click(ElementsPageObject.WEBT_TABLES_LIST_ELEMENT);
    }

    async clickAddNewRecordButton() {
        await this.click(ElementsPageObject.ADD_NEW_RECORD_BUTTON);
    }

    async fillInRegistrationForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
        await this.type(ElementsPageObject.FIRST_NAME, firstName);
        await this.type(ElementsPageObject.LAST_NAME, lastName);
        await this.type(ElementsPageObject.EMAIL, email);
        await this.type(ElementsPageObject.AGE, age);
        await this.type(ElementsPageObject.SALARY, salary);
        await this.type(ElementsPageObject.DEPARTMENT, department);
    }

    async clickSubmitButton() {
        await this.click(ElementsPageObject.SUBMIT_BUTTON);
    }
}