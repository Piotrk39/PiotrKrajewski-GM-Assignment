const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { FormsPage } from '../../pages/Forms/FormsPage';
import { TestConfig } from '../../util/TestConfig';

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
    const studentName = firstName + ' ' + lastName;
    const address = 'Netherlands';
    const state = 'NCR';
    const city = 'Delhi';
    const dateOfBirth = '15 January,1990';
    const gender = 'Male';
    const hobby = 'Reading';
    const picture = 'flower_drawing.png';
    const stateAndCity = 'NCR Delhi';

    await test.step('Navigate to Forms page', async () => {
      console.log('Navigating to Forms page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Forms');
      await forms.clickPracticeFormMenu();
    });

    await test.step('Fill in Student form', async () => {
      console.log('Filling in Student form...');
      await forms.fillInStudentForm(firstName, lastName, email, phone, month, year, day, subject, address, state, city);
      await forms.uploadPicture(TestConfig.TEST_DATA_PATH + "/flower_drawing.png");
      await forms.zoomOut();
      await forms.clickSubmit();
    });

    await test.step('Validate Student form', async () => {
      console.log('Validating Student form...');
      await forms.verifySubmittedFormCell({
        studentName: studentName,
        email: email,
        gender: gender,
        phone: phone,
        dateOfBirth: dateOfBirth,
        subjects: subject,
        hobbies: hobby,
        picture: picture,
        address: address,
        stateAndCity: stateAndCity
      })
    });
});