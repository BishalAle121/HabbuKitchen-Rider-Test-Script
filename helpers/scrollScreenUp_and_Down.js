const find = require('appium-flutter-finder');
const expect = require('chai').expect;

class ScrollAppScreen
{
    constructor(driver)
    {
        this.driver = driver;
    }
    async scrollAppScreenUp_and_Down(dx, dy, elementSelector) {
        try {
          await this.driver.execute('flutter:scroll', find.byValueKey(elementSelector), {
            dx: dx, 
            dy: dy,
            durationMilliseconds: 500,
            frequency: 30
          });
          console.log(`Scrolled Column Service List by dx: ${dx}, dy: ${dy}`);
        } catch (error) {
          console.log("Error: ", error);
        }
      }
}
module.exports = ScrollAppScreen;