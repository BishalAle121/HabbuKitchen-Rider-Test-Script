module.exports = {
  androidCaps: {
    platformName: 'android',
        'appium:deviceName': 'emulator-5554',  // Replace with `adb devices` output
        'appium:platformVersion': '15',  // Replace with your device’s Android version
        'appium:automationName': 'Flutter',
        'appium:app': "C:/NETSPEQ_All_Auto_Test/Habbu-Kitchen-Rider/build/app/outputs/flutter-apk/app-debug.apk",
        'appium:noReset': true,

    //   platformName: 'Android',
    //   'appium:deviceName': 'RZCW7278DEL',  // Replace with `adb devices` output
    //   'appium:platformVersion': '14',  // Replace with your device’s Android version
    //   'appium:automationName': 'Flutter',
    // //   'appium:app': "C:/Appium_Roadmap_Practice/Flutter_Testing_App/testing_app/build/app\outputs/apk\debug/app-debug.apk",
    //   'appium:appPackage': 'com.netspeq.testing_app',  // Use this package name
    //   'appium:appActivity': '.MainActivity ',
    //   'appium:noReset': true,
    //   'appium:udid': 'RZCW7278DEL',  // Use device ID from `adb devices`
    //   'appium:appPackage': 'com.netspeq.cc21delivery',  // Use this package name
    //   'appium:appActivity': '.MainActivity',
  },
  iosCaps: {
      platformName: 'iOS',
      'appium:platformVersion': '12.2',
      'appium:deviceName': 'iPhone X',
      'appium:noReset': true, 
      'appium:app': 'Runner.zip',
      'appium:automationName': 'Flutter',
  }
}
