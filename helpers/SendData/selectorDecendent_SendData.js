const find = require('appium-flutter-finder');
module.exports = 
{
    // Method 1 and Comvination
     async descendantSelectorByValueKeyByValueKey_SendData(driver, firstSelector, secondSelector, Data)
     {
         await driver.elementSendKeys(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.byValueKey(secondSelector)
       }), Data);
     },
     async descendantSelectorByValueKeyByText_SendData(driver, firstSelector, secondSelector, Data)
     {
         await driver.elementSendKeys(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.byText(secondSelector)
       }), Data);
     },
     async descendantSelectorByValueKeybySemanticsLabel_SendData(driver, firstSelector, secondSelector)
     {
         await driver.elementSendKeys(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.bySemanticsLabel(secondSelector)
       }), Data);
     },
     async descendantSelectorByValueKeybyType_SendData(driver, firstSelector, secondSelector)
     {
         await driver.elementSendKeys(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.byType(secondSelector)
       }), Data);
     },



      // Method 2 and Comvination
      async descendantSelectorByTextByText_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byText(secondSelector)
        }), Data);
      },
      async descendantSelectorByTextByValueKey_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byValueKey(secondSelector)
        }), Data);
      },
      async descendantSelectorByTextbySemanticsLabel_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }), Data);
      },
      async descendantSelectorByTextbyType_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byType(secondSelector)
        }), Data);
      },
      
      // Method 3 and Comvination
      async descendantSelectorbySemanticsLabelbySemanticsLabel_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }), Data);
      },
      async descendantSelectorbySemanticsLabelByValueKey_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byValueKey(secondSelector)
        }), Data);
      },
      async descendantelectorbySemanticsLabelbyText_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byText(secondSelector)
        }), Data);
      },
      async descendantSelectorbySemanticsLabelbyType_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byType(secondSelector)
        }), Data);
      },


      // Method 4 and Comvination
      async descendantSelectorByTextByText_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byText(secondSelector)
        }), Data);
      },
      async descendantSelectorByTextByValueKey_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byValueKey(secondSelector)
        }), Data);
      },
      async descendantSelectorByTextbySemanticsLabel_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }), Data);
      },
      async descendantSelectorByTextbyType_SendData(driver, firstSelector, secondSelector, Data)
      {
          await driver.elementSendKeys(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byType(secondSelector)
        }), Data);
      },
}