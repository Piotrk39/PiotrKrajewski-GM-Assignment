export class ElementsPageObject {
    
    static WEBT_TABLES_LIST_ELEMENT = "//li[@id='item-3']/span[text()='Web Tables']";
    static BROKEN_LINKS_IMAGES_LIST_ELEMENT = "//li[@id='item-6']/span[text()='Broken Links - Images']";
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
    static EDIT_BUTTON = "//span[@title='Edit']";
    
    static getCellValue(row: number, column: number) {
        return `(//div[@role="rowgroup"]/div[1]/div[${column}])[${row}]`;
    }

    // BROKEN LINKS
    static BROKEN_IMAGE = "(//img[@src])[4]";
}