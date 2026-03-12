import { test, expect } from '@playwright/test'
import { WorkerLoginPage } from '../../pages/worker/login.page'
import users from '../../test-data/users.json'

test('Worker should login successfully', async ({ page }) => {

  const workerLogin = new WorkerLoginPage(page)

  await workerLogin.goto()

  await workerLogin.login(
    users.worker.email,
    users.worker.password
  )

  await expect(page).toHaveURL(/dashboard/)
})