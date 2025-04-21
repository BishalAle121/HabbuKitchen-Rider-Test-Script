const find = require('appium-flutter-finder');
const { expect } = require('chai');
const fs = require('fs');
const path = require('path');

class Screenshot {
    constructor(driver) {
        this.driver = driver;
        this.count = 1;
    }

    async takeScreenshot_ErrorOccor() {
        try {
            const screenshot = await this.driver.takeScreenshot(); // Correct method name
            console.log('Screenshot taken');
            
            const screenshotDir = path.join(__dirname,'..','screenshots'); 
            console.log("File Location Screeen Shots : "+screenshotDir);

            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true }); // Create folder if it doesn't exist
            }
    
            // Save the screenshot inside the folder
            const screenshotPath = path.join(screenshotDir, `screenshot${this.count++}.png`);
            // await this.driver.saveScreenshort();

            // Save the screenshot to a file
            fs.writeFileSync(screenshotPath, screenshot, 'base64');
            console.log(`Screenshot saved to screenshot${this.count}.png`);
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
    }
}

module.exports = Screenshot;
