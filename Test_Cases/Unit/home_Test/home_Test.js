const { expect } = require("chai");
const BaseTest = require("../../../Config/baseTest");
const HomeScreen = require("../../../POM/home_POM/home_POM");

describe("Unit Test: Home page test", async function(){
    let test, homeScreen;
    this.timeout(400000);
    before(async function(){
        test = new BaseTest();
        await test.init('android');
        homeScreen = new HomeScreen(test.driver);
    });
    it("Should tab every Bottom Navigation Bar", async function(){
        // await homeScreen.tabonHomeBar();
        await homeScreen.tabonNotificationBar();
        await homeScreen.tabonMenu();
        await homeScreen.tabonHomeBar();
    });
});