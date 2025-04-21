const BaseTest = require("../../../Config/baseTest");
const Login_POM = require("../../../POM/Login_Logout_POM/login_POM");
const loginData = require("../../../Test_Data/login_Data_Valid_Invalid/Login_Valid.json"); 
const {expect} = require("chai");

describe("Unit Test: Should Successfully login", async function(){
     let test, login_POM;
     this.timeout(60000);
     before(async function(){
          test = new BaseTest();
          await test.init("android");
          login_POM = new Login_POM(test.driver);
     });

     it("Should tab on Continue if Continue button is display", async function(){
         await login_POM.tabtoContinueButton();
     });

     it("Should Display Login Page", async function(){
          const chectStatus =  await login_POM.isLoginScreenDisplay();
          expect(chectStatus).to.be.true;
     });

     it("Should tabe on Sign in Button", async function(){  
          await login_POM.SignIn(loginData.valid.Email, loginData.valid.Password);
          await login_POM.tabtoSiginButton();
     });

     it("Should enter OTP", async function(){
          // await login_POM. enterOTP();
          // await login_POM.resendOTP();
          await login_POM.tabtoConfirm();
     });
});