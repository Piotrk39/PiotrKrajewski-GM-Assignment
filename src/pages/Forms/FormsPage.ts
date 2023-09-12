import { NavigationBase } from "../NavigationBase";
import { FormsPageObject } from "./FormsPageObject";
import { TestUtil } from "../../util/TestUtil";

export class FormsPage extends NavigationBase {

    async clickPracticeFormMenu() {
        await this.click(FormsPageObject.PRACTICE_FORM);
    }

    async zoomOut() {
        await this.page.evaluate(() => {
            document.body.style.transform = 'scale(0.67)'
          })
    }

    async fillInStudentForm(firstName: string, lastName: string, email: string, phone: string, month: string, year: string, day: number, subject: string, address: string, state: string, city: string) {
        await this.type(FormsPageObject.FIRST_NAME, firstName);
        await this.type(FormsPageObject.LAST_NAME, lastName);
        await this.type(FormsPageObject.EMAIL, email);
        await this.click(FormsPageObject.MALE_RADIO_BUTTON);
        await this.type(FormsPageObject.PHONE, phone);
        await this.pickDateOfBirth(month, year, day);
        await this.type(FormsPageObject.SUBJECT, subject);
        await this.checkCheckbox(FormsPageObject.READING_HOBBY);
        await this.type(FormsPageObject.CURRENT_ADDRESS, address);
        await this.type(FormsPageObject.STATE, state);
        await this.page.keyboard.press('Enter');
        await this.type(FormsPageObject.CITY, city);
        await this.page.keyboard.press('Enter');
    }

    async pickDateOfBirth(month: string, year: string, day: number) {
        await this.click(FormsPageObject.DATE_OF_BIRTH_INPUT);
        await this.selectDropdownList(FormsPageObject.MONTH_PICKER, month);
        await this.selectDropdownList(FormsPageObject.YEAR_PICKER, year);
        await this.click(FormsPageObject.generateDay(day))
    }

    async uploadPicture(filePath: string) {
        await TestUtil.uploadFile(this.page, FormsPageObject.UPLOAD_PICTURE, filePath);
    }

    async clickSubmit() {
        await this.click(FormsPageObject.SUBMIT_BUTTON)
    }

    async verifySubmittedFormCell({studentName, email, gender, phone, dateOfBirth, subjects, hobbies, picture, address, stateAndCity}) {
        if (studentName !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(1), studentName);
        }
        if (email !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(2), email);
        }
        if (gender !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(3), gender);
        }
        if (phone !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(4), phone);
        }
        if (dateOfBirth !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(5), dateOfBirth);
        }
        if (subjects !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(6), subjects);
        }
        if (hobbies !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(7), hobbies);
        }
        if (picture !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(8), picture);
        }
        if (address !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(9), address);
        }
        if (stateAndCity !== undefined) {
            await this.waitForElementToContainText(FormsPageObject.generateSubmittedFormCell(10), stateAndCity);
        }
    }
}