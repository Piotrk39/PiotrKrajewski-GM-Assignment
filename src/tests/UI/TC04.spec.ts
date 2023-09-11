const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { WidgetsPage } from '../../pages/Widgets/WidgetsPage';

test('Verify the progress bar', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const widgets = new WidgetsPage(page);

    await test.step('Navigate to Widgets page', async () => {
      console.log('Navigating to Widgets page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Widgets');
      await widgets.clickProgressBarTool();
    });

    await test.step('Run progress bar and validate it reached 100%', async () => {
      console.log('Running progress bar...');
      await widgets.startProgressBar();
      console.log('Validate progress bar loaded 100%...');
      await widgets.validateProgressBarLoadedByText('100%');
      console.log('Progress Bar loaded to 100%');
    });

});