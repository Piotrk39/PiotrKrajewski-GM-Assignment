export class ElementsPageObject {
    
    static WEBT_TABLES_LIST_ELEMENT = "//li[@id='item-3']/span[text()='Web Tables']";
    static ADD_NEW_RECORD_BUTTON = "#addNewRecordButton";

    // REGISTRATION FORM ELEMENTS
    static FIRST_NAME = "#firstName";
    static LAST_NAME = "#lastName";
    static EMAIL = "#userEmail";
    static AGE = "#age";
    static SALARY = "#salary";
    static DEPARTMENT = "#department";
    static SUBMIT_BUTTON = '#submit';

    //TABLE ELEMENTS
    static SEARCH_BOX = "#searchBox";
    
    static getCellValue(row, column) {
        return `(//div[@role="rowgroup"]/div[1]/div[${column}])[${row}]`;
    }

}