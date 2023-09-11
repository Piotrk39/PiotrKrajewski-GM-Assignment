const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { WidgetsPage } from '../../pages/Widgets/WidgetsPage';

test('Verify the tooltip', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const widgets = new WidgetsPage(page);

    await test.step('Navigate to Widgets page', async () => {
      console.log('Navigating to Widgets page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Widgets');
      await widgets.clickToolTipsTool();
    });

    await test.step('Hoover over the button in Tool Tips menu', async () => {
      await widgets.hooverOverToolTip();
      await widgets.validateHoverToolTipByAriaLabel();
    });

});