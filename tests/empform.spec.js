import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hrms.idaraalkhair.sbs/login');
  await page.getByRole('textbox', { name: 'e.g. AIT01-G-26-T-' }).click();
  await page.getByRole('textbox', { name: 'e.g. AIT01-G-26-T-' }).fill('AIT01-G-26-H-0002');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('nomanetc123');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('link', { name: 'Dashboard', exact: true }).click();
  await page.getByRole('link', { name: 'Employees', exact: true }).click();
  await page.getByRole('link', { name: 'ADD EMPLOYEE' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('Asad');
  await page.getByRole('textbox', { name: 'CNIC' }).click();
  await page.getByRole('textbox', { name: 'CNIC' }).fill('12345-678912707');
  await page.getByRole('textbox', { name: 'Date of birth' }).fill('2005-01-01');
  await page.getByRole('textbox', { name: 'Nationality' }).click();
  await page.getByRole('textbox', { name: 'Nationality' }).fill('Pakistani');
  await page.getByRole('textbox', { name: 'Religion' }).click();
  await page.getByRole('textbox', { name: 'Religion' }).fill('Islam');
  await page.getByRole('button', { name: 'Next Step' }).click();

  await page.getByRole('textbox', { name: 'Personal email *' }).click();
  await page.getByRole('textbox', { name: 'Personal email *' }).fill('asad@gmail.com');
  await page.getByRole('textbox', { name: 'Org email' }).click();
  await page.getByRole('textbox', { name: 'Org email' }).fill('asad1@gmail.com');
  await page.getByRole('textbox', { name: 'Emergency contact name' }).click();
  await page.getByRole('textbox', { name: 'Emergency contact name' }).fill('03232056784');
  await page.getByRole('textbox', { name: 'Mobile' }).click();
  await page.getByRole('textbox', { name: 'Mobile' }).fill('0311-2899364');
  await page.getByRole('textbox', { name: 'Org phone' }).click();
  await page.getByRole('textbox', { name: 'Org phone' }).fill('0312-4555804');
  await page.getByRole('textbox', { name: 'Emergency contact phone' }).click();
  await page.getByRole('textbox', { name: 'Emergency contact phone' }).fill('0325-2590634');
  await page.getByRole('textbox', { name: 'Residential address' }).click();
  await page.getByRole('textbox', { name: 'Residential address' }).fill('North Karachi');
  await page.getByRole('textbox', { name: 'Permanent address' }).click();
  await page.getByRole('textbox', { name: 'Permanent address' }).fill('New Karachi');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Karachi');
  await page.getByRole('button', { name: 'Next Step' }).click();
  
  await page.getByLabel('Institution— none —Alkhair').selectOption('AIT');
  await page.getByLabel('Branch— none —AIT Power campus').selectOption('AIT01');
  await page.getByLabel('Department— select —abc4564+').selectOption('ACAD');
  await page.getByLabel('Designation— select —').selectOption('AS-5464');
  await page.getByRole('textbox', { name: 'Joining date' }).fill('2026-04-01');
  await page.getByLabel('ShiftGeneral /').selectOption('morning');
  await page.getByRole('textbox', { name: 'Bank name' }).click();
  await page.getByRole('textbox', { name: 'Bank name' }).fill('abc');
  await page.getByRole('textbox', { name: 'Account number' }).click();
  await page.getByRole('textbox', { name: 'Account number' }).fill('99100205963478');
  await page.getByRole('button', { name: 'Next Step' }).click();
});