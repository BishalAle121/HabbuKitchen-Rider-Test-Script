// const { AppiumDriver } = require("appium/build/lib/appium")
const find = require('appium-flutter-finder');

module.exports = 
{
    async tabtoPageBack(driver)
    {
         await driver.elementClick(find.pageBack());
    }
}