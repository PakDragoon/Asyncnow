const puppeteer = require("puppeteer")

const viewsData = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    "https://www.loom.com/share/5b920dc1375f43fa9b622ac0a6ba7c52"
  )
  // await page.waitForSelector(`[class*="header-content"] span:nth-child(2)`);
  await page.waitForNavigation(`[class*="header-content"] span:nth-child(2)`)
  let re = await page.evaluate(() => document.querySelector(`[class*="header-content"] span:nth-child(2)`))

  console.log(re)
  await browser.close()
}
viewsData()







// $x('(//span[@class="css-mrqdy5"])[1]')[0].innerText
// await page.waitForTimeout(4000)