import { expect, Page } from '@playwright/test';

export class NavigationBase {
  private page: Page;

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

  async type(locator: string, text: string) {
    await this.page.waitForSelector(locator);
    await this.page.fill(locator, text);
    return text;
  }

  async click(locator: string) {
    await this.page.waitForSelector(locator);
    await this.page.click(locator);
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

  async waitForElementToHaveText(selector: string, text: string) {
    await this.waitForElementDisplayed(selector);
    let i = 0;
    let content = '';
    while (text !== content && i < 10) {
      await this.waitForTimeout(500);
      let content = await this.getElementText(selector);
      i++;
    }
    if (text === content) {
      console.log(`Element with text "${content}" was displayed`);
    } else {
      throw new Error(`Element ${selector} did not contain text "${text}", instead it contained "${content}"`);
    }
  }

  async waitForElementToContainText(selector: string, text: string) {
    await this.waitForElementDisplayed(selector);
    let i = 0;
    let content = '';
    while (!content.includes(text) && i < 10) {
      await this.waitForTimeout(500);
      let content = await this.getElementText(selector);
      i++;
    }
    if (content.includes(text)) {
      console.log(`Element with text "${content}" was displayed`);
    } else {
      throw new Error(`Element ${selector} did not contain text "${text}", instead it contained "${content}"`);
    }
  }
}