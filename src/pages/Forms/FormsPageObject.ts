export class FormsPageObject {
    
    static PRACTICE_FORM = "//li[@id='item-0']/span[text()='Practice Form']";

    // FORM FIELDS

    static FIRST_NAME = "#firstName";
    static LAST_NAME = "#lastName";
    static EMAIL = "#userEmail";
    static MALE_RADIO_BUTTON = "//label[@for='gender-radio-1']";
    static PHONE = "#userNumber";
    static SUBJECT = "#subjectsInput";

    // DATE PICKER LOCATORS
    static DATE_OF_BIRTH_INPUT = "#dateOfBirthInput";
    static MONTH_PICKER = "//select[@class='react-datepicker__month-select']";
    static YEAR_PICKER = "//select[@class='react-datepicker__year-select']";
    
    static generateDay(day: Number) {
        return `//div[@role="option" and text()='${day}']`;
    }
    
}