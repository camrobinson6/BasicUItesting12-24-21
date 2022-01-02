const {Builder, Capabilities, By, until} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('https://alpha.yoodlize.com/')
})

afterAll(async () => {
    await driver.quit()
})
test("Yoodlize See All buttons 1", async () => {
  
    let popUpButton = await driver.findElement(By.xpath('//div[text()="continue to site"]'))
    await popUpButton.click()
    
    let seeAllButtons = []
    
    let seeAllButtons = await driver.findElement(By.xpath('//*[text()="See all"]'))

    await seeAllButtons[0].click()

    await driver.wait(until.elementLocated(By.xpath('//div[text()="category: Recreational Vehicles"]')))
    
    let category = await driver.findElement(By.xpath('//div[text()="category: Recreational Vehicles"]'))

    let categoryText = await category.getText()

    expect(categoryText).toContain('Recreational Vehicles')
})




test("Yoodlize See All buttons 2", async () => {
  
    
    let seeAllButtons = []
   
    seeAllButtons = await driver.findElement(By.xpath('//*[text()="See all"]'))

    await seeAllButtons[1].click()

    await driver.wait(until.elementLocated(By.xpath('//div[text()="category: Outdoor Gear"]')))
    
    let category = await driver.findElement(By.xpath('//div[text()="category: Outdoor Gear"]'))

    let categoryText = await category.getText()

    expect(categoryText).toContain('Outdoor Gear')

    
})
