const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';

test('Verify user can drag and drop', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);

    await test.step('Navigate to Widgets page', async () => {
      console.log('Navigating to Widgets page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Interactions');
    });

    await test.step('Hoover over the button in Tool Tips menu', async () => {
      
    });

});