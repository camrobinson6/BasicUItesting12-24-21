const {Builder, Capabilities, By} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("Google Search Test", async () => {
    await driver.get('https://www.google.com/')

    // await driver.findElement(By.css('[name="q]')).sendKeys("Inception\n")
    let searchBar = await driver.findElement(By.css('[name="q"]'))

    await searchBar.sendKeys("Tenet\n")

    await driver.sleep(5000)

    await driver.quit()
})