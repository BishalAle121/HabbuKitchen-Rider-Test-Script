const BaseTest = require("../../../Config/baseTest");
const {expect} = require("chai");
const Delivery_POM = require("../../../POM/All_Delivery_POM/allDelivery_POM");

describe("Unit Test: Notification operation", async function(){
    let test, delivery_POM;
    this.timeout(60000);
    before(async function(){
        test = new BaseTest();
        await test.init('android');
        delivery_POM = new Delivery_POM(test.driver);
    });
    it("Should tab on Start Pickup", async function(){
        await delivery_POM.tabtoStartPickup();
    }); 

    it("Should tab to proceed", async function(){
        function delay(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(3000);
        await delivery_POM.tabtoProceed();
    }); 

    it("Should tab to Riched Pickup", async function(){
        function delay(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(3000);
        await delivery_POM.tabtoRichedPickup();
    }); 





    it("Should tab to Pickup", async function(){
        function delay(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(3000);
        await delivery_POM.tabtoPickup();
    });
    
    
    it("Should tab to Continue Delivery", async function(){
        function delay(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(3000);
        await delivery_POM.tabtoContinueDelivery();
    }); 

    it("Should tab to Proceed", async function(){
        function delay(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(3000);
        await delivery_POM.tabtoProceed();
    });

    it("Should tab to Delivery", async function(){
        function delay(ms)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(3000);
        await delivery_POM.tabDelivery();
    }); 
});