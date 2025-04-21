const find = require('appium-flutter-finder');
module.exports =
{
    // Method 1: byValueKey()
     async verifyDisplaybyValueKey(driver, selectorName)
     {
       return await driver.getElementText(find.byValueKey(selectorName));

     },
    async verifyDisplaybyText(driver, selectorName)
    {
      var txtSelectorFinder = find.byText(selectorName);
      try{
            await driver.execute('flutter:waitFor',txtSelectorFinder,5000);
            return true;
      }
      catch(error)
      {
        console.log("Timeout in verifyDisplaybyText",error);
        return false;
      }
    },
    
    //  Method 3: bySemanticsLabel()
    async verifyDisplaybySementicsLabel(driver, selectorName)
    {
      var txtSelectorFinder = find.bySemanticsLabel(selectorName);
      try
      {
        await driver.execute('flutter:waitFor', txtSelectorFinder, 5000);
        return true;
      }catch(error)
      {
        console.log("Timeout in verifyDisplaybySemanticsLabel",error);
        return false;
      }
    }
}