const BaseTest = require("../../../Config/baseTest");
const {expect} = require("chai");
const ChooseVechicle_POM = require("../../../POM/home_POM/choose_Vehicle_POM");

describe("Unit Test: Notification operation", async function(){
    let test, selectVehicle_POM;
    this.timeout(60000);
    before(async function(){
        test = new BaseTest();
        await test.init('android');
        selectVehicle_POM = new ChooseVechicle_POM(test.driver);
    });
    it("Should select Vehicle", async function(){
        const verifSelectVehicleScreen =  await selectVehicle_POM.verifyVehicleChoosePopupScreen();
        if(verifSelectVehicleScreen)
        {
            expect(verifSelectVehicleScreen).to.be.true;
        }
        await selectVehicle_POM.selectVehicle();
        await selectVehicle_POM.tabtoSelectVehicle();
    });
   
});