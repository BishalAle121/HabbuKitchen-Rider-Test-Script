const find = require('appium-flutter-finder');

module.exports = 
{
    //Method 1: Clear element byValueKey()
    async clearInputFieldByValueKey(driver, widgetSelector)
    {
        await driver.elementClear(find.byValueKey(widgetSelector));
    },

    // Method 2: Clear element byText()
    async clearInputFielByText(driver, widgetSelector)
    {
        await driver.elementClear(find.byText(widgetSelector));
    },

    // Method 3: Clear element byType()
    async clearInputFielByType(driver, widgetSelector)
    {
        await driver.elementClear(find.byType(widgetSelector));
    },

    // Method 4: Clear element bySementicsLab()
    async clearInputFielBySementicsLab(driver, widgetSelector)
    {
        await driver.elementClear(find.bySemanticsLabel(widgetSelector));
    },
}