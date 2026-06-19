import { test, expect } from '@playwright/test';

test('Verify Emp form', async ({ page }) => {
  await page.goto('https://hrms.idaraalkhair.sbs/login');
  await page.getByRole('textbox', { name: 'e.g. AIT01-G-26-T-' }).click();
  await page.getByRole('textbox', { name: 'e.g. AIT01-G-26-T-' }).fill('AIT01-G-26-H-0002');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('nomanetc123');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('link', {name: 'Employee'}).click();
  await page.getByRole('link', {name: 'ADD EMPLOYEE'}).click();

  await page.getByRole('textbox', {name: 'Full name'}).click()
  await page.getByRole('textbox', {name: 'Full name'}).fill('Ahmed Ali')
  await page.getByRole('textbox', {name: 'CNIC'}).click();
  await page.getByRole('textbox', {name: 'CNIC'}).fill('42101-6985970-9');
  await page.getByRole('textbox', {name: 'Date of birth'}).click();
  await page.getByRole('textbox', {name: 'Date of birth'}).fill('2010-01-01')
  
  await page.locator('select[name="Gender"]').selectOption('Male');
  await page.locator('select[name ="matital status"]').selectOption('Single');
  
  await page.getByRole('textbox', {name: 'Nationality'}).click()
  await page.getByRole('textbox', {name: 'Nationality'}).fill('Pakistani')
  
  await page.getByRole('textbox', {name: 'Religion'}).click();
  await page.getByRole('textbox', {name: 'Religion'}).fill('Islam');
  
  await page.getByRole('button', {name: 'Next Step'}).click()
  
  await page.getByRole('textbox', {name: 'Personal email *'}).click();
  await page.getByRole('textbox', {name: 'Personal email *'}).fill('abc@gmail.com');
  await page.getByRole('textbox', {name: 'Mobile'}).click();
  await page.getByRole('textbox', {name: 'Mobile'}).fill('03122899654')
  await page.getByRole('textbox', {name: 'Org email'}).click();
  await page.getByRole('textbox', {name: 'Org email'}).fill('abc12@gmail.com')
  await page.getByRole('textbox', {name: 'Org phone'}).click();
  await page.getByRole('textbox', {name: 'Org phone'}).fill('03422833650')
  await page.getByRole('textbox', {name: 'Emergency contact name'}).click();
  await page.getByRole('textbox', {name: 'Emergency contact name'}).fill('Umair');
  await page.getByRole('textbox', {name: 'Emergency contact phone'}).click();
  await page.getByRole('textbox', {name: 'Emergency contact phone'}).fill('03152874568');
  await page.getByRole('textbox', {name: 'Residential address'}).click();
  await page.getByRole('textbox', {name: 'Residential address'}).fill('North Karachi');
  await page.getByRole('textbox', {name: 'Permanent address'}).click();
  await page.getByRole('textbox', {name: 'Permanent address'}).fill('New Karachi');
  await page.getByRole('textbox', {name: 'City'}).click();
  await page.getByRole('textbox', {name: 'City'}).fill('Karachi');
  await page.getByRole('button', {name: 'Next Step'}).click()
  
  await page.locator('select[name= "Organization"]').selectOption('Idara Alkhair (IAK)');
  await page.locator('select[name="Institution"]').selectOption('Alkhair Institute of Technology');
  await page.locator('select[name="Branch"]').selectOption('--none--');
  await page.locator('select[name="Designation"]').selectOption('Academic');
  await page.getByRole('textbox', {name: 'Joining date'}).click();
  await page.getByRole('textbox', {name: 'Joining date'}).fill('2026-01-01');
  await page.locator('select[name="Shift"]').selectOption('Morning');
  
  await page.getByRole('textbox', {name: 'Bank name'}).click();
  await page.getByRole('textbox', {name: 'Bank name'}).fill('HBL');
  await page.getByRole('textbox', {name: 'Account number'}).click();
  await page.getByRole('textbox', {name: 'Account number'}).fill('33100105896324');
  await page.getByRole('button', {name: 'Next Step'}).click();





 





  });