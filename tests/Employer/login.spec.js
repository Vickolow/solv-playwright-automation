import { test } from '@playwright/test';
import { EmployerLoginPage } from '../../pages/employer/login.page.js';

test('Employer login', async ({ page }) => {

  const employerLogin = new EmployerLoginPage(page);

  await employerLogin.goto();
  await employerLogin.login('employer@email.com', 'password123');

});