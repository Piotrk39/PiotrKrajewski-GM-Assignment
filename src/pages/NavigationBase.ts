import { expect, Page } from '@playwright/test';

export class NavigationBase {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkCheckbox(locator: string) {
    if (await this.page.isChecked(locator)) {
      expect(await this.page.isChecked(locator)).toBeTruthy();
    } else {
      await this.click(locator);
    }
  }

  async hover(locator: string) {
    await this.page.hover(locator);
  }

  async selectDropdownList(dropdown: string, value: string) {
    await this.page.waitForSelector(dropdown);
    await this.page.selectOption(dropdown, {label: value});
}

  async type(locator: string, text: string) {
    await this.page.waitForSelector(locator);
    await this.page.fill(locator, text);
    return text;
  }

  async click(locator: string) {
    await this.page.waitForSelector(locator);
    await this.page.click(locator);
  }

  async doubleClick(locator: string) {
    await this.page.waitForSelector(locator);
    await this.page.dblclick(locator);
  }

  async isElementPresent(locator: string) {
    return await this.page.isVisible(locator);
  }

  async getElementText(locator: string) {
    return await this.page.locator(locator).textContent();
  }

  async waitForPageLoad() {
    await this.page.waitForEvent("domcontentloaded");
    await this.page.waitForLoadState('networkidle');
  }

  async waitForTimeout(timeout: number) {
    await this.page.waitForTimeout(timeout);
  }

  async getCountOfElements(locator: string) {
    await this.waitForElementDisplayed(locator);

    const elements = await this.page.locator(locator).count();
    return elements;
  }

  async waitForElementDisplayed(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async clickUntilElementDisappears(locatorToClick: string, selectorToDisappear: string) {
    for (let i = 0; i < 10; i++) {
      await this.click(locatorToClick);
      await this.waitForTimeout(500);
      if (!(await this.page.isVisible(selectorToDisappear))) {
        break;
      }
    }
  }

  async waitForElementToContainText(selector: string, text: string) {
    await this.waitForElementDisplayed(selector);
    let i = 0;
    let content = await this.getElementText(selector);
    while (text !== content && i < 10) {
      await this.waitForTimeout(500);
      i++;
    }
    if (text === content) {
      console.log(`Element with text "${content}" was displayed`);
    } else {
      throw new Error(`Element ${selector} did not contain text "${text}", instead it contained "${content}"`);
    }
  }

  async isElementPresentByText(locator: string, text: string) {
    const textContent = await this.getElementText(locator);

    if(textContent === text) {
        console.log(`Elemnt with text ${text} was presnt`)
        return;
      }
      else {
        throw new Error(`No mathing element with text: ${text} instead element containing: ${textContent} was found`);
      }
}

  async isImageBroken(selector: string) {
    const imgSelector = selector;

    // Wait for the image to load or for a timeout (adjust the timeout as needed)
    const imageHandle = await this.page.waitForSelector(imgSelector);

    // Ensure the image element exists on the page
    expect(imageHandle).not.toBeNull();

    // Get the 'naturalWidth' and 'naturalHeight' properties of the image
    const naturalWidth = await imageHandle.evaluate((img: HTMLImageElement) => img.naturalWidth);
    const naturalHeight = await imageHandle.evaluate((img: HTMLImageElement) => img.naturalHeight);

    // Check if both 'naturalWidth' and 'naturalHeight' are 0, indicating a broken image
    const isImageBroken = naturalWidth === 0 && naturalHeight === 0;

    // Assert whether the image is broken
    expect(isImageBroken).toBe(true);
    console.log("Image is broken!");
  }

  async dragAndDrop(locatorDrag: string, locatorDrop: string) {
    await this.page.locator(locatorDrag).dragTo(this.page.locator(locatorDrop));
  }
}