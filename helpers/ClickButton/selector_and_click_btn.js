const find = require('appium-flutter-finder');

module.exports = {
    // Method 1 Click Button
    async clickButtonByText(driver, selectorName)
    {
        await driver.elementClick(find.byText(selectorName));
    },

    // Method 2 Click Button
    async clickButtonByValueKey(driver, selectorName)
    {
        await driver.elementClick(find.byValueKey(selectorName));
    },

    // Method 3 Click Button
    async clickButtonByType(driver, selectorName)
    {
        await driver.elementClick(find.byType(selectorName)); 
    },

    // Method 4 Click Button
    async clickButtonbySemanticsLabel(driver, selectorName)
    {
        await driver.elementClick(find.bySemanticsLabel(RegExp(selectorName)));
    },
    // Method 1 Click Button By Text
    async clickButtonByTextTimer(driver, selectorName) {
        const element = find.byText(selectorName);
        try {
            await driver.execute('flutter:waitFor', element, 1000);
            await driver.elementClick(element);
            return true;
        } catch (error) {
            console.error(`Failed to click "${selectorName}": ${error.message}`); 
            return false;
        }
    },

    // Method 2 Click Button By ValueKey
    async clickButtonbyValueKeyTimer(driver, selectorName) {
        const element = find.byValueKey(selectorName);

        try {
            await driver.execute('flutter:waitFor', element, 1000);
            await driver.elementClick(element);
            return true; // Success
        } catch (error) {
            console.error(`Failed to click "${selectorName}": ${error.message}`);
            return false; // Failure
        }
    },

    // Method 3 Click Button By Type
    async clickButtonByTypeTimer(driver, selectorName) {
        const element = find.byType(selectorName);
        try {
            await driver.execute('flutter:waitFor', element, 1000);
            await driver.elementClick(element);
            return true;
        } catch (error) {
            console.error(`Failed to click "${selectorName}": ${error.message}`);
            return false;
        }
    },

    // Method 3 Click Button By Type
    async clickButtonbySemanticsLabelTimer(driver, selectorName) {
        const element = find.bySemanticsLabel(RegExp(selectorName));

        try {
            await driver.execute('flutter:waitFor', element, 1000);
            await driver.elementClick(element);
        } catch (error) {
            console.log(`Button "${selectorName}" not found within 1000ms. Continuing...`);
            // The function exits gracefully without throwing an error
        }
    } 
}