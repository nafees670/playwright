import {test, expect} from '@playwright/test';

test('Verify department', async({page}) => {
    await page.goto('https://hrms.idaraalkhair.sbs/login');

  await page.getByRole('textbox', { name: 'e.g. AIT01-G-26-T-' }).click();
  await page.getByRole('textbox', { name: 'e.g. AIT01-G-26-T-' }).fill('AIT01-G-26-H-0002');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('nomanetc123');
  await page.getByRole('button', { name: 'Log In' }).click();

  const heading = page.getByRole('heading', {name: 'Add new employee'})
  expect(heading).toBeVisible()

  await page.getByRole('link', { name: 'Dashboard', exact: true }).click();
  await page.getByRole('link', {name: 'Department', exact:true}).click()

  await page.getByLabel('Institution— none —Alkhair').selectOption('AIT');
  await page.getByRole('textbox', {name: 'BRANCH'}).click()






})