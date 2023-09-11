const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { ElementsPage } from '../../pages/Elements/ElementsPage';
import { TestUtil } from '../../util/TestUtil';

test('Verify user can enter new data into the table', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const elements = new ElementsPage(page);

    const firstName = 'Piotr' + await TestUtil.generateRandomNumber(5);
    const lastName = 'Krajewski' + await TestUtil.generateRandomNumber(5);
    const email = await TestUtil.generateRandomString(6)+ '@gmail.com';
    const age = await TestUtil.generateRandomNumber(2);
    const salary = await TestUtil.generateRandomNumber(5);
    const department = 'Sales' + await TestUtil.generateRandomNumber(5);


    await test.step('Navigate to Elements page', async () => {
      console.log('Navigating to Elements page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Elements');
      console.log('Selecting Web Tables list menu...');
      await elements.clickWebElementsListMenu();
      await elements.clickAddNewRecordButton();
    });

    await test.step('Fill in the registration form', async () => {
      console.log('Filling in the registartion form...');
      await elements.fillInRegistrationForm(firstName, lastName, email, age, salary, department);
      console.log('Submitting registration form...');
      await elements.clickSubmitButton();
    })
});