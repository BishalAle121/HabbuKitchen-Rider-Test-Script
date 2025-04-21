const find = require('appium-flutter-finder');
module.exports = 
{
    // Method 1 Send Data
    async SendDataByText(driver, selectorName, Data)
    {
         await driver.elementSendKeys(find.byText(selectorName), Data);
    },

    // Method 2 Send Data
    async sendDataByValueKey(driver, selectorName, Data)
    {
        await driver.elementSendKeys(find.byValueKey(selectorName), Data);
    },

    // Method 3 Send Data
    async sendDataByType(driver, selectorName, Data)
    {
        await driver.elementSendKeys(find.byType(selectorName), Data); 
    },

    // Method 4 Send Data
    async sendDataBySementicLebel(driver, selectorName, Data)
    {
        await driver.elementSendKeys(find.bySemanticsLabel(selectorName), Data);
    }
}