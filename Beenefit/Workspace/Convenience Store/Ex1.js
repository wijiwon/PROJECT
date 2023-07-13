const puppeteer = require('puppeteer');

let dataArr=[];
async function getElementAtIndex(page, index) {
    const data = await page.evaluate((index) => {
      const element = document.querySelector(#dataTable > div.prodListWrap > ul > li:nth-child(${index}));
      return element ? element.innerHTML : 'No element found';
    }, index);

    return data;
  }

(async () => {

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://cu.bgfretail.com/product/product.do?category=product&depth2=4&sf=N%27);

    // const data = await page.evaluate(() => {
    //     const element = document.querySelector(#dataTable > div.prodListWrap > ul > li:nth-child(1));
    //     return element ? element.innerHTML : 'No element found';
    //   });


      // Example usage
      await page.waitForTimeout(5000);

      for (let i = 1; i <= 50; i++) {
        const elementData = await getElementAtIndex(page, i);
        console.log(Element ${i}: ${elementData});
      }

    // dataArr.push(data)
    // console.log(data);
    await page.waitForTimeout(150000);
    await browser.close();
})();