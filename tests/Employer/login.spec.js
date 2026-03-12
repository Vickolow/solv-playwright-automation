import { test, expect } from '@playwright/test'
import { EmployerLoginPage } from '../../pages/employer/login.page'
import users from '../../test-data/users.json'

test('Employer should login successfully', async ({ page }) => {

  const employerLogin = new EmployerLoginPage(page)

  await employerLogin.goto()

  await employerLogin.login(
    users.employer.email,
    users.employer.password
  )

  await expect(page).toHaveURL(/dashboard/)
})