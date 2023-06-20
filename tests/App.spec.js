const { test, expect } = require("@playwright/test");
const TODO_ITEMS = [
    user.js
  ];
  test('test', async ({ page }) => {
    // Go to https://netology.ru/?modal=sign_in
    await page.goto('https://netology.ru/?modal=sign_in');
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', email_1);
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Fill [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', password_1);
    // Click [data-testid="login-submit-btn"]
    await Promise.all([
      page.waitForNavigation(/*{ url:  }*/),
      page.click('[data-testid="login-submit-btn"]')
    ]);
    // Click text=АЩ
    await page.click('text=АЩ');
});

