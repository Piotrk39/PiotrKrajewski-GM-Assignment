const {test} = require('@playwright/test');
import { CommonSteps } from '../../pages/CommonSteps';
import { InteractionsPage } from '../../pages/Interactions/InteractionsPage';

test('Verify user can drag and drop', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const interactions = new InteractionsPage(page)

    await test.step('Navigate to Widgets page', async () => {
      console.log('Navigating to Widgets page menu...');
      await common.navigate(baseURL);
      await common.navigateToMenuByText('Interactions');
      await interactions.clickDroppableListMenu();
    });

    await test.step('Drag and drop element', async () => {
      console.log('Dragging and dropping element...')
      await interactions.dragAndDropElement();
      await interactions.validateElementDropped('Dropped!')
    });

});