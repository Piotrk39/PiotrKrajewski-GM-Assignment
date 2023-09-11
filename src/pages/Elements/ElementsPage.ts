import { NavigationBase } from "../NavigationBase";
import { ElementsPageObject } from './ElementsPageObject';

export class ElementsPage extends NavigationBase {

    async clickWebElementsListMenu() {
        await this.click(ElementsPageObject.WEBT_TABLES_LIST_ELEMENT);
    }

    async clickBrokenLinksMenu() {
        await this.click(ElementsPageObject.BROKEN_LINKS_IMAGES_LIST_ELEMENT);
    }

    async validateImage(selector) {
        await this.isImageBroken(selector);
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

    async editEntryFullName(firstName: string, lastName: string) {
        await this.doubleClick(ElementsPageObject.FIRST_NAME);
        await this.type(ElementsPageObject.FIRST_NAME, firstName);
        await this.doubleClick(ElementsPageObject.LAST_NAME);
        await this.type(ElementsPageObject.LAST_NAME, lastName);
    }

    async clickEditButton() {
        await this.click(ElementsPageObject.EDIT_BUTTON);
    }

    async clickSubmitButton() {
        await this.click(ElementsPageObject.SUBMIT_BUTTON);
    }

    async typeToSearch(query: string) {
        await this.type(ElementsPageObject.SEARCH_BOX, query);
    }

    async verifyRow(rowIndex, { firstName, lastName, email, age, salary, department}) {
        if (firstName !== undefined) {
            await this.waitForElementToContainText(ElementsPageObject.getCellValue(rowIndex, 1), firstName);
        }
        if (lastName !== undefined) {
            await this.waitForElementToContainText(ElementsPageObject.getCellValue(rowIndex, 2), lastName);
        }
        if (age !== undefined) {
            await this.waitForElementToContainText(ElementsPageObject.getCellValue(rowIndex, 3), age);
        }
        if (email !== undefined) {
            await this.waitForElementToContainText(ElementsPageObject.getCellValue(rowIndex, 4), email);
        }
        if (salary !== undefined) {
            await this.waitForElementToContainText(ElementsPageObject.getCellValue(rowIndex, 5), salary);
        }
        if (department !== undefined) {
            await this.waitForElementToContainText(ElementsPageObject.getCellValue(rowIndex, 6), department);
        }
    }
}