const { test, expect } = require("@playwright/test");
const {email_1, password_1, email_2} = require("./user.js");


test('SuccesAuth', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email_1);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password_1);
  await page.getByTestId('login-submit-btn').click();
  await page.getByText('АЩ').click();
  
});
test('NotSuccesAuth', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email_2);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password_1);
  await page.getByTestId('login-submit-btn').click();
  await page.getByTestId('login-error-hint').click({
    button: 'right'
  });
  
});





