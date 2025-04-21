const VerifyDisplay = require("../../helpers/CheckElementExistTimer/checkElementExistSelector");
const ButtonClick = require("../../helpers/ClickButton/selector_and_click_btn");
class ChooseVechicle_POM
{
   constructor(driver)
   {
       this.driver = driver;
   }

   async verifyVehicleChoosePopupScreen()
   {
      return await VerifyDisplay.checkElementExistBySementiclabel(this.driver, "Choose a vehicle");
   }

   async selectVehicle()
   {
       await ButtonClick.clickButtonByValueKey(this.driver, "selectVehicle0");
   }

   async tabtoSelectVehicle()
   {
       await ButtonClick.clickButtonByValueKey(this.driver, "tabSelectVehicle");
   }
}module.exports = ChooseVechicle_POM;