const find = require('appium-flutter-finder');

module.exports =
{
    // Method 1 byValueKey()
    async descendantverifyDisplaybyValueKeytobyValueKey(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.byValueKey(parentSelector),
               matching: find.byValueKey(findchildSelector)
           })
        );
    },
    async descendantverifyDisplaybyValueKeytobyText(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.byValueKey(parentSelector),
               matching: find.byText(findchildSelector)
           })
        );
    },
     async descendantverifyDisplaybyValueKeytobyType(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.byValueKey(parentSelector),
                matching: find.byType(findchildSelector)
            })
         );
     },
     async descendantverifyDisplaybyValueKeytobySemanticsLabel(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.byValueKey(parentSelector),
                matching: find.bySemanticsLabel(findchildSelector)
            })
         );
     },



    //  Method 2 byText()
    async descendantverifyDisplaybyTexttobyText(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.byText(parentSelector),
               matching: find.byText(findchildSelector)
           })
        );
    },
    async descendantverifyDisplaybyTexttobyValueKey(driver, parentSelectorr, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.byText(parentSelectorr),
               matching: find.byValueKey(findchildSelector)
           })
        );
    },
     async descendantverifyDisplaybyTexttobyType(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.byText(parentSelector),
                matching: find.byType(findchildSelector)
            })
         );
     },
     async descendantverifyDisplaybyTexttobySemanticsLabel(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.byText(parentSelector),
                matching: find.bySemanticsLabel(findchildSelector)
            })
         );
     },

     
    //  Method 3 byType()
    async descendantverifyDisplaybyTypetobyType(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.byType(parentSelector),
               matching: find.byType(findchildSelector)
           })
        );
    },
    async descendantverifyDisplaybyTypetobyValueKey(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.byType(parentSelector),
               matching: find.byValueKey(findchildSelector)
           })
        );
    },
     async descendantverifyDisplaybyTypetobyText(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.byType(parentSelector),
                matching: find.byText(findchildSelector)
            })
         );
     },
     async descendantverifyDisplaybyTypetobySemanticsLabel(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.byType(parentSelector),
                matching: find.bySemanticsLabel(findchildSelector)
            })
         );
     },

     
    //  Method 4 bySemanticsLabel()
    async descendantverifyDisplaybySemanticsLabeltobySemanticsLabel(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.bySemanticsLabel(parentSelector),
               matching: find.bySemanticsLabel(findchildSelector)
           })
        );
    },
    async descendantverifyDisplaybySemanticsLabeltobyValueKey(driver, parentSelector, findchildSelector)
    {
        await driver.getElementText(
           find.descendant({
               of: find.bySemanticsLabel(parentSelector),
               matching: find.byValueKey(findchildSelector)
           })
        );
    },
     async descendantverifyDisplaybySemanticsLabeltobyType(driver, parentSelector, findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.bySemanticsLabel(parentSelector),
                matching: find.byType(findchildSelector)
            })
         );
     },
     async descendantverifyDisplaybySemanticsLabeltobyText(driver, parentSelector,findchildSelector)
     {
         await driver.getElementText(
            find.descendant({
                of: find.bySemanticsLabel(parentSelector),
                matching: find.byText(findchildSelector)
            })
         );
     }
}