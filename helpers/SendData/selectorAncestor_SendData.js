const find = require('appium-flutter-finder');
module.exports = 
{
    // Method 1 and Comvination
     async ancestorSelectorByValueKeyByValueKey_SendData(driver, firstSelector, secondSelector, Data)
     {
         await driver.elementSendKeys(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.byValueKey(secondSelector)
       }), Data);
     },
     async ancestorSelectorByValueKeyByText_SendData(driver, firstSelector, secondSelector, Data)
     {
         await driver.elementSendKeys(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.byText(secondSelector)
       }), Data);
     },
     async ancestorSelectorByValueKeybySemanticsLabel_SendData(driver, firstSelector, secondSelector)
     {
         await driver.elementSendKeys(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.bySemanticsLabel(secondSelector)
       }), Data);
     },
     async ancestorSelectorByValueKeybyType_SendData(driver, firstSelector, secondSelector)
     {
         await driver.elementSendKeys(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.byType(secondSelector)
       }), Data);
     },



      // Method 2 and Comvination
      async ancestorSelectorByTextByText_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byText(secondSelector)
        }), Data);
      },
      async ancestorSelectorByTextByValueKey_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byValueKey(secondSelector)
        }), Data);
      },
      async ancestorSelectorByTextbySemanticsLabel_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }), Data);
      },
      async ancestorSelectorByTextbyType_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byType(secondSelector)
        }), Data);
      },
      
      // Method 3 and Comvination
      async ancestorSelectorbySemanticsLabelbySemanticsLabel_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }), Data);
      },
      async ancestorSelectorbySemanticsLabelByValueKey_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byValueKey(secondSelector)
        }), Data);
      },
      async ancestorSelectorbySemanticsLabelbyText_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byText(secondSelector)
        }), Data);
      },
      async ancestorSelectorbySemanticsLabelbyType_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byType(secondSelector)
        }), Data);
      },


      // Method 4 and Comvination
      async ancestorSelectorByTextByText_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byText(secondSelector)
        }), Data);
      },
      async ancestorSelectorByTextByValueKey_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byValueKey(secondSelector)
        }), Data);
      },
      async ancestorSelectorByTextbySemanticsLabel_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }), Data);
      },
      async ancestorSelectorByTextbyType_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byType(secondSelector)
        }), Data);
      },
}