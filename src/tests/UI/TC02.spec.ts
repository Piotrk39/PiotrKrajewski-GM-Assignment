const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { ElementsPage } from '../../pages/Elements/ElementsPage';
import { ElementsPageObject } from '../../pages/Elements/ElementsPageObject';

test('Verify broken image', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const elements = new ElementsPage(page);

    await test.step('Navigate to Elements page', async () => {
      console.log('Navigating to Elements page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Elements');
      console.log('Selecting Broken Links - images menu...');
      await elements.clickBrokenLinksMenu();
      console.log('Validating image...');
      await elements.validateImage(ElementsPageObject.BROKEN_IMAGE);
    });
});