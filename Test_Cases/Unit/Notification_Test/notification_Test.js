const BaseTest = require("../../../Config/baseTest");
const Notification_POM = require("../../../POM/Notification_POM/notification_POM");
const {expect} = require("chai");

describe("Unit Test: Notification operation", async function(){
    let test, notification_POM;
    this.timeout(60000);
    before(async function(){
        test = new BaseTest();
        await test.init('android');
        notification_POM = new Notification_POM(test.driver);
    });

    // it("Should home page display", async function(){
    //     await notification_POM.home_POM.isOnlineHomeDisplayed();
    // });

    it("Should appear home Screen othere do login", async function(){
        // await notification_POM.home_POM.isHomeScreenDisplay();
        await notification_POM.home_POM.tabonNotificationBar();
    });

    it("Should verify the Notification Screen and Scroll the notification Up and Down", async function(){
        const verify = await notification_POM.isNotificationDisplayed();
        expect(verify).to.be.true;

        await notification_POM.ScrollNotificationUp_and_Down();
    });
});