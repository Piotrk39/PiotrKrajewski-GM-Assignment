const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { FormsPage } from '../../pages/Forms/FormsPage';

test('Verify user can submit the form.', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const forms = new FormsPage(page);

    const firstName = 'Gerimedica';
    const lastName = 'BV';
    const email = 'test@test.com';
    const phone = '0123456789';
    const month = 'January';
    const year = '1990';
    const day = 15;
    const subject = 'Playwright Assignment';

    await test.step('Navigate to Forms page', async () => {
      console.log('Navigating to Forms page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Forms');
      await forms.clickPracticeFormMenu();
    });

    await test.step('Fill in Student form', async () => {
      console.log('Filling in Student form...');
      await forms.fillInStudentForm(firstName, lastName, email, phone, month, year, day, subject);
    });
});