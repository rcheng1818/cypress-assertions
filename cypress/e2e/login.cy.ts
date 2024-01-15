import {LoginPage} from "../pages/login_page.cy"

const loginPage = new LoginPage()

it ('login test',function(){
loginPage.navigate("https://trytestingthis.netlify.app/")
loginPage.enterUsername("test")
loginPage.enterPassword("test")
loginPage.clickLogin()

})

