const ButtonClick = require("../../helpers/ClickButton/selector_and_click_btn");
const VerifyDisplay = require("../../helpers/CheckElementExistTimer/checkElementExistSelector");

class Delivery_POM
{
    constructor(driver)
    {
        this.driver = driver;
    }

    async tabtoAcceptDeliveryOrder()
    {
        await ButtonClick.clickButtonByValueKey(this.driver , "acceptDeliveryOrder");
    }



    async verifyOrderDetails()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Order Details");
    }
    

    async tabtoStartPickup()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Start pickup");
    }


    //After Start Pickup tab Proceed
    async tabtoProceed()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Proceed");
    }


    async tabtoRichedPickup()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Reached pickup");
    }



    async tabtoPickup()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Pick up");
    }

    async tabtoContinueDelivery()
    {
        // const verify = await VerifyDisplay.checkElementExistBySementiclabel(this.driver, "Continue Delivery");
        // if(verify)
        // {
        // }
        // else
        // {
        //     console.log("Not found the text Continue Delivery");
        // }
        // await ButtonClick.clickButtonbySemanticsLabelTimer(this.driver, "Continue Delivery");

        await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "continueDelivery");
    }

    async tabtoCancleDelivery()
    {
        // await ButtonClick.clickButtonbyValueKeyTimer(this.driver, "cancelDelivery");
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Cancel");
    }

    async tabDelivery()
    {
        await ButtonClick.clickButtonbySemanticsLabel(this.driver, "Deliver");
    }
}module.exports = Delivery_POM;