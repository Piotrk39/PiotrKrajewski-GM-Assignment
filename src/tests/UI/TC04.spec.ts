const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { WidgetsPage } from '../../pages/Widgets/WidgetsPage';

test('Verify the progress bar', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const widgets = new WidgetsPage(page);

    await test.step('Navigate to Forms page', async () => {
      console.log('Navigating to Forms page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Widgets');
      await widgets.clickProgressBarTool();
    });

});