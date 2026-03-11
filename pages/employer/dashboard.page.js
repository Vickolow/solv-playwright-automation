import { expect } from "@playwright/test"

export class EmployerDashboardPage{

constructor(page){
this.page = page

this.dashboardHeader = page.locator('text=Dashboard')
}

async verifyDashboardVisible(){
await expect(this.dashboardHeader).toBeVisible()
}

}