const ButtonClick = require("../../helpers/ClickButton/selector_and_click_btn");
const VerifyDisplay = require("../../helpers/CheckElementExistTimer/checkElementExistSelector");
const SendData = require("../../helpers/SendData/selector_and_send_data");
const find = require("appium-flutter-finder");

class Login_POM
{
    constructor(driver)
    {
        this.driver = driver;
    }

    async isLoginScreenDisplay()
    {
       return await VerifyDisplay.checkElementExistBySementiclabel(this.driver, "Login to your Account");
    }

    async tabtoContinueButton()
    {
        const checkContinueText = await VerifyDisplay.checkElementExistBySementiclabel(this.driver, "Continue");
        if(checkContinueText)
        {
            // await ButtonClick.clickButtonbySemanticsLabelTimer(this.driver, "Continue");
            await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "continueBtn");
        }
    }


    async SignIn(Email, Password)
    {
        await SendData.sendDataByValueKey(this.driver, "enterEmail", Email);
        await SendData.sendDataByValueKey(this.driver, "enterPassword", Password);
    }
    
    async tabtoSiginButton()
    {
        await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "tabSignIn");
    }

    async tabtoSkipForNow()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Skip for now");
    }

    async tabAgreeCheckBox()
    {
        await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "tabAgreeCheckBox");
    }


    // OTP operation
    async enterOTP()
    {
        // const element = find.byValueKey("enterOTP");
        // await this.driver.execute('flutter:tap', element); // optional

        await SendData.sendDataByValueKey(this.driver, "enterOTP", "9");
    }

    async resendOTP()
    {
         await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Resend OTP");
    }

    async tabtoConfirm()
    {
        await ButtonClick.clickButtonByValueKey(this.driver, "confirmOTP");
        // await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Confirm");
    }



}module.exports = Login_POM;