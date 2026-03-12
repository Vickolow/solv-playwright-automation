export class WorkerLoginPage {
  constructor(page){
    this.page = page

    this.emailInput = page.locator('input[name="email"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.loginButton = page.locator('button[type="submit"]')
  }

  async goto(){
    await this.page.goto('https://solv-worker-dev-fe.onrender.com/')
    await this.page.waitForLoadState('networkidle')
  }

  async login(email, password){
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}