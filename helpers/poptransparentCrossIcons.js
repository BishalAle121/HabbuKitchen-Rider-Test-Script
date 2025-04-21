const find = require('appium-flutter-finder');
const ButtonClick = require('../helpers/ClickButton/selector_and_click_btn');

class PopTransparentCrossIcons
{
    constructor(driver)
    {
        this.driver = driver;
    }
    async closeTransparent()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "transparentCrossPop");
    }
}
module.exports = PopTransparentCrossIcons;

// module.exports =
// {
//     async closeTransparent()
//     {
//         await ButtonClick.clickButtonbySemanticsLabel(this.driver, "transparentCrossPop");
//     }
// }