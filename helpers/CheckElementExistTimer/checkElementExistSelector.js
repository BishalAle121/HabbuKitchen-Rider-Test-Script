const find = require('appium-flutter-finder');
module.exports =
{
    async checkElementExistByValueKey(driver, selectorName)
    {
        const element = find.byValueKey(selectorName);
        try
        {
            await driver.execute('flutter:waitFor', element, 5000);
            return true;
        }catch(error)
        {
            console.log("Error Occor: ", error);
            return false;
        }
    },
    async checkElementExistBySementiclabel(driver, selectorName)
    {
        const element = find.bySemanticsLabel(selectorName);
        try
        {
            await driver.execute('flutter:waitFor', element, 5000);
            return true;
        }catch(error)
        {
            console.log("Error Occor: ", error);
            return false;
        }
    },
    async checkElementExistByText(driver, selectorName)
    {
        const element = find.byText(selectorName);
        try
        {
            await driver.execute('flutter:waitFor', element, 5000);
            return true;
        }catch(error)
        {
            console.log("Error Occor: ", error);
            return false;
        }
    },

    async checkElementExistBygetElementByText(driver, selectorName)
    {
        const check = await driver.getElementText(find.byValueKey("verifySearchRestaurant"));
        try
        {
           return check == selectorName; 
        }catch(error)
        {
            console.log("Error Occor: ", error);
            return false;
        }
    }
}