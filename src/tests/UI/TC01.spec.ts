const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { ElementsPage } from '../../pages/Elements/ElementsPage';
import { TestUtil } from '../../util/TestUtil';

test('Verify user can enter new data into the table', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const elements = new ElementsPage(page);

    const firstName = 'Alden';
    const lastName = 'Cantrell';
    const email = 'test@test.com';
    const age = '30';
    const salary = '12345';
    const department = 'QA';


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
    });

    await test.step('Validate new employee', async () => {
      console.log('Searching for new employee...');
      await elements.typeToSearch(department);
      console.log('Validating new employee row...');
      await elements.verifyRow(1, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        salary: salary,
        department: department
      })
    })
});