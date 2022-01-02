const {Builder, Capabilities, By, until} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("Amazon Search Test", async () => {

    let searchBar = await driver.findElement(By.css('#twotabsearchtextbox'))
    let searchButton = await driver.findElement(By.css('nav-search-submit-button'))

    await searchBar.sendKeys("Lego Star Wars")

    await searchButton.click()

    let resultVerify = await driver.findElement(By.css('.a-color-state'))

    await driver.wait(until.elementLocated(By.css('.a-color-state')))

    let searchTerm = await resultVerify.getText()

    expect(searchTerm).toContain("Lego Star Wars")

    
    let firstResult = await driver.findElement(By.xpath('(//a/span[contains(text(),"LEGO Star Wars")])[1]'))

    await firstResult.click()


    await driver.wait(until.elementLocated(By.css('span[id="submit.add-to-cart-announce"]')))

    let addToCart = await driver.findElement(By.css('span[id="submit.add-to-cart-announce"]'))

    let add = await addToCart.getText()

    expect(add).toBe('Add to Cart')

    await driver.quit()
})