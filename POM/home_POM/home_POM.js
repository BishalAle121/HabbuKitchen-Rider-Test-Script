const { expect } = require("chai");
const ButtonClick = require("../../helpers/ClickButton/selector_and_click_btn");
const Login_POM = require("../Login_Logout_POM/login_POM");
const loginData = require("../../Test_Data/login_Data_Valid_Invalid/Login_Valid.json");
const VerifyDisplay = require("../../helpers/CheckElementExistTimer/checkElementExistSelector");
const find = require("appium-flutter-finder");
class HomeScreen
{
    constructor(driver)
    {
        this.driver = driver;
        this.loginPOM = new Login_POM(this.driver);
    }
    async isHomeScreenDisplay()
    {
        const isHomeDisplay = await VerifyDisplay.checkElementExistBySementiclabel(this.driver, "Home");
        if(isHomeDisplay)
        {
            expect(isHomeDisplay).to.be.true;
            return true;
        }
        else
        {
            const isLoginDisplay = await this.loginPOM.isLoginScreenDisplay();
            if(isLoginDisplay)
            {
                await this.loginPOM.SignIn(loginData.valid.Email, loginData.valid.Password);
                await this.loginPOM.tabtoSiginButton();
                return true;
            }
            else
            {
                const isContinueDisplay = await this.loginPOM.tabtoContinueButton();
                if(isContinueDisplay)
                {
                    await this.loginPOM.tabtoContinueButton();
                    await this.loginPOM.SignIn(loginData.valid.Email, loginData.valid.Password);
                    await this.loginPOM.tabtoSiginButton();
                    return true;
                }
                else
                {
                    console.log("No Widget found");
                }
            }
        }
    }  

    // get sliderButtonKey()
    // {
    //     return find.byValueKey("tabGoOnline");
    // }

    // async dragToGoOnline()
    // {
    //     await this.driver.execute('flutter:longTap', this.sliderButtonKey,{
    //         durationMilliseconds: 0
    //     });
    // }
    // async dragToGoOnline()
    // {
    //     await this.driver.elementClick(this.sliderButtonKey);
    //     await this.driver.touchAction({
    //       action: 'tap',
    //       element: { elementId: this.sliderButtonKey}
    //     });
    // }


    

//     async dragToGoOnline()
//     {
//         // await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "goOnline");
//         const buttonFinder = find.byValueKey("tabGoOnline");
//         await this.driver.elementClick(buttonFinder);
//   await this.driver.touchAction({
//     action: 'tap',
//     element: { elementId: buttonFinder }
//   });
//     }

    async tabonNotificationBar()
    {
        // await ButtonClick.clickButtonbySemanticsLabel(this.driver, "tabNotificationNavBar");
        // await ButtonClick.clickButtonByValueKey(this.driver, "tabNotificationNavBar");
        // await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Notification");
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Notification");
    }

    async tabonHomeBar()
    {
        // await ButtonClick.clickButtonbySemanticsLabel(this.driver, "tabHomeNavBar");
        // await ButtonClick.clickButtonByValueKey(this.driver, "tabHomeNavBar");
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Home");
    }

    async tabonMenu()
    {
        // await ButtonClick.clickButtonbySemanticsLabel(this.driver, "tabMenuNavBar");
        // await ButtonClick.clickButtonByValueKey(this.driver, "tabMenuNavBar");
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Menu");
    }
    


    // async dragToGoOnline() {
    //     try {
    //         console.log("🔄 Swiping 'Go Online' slider...");
            
    //         const sliderFinder = find.byValueKey("goOnline");
    
    //         // Perform a horizontal swipe (adjust `dx` for swipe distance)
    //         await this.driver.execute("flutter:scroll", sliderFinder, {
    //             dx: 200,  // Swipe right by 200 pixels (adjust as needed)
    //             dy: 0,    // No vertical movement
    //             durationMilliseconds: 500, // Duration of swipe in ms
    //             frequency: 30, // Refresh rate (optional)
    //         });
    
    //         console.log("✅ Successfully swiped 'Go Online' slider");
    //     } catch (error) {
    //         console.error("❌ Failed to swipe slider:", error);
    //         throw error;
    //     }
    // }


    // All selectors of agree screen
    async tabtoSkip()
    {
        await ButtonClick.clickButtonByTypeTimer(this.driver, "skip");
    }

    async tabAgree()
    {
        await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "tabAgree");
    }
    
}module.exports = HomeScreen;
