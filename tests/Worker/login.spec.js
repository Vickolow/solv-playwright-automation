import { test } from '@playwright/test'
import { WorkerLoginPage } from '../../pages/worker/login.page.js'
import users from '../../test-data/users.json'

test('Worker should login successfully', async ({ page }) => {

const loginPage = new WorkerLoginPage(page)

await loginPage.goto()

await loginPage.login(
users.worker.email,
users.worker.password
)

})