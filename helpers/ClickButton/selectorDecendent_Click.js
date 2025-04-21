const find = require('appium-flutter-finder');
module.exports = 
{
    // Method 1 byValueKey()
     async descendantSelectorByValueKeyByValueKey_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.byValueKey(secondSelector)
       }));
     },
     async descendantSelectorByValueKeyByText_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.byText(secondSelector)
       }));
     },
     async descendantSelectorByValueKeybySemanticsLabel_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.bySemanticsLabel(secondSelector)
       }));
     },
     async descendantSelectorByValueKeybyType_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.descendant({
            of: find.byValueKey(firstSelector),
            matching: find.byType(secondSelector)
       }));
     },



      // Method 2 byText()
      async descendantSelectorByTextByText_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byText(secondSelector)
        }));
      },
      async descendantSelectorByTextByValueKey_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byValueKey(secondSelector)
        }));
      },
      async descendantSelectorByTextbySemanticsLabel_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byText(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }));
      },
      async descendantSelectorByTextbyType_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byText(firstSelector),
             matching: find.byType(secondSelector)
        }));
      },
      
      // Method 3 bySemanticsLabel()
      async descendantSelectorbySemanticsLabelbySemanticsLabel_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }));
      },
      async descendantSelectorbySemanticsLabelByValueKey_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byValueKey(secondSelector)
        }));
      },
      async descendantSelectorbySemanticsLabelbyText_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byText(secondSelector)
        }));
      },
      async descendantSelectorbySemanticsLabelbyType_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byType(secondSelector)
        }));
      },


      // Method 4 byType()
      async descendantSelectorByTypetoByType_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byType(firstSelector),
             matching: find.byType(secondSelector)
        }));
      },
      async descendantSelectorByTypetoByValueKey_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byType(firstSelector),
             matching: find.byValueKey(secondSelector)
        }));
      },
      async descendantSelectorByTypetobySemanticsLabel_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byType(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }));
      },
      async descendantSelectorByTypetobyText_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.descendant({
             of: find.byType(firstSelector),
             matching: find.byText(secondSelector)
        }));
      },
}