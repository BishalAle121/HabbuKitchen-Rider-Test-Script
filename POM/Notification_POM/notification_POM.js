const VerifyDisplay = require("../../helpers/CheckElementExistTimer/checkElementExistSelector");
const ScrollAppScreen = require("../../helpers/scrollScreenUp_and_Down");
const HomeScreen = require("../home_POM/home_POM");

class Notification_POM
{
    constructor(driver)
    {
        this.driver = driver;
        this.scrollAppScreen = new ScrollAppScreen(this.driver);
        this.home_POM = new HomeScreen(this.driver);
    }

    async isNotificationDisplayed()
    {
       return await VerifyDisplay.checkElementExistBySementiclabel(this.driver, "Notification");
    }

    async ScrollNotificationUp_and_Down()
    {
        await this.scrollAppScreen.scrollAppScreenUp_and_Down(0, -800, "scrollNotification");
        await this.scrollAppScreen.scrollAppScreenUp_and_Down(0, 800, "scrollNotification");
    }

}module.exports = Notification_POM;