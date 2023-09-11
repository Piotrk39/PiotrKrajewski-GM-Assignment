export class FormsPageObject {
    
    static PRACTICE_FORM = "//li[@id='item-0']/span[text()='Practice Form']";

    // FORM FIELDS
    static FIRST_NAME = "#firstName";
    static LAST_NAME = "#lastName";
    static EMAIL = "#userEmail";
    static MALE_RADIO_BUTTON = "//label[@for='gender-radio-1']";
    static PHONE = "#userNumber";
    static SUBJECT = "#subjectsInput";
    static READING_HOBBY = "//label[@for='hobbies-checkbox-2']";
    static CURRENT_ADDRESS = "#currentAddress";
    static STATE = "#react-select-3-input";
    static CITY = "#react-select-4-input";
    static SUBMIT_BUTTON = "#submit";

    // DATE PICKER LOCATORS
    static DATE_OF_BIRTH_INPUT = "#dateOfBirthInput";
    static MONTH_PICKER = "//select[@class='react-datepicker__month-select']";
    static YEAR_PICKER = "//select[@class='react-datepicker__year-select']";
    
    static generateDay(day: Number) {
        return `//div[@role="option" and text()='${day}']`;
    }

    //FILE UPLOAD
    static UPLOAD_PICTURE = "#uploadPicture";

    // SUBMITTED FORM TABLE
    static generateSubmittedFormCell(cellNumber) {
        return `//body/div[5]/div/div/div[2]/div/table/tbody/tr[${cellNumber}]/td[2]`
    }
    
}