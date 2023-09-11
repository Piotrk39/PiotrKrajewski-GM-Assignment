const {test} = require('@playwright/test');
const { TesUtil, TestUtil } = require('../../util/TestUtil');
const { CommonSteps } = require('../../pages/CommonSteps');
const { OverviewPage } = require('../../pages/Overview/OverviewPage');
const { RegistrationPage } = require('../../pages/Registration/RegistrationPage');

test('Register new user', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);

    await test.step('Navigate to registartion overview page', async () => {
    await common.navigate(baseURL);
  });
});