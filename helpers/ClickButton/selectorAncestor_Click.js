const find = require('appium-flutter-finder');
module.exports = 
{
    // Method 1 and Comvination
     async ancestorSelectorByValueKeyByValueKey_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.byValueKey(secondSelector)
       }));
     },
     async ancestorSelectorByValueKeyByText_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.byText(secondSelector)
       }));
     },
     async ancestorSelectorByValueKeybySemanticsLabel_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.bySemanticsLabel(secondSelector)
       }));
     },
     async ancestorSelectorByValueKeybyType_Click(driver, firstSelector, secondSelector)
     {
         await driver.elementClick(find.ancestor({
            of: find.byValueKey(firstSelector),
            matching: find.byType(secondSelector)
       }));
     },



      // Method 2 and Comvination
      async ancestorSelectorByTypeByType_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byType(firstSelector),
             matching: find.byType(secondSelector)
        }));
      },
      async ancestorSelectorByTpeByValueKey_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byType(firstSelector),
             matching: find.byValueKey(secondSelector)
        }));
      },
      async ancestorSelectorByTypebySemanticsLabel_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byType(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }));
      },
      async ancestorSelectorByTypebyText_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byType(firstSelector),
             matching: find.byText(secondSelector)
        }));
      },
      
      // Method 3 and Comvination
      async ancestorSelectorbySemanticsLabelbySemanticsLabel_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }));
      },
      async ancestorSelectorbySemanticsLabelByValueKey_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byValueKey(secondSelector)
        }));
      },
      async ancestorSelectorbySemanticsLabelbyText_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byText(secondSelector)
        }));
      },
      async ancestorSelectorbySemanticsLabelbyType_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.bySemanticsLabel(firstSelector),
             matching: find.byType(secondSelector)
        }));
      },


      // Method 4 and Comvination
      async ancestorSelectorByTextByText_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byText(secondSelector)
        }));
      },
      async ancestorSelectorByTextByValueKey_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byValueKey(secondSelector)
        }));
      },
      async ancestorSelectorByTextbySemanticsLabel_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.bySemanticsLabel(secondSelector)
        }));
      },
      async ancestorSelectorByTextbyType_Click(driver, firstSelector, secondSelector)
      {
          await driver.elementClick(find.ancestor({
             of: find.byText(firstSelector),
             matching: find.byType(secondSelector)
        }));
      },
}
