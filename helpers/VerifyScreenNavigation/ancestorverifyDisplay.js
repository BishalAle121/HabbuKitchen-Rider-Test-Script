const find = require('appium-flutter-finder');

module.exports =
{
    // Method 1 byValueKey()
    async ancestorverifyDisplaybyValueKeytobyValueKey(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.byValueKey(childSelector),
               matching: find.byValueKey(findParentSelector)
           })
        );
    },
    async ancestorverifyDisplaybyValueKeytobyText(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.byValueKey(childSelector),
               matching: find.byText(findParentSelector)
           })
        );
    },
     async ancestorverifyDisplaybyValueKeytobyType(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.byValueKey(childSelector),
                matching: find.byType(findParentSelector)
            })
         );
     },
     async ancestorverifyDisplaybyValueKeytobySemanticsLabel(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.byValueKey(childSelector),
                matching: find.bySemanticsLabel(findParentSelector)
            })
         );
     },



    //  Method 2 byText()
    async ancestorverifyDisplaybyTexttobyText(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.byText(childSelector),
               matching: find.byText(findParentSelector)
           })
        );
    },
    async ancestorverifyDisplaybyTexttobyValueKey(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.byText(childSelector),
               matching: find.byValueKey(findParentSelector)
           })
        );
    },
     async ancestorverifyDisplaybyTexttobyType(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.byText(childSelector),
                matching: find.byType(findParentSelector)
            })
         );
     },
     async ancestorverifyDisplaybyTexttobySemanticsLabel(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.byText(childSelector),
                matching: find.bySemanticsLabel(findParentSelector)
            })
         );
     },

     
    //  Method 3 byType()
    async ancestorverifyDisplaybyTypetobyType(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.byType(childSelector),
               matching: find.byType(findParentSelector)
           })
        );
    },
    async ancestorverifyDisplaybyTypetobyValueKey(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.byType(childSelector),
               matching: find.byValueKey(findParentSelector)
           })
        );
    },
     async ancestorverifyDisplaybyTypetobyText(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.byType(childSelector),
                matching: find.byText(findParentSelector)
            })
         );
     },
     async ancestorverifyDisplaybyTypetobySemanticsLabel(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.byType(childSelector),
                matching: find.bySemanticsLabel(findParentSelector)
            })
         );
     },

     
    //  Method 4 bySemanticsLabel()
    async ancestorverifyDisplaybySemanticsLabeltobySemanticsLabel(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.bySemanticsLabel(childSelector),
               matching: find.bySemanticsLabel(findParentSelector)
           })
        );
    },
    async ancestorverifyDisplaybySemanticsLabeltobyValueKey(driver, childSelector, findParentSelector)
    {
        await driver.getElementText(
           find.ancestor({
               of: find.bySemanticsLabel(childSelector),
               matching: find.byValueKey(findParentSelector)
           })
        );
    },
     async ancestorverifyDisplaybySemanticsLabeltobyType(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.bySemanticsLabel(childSelector),
                matching: find.byType(findParentSelector)
            })
         );
     },
     async ancestorverifyDisplaybySemanticsLabeltobyText(driver, childSelector, findParentSelector)
     {
         await driver.getElementText(
            find.ancestor({
                of: find.bySemanticsLabel(childSelector),
                matching: find.byText(findParentSelector)
            })
         );
     }
}