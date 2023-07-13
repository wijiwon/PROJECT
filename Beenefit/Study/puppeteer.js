
// 1. puppeteer 설치
// npm install puppeteer

// 2. 모듈 불러오기
const puppeteer = require('puppeteer');

// 3. 비동기함수로 작업을 진행한다.
    // puppeteer 메서드들이 대부분 promise를 반환하기 때문에 비동기 처리를 할 수 있는 함수 내에서 작업해야 한다.
(async () => {
  // 브라우저 창 열기
  // puppeteer.launch : 브라우저의 인스턴스를 생성한다.
    // 해당 인스턴스는 브라우저 행동의 시작점으로 사용되며, 여기에 새로운 페이지를 생성하거나 다른 작업을 수행할 수 있다.
  const browser = await puppeteer.launch();
  // browser.newPage : 새로운 페이지를 열어준다.
  const page = await browser.newPage();

  // 두 메서드는 promise를 반환하기 때문에 비동기처리가 필요하다.

  // 타겟 URL로 이동
  // 페이지 인스턴스를 통해 원하는 웹사이트로 이동한다.
  await page.goto('http://example.com');

  // 원하는 데이터를 선택하는 적절한 셀렉터를 찾아야 합니다.
  const title = await page.$eval('h1', el => el.textContent);
  console.log(title);
  
  // 제품 정보를 스크레이핑
  const productInfo = await page.$eval('.product-info', el => el.innerText); // 제품정보 선택자 변경 필요함

  console.log(productInfo);

  // 브라우저 닫기
  await browser.close();
})();



const express = require('express');
const app = express();
const port = 3000;

app.get('/products', async (req, res) => {
  // 위에서 작성한 크롤링 코드를 여기에 삽입 및 작성
  const productInfo = await getCrawledProductData();

  res.send(productInfo);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function getCrawledProductData() {
  // 크롤링 코드를 작성
}










const puppeteer = require('puppeteer');

let dataArr=[];
async function getElementAtIndex(page, index) {
    const data = await page.evaluate((index) => {
      const element = document.querySelector(`#dataTable > div.prodListWrap > ul > li:nth-child(${index})`);
      return element ? element.innerHTML : 'No element found';
    }, index);
    
    return data;
  }
  
(async () => {

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://cu.bgfretail.com/product/product.do?category=product&depth2=4&sf=N');

    // const data = await page.evaluate(() => {
    //     const element = document.querySelector(`#dataTable > div.prodListWrap > ul > li:nth-child(1)`);
    //     return element ? element.innerHTML : 'No element found';
    //   });
    

      // Example usage
      await page.waitForTimeout(5000);

      for (let i = 1; i <= 50; i++) {
        const elementData = await getElementAtIndex(page, i);
        console.log(`Element ${i}: ${elementData}`);
      }
      
    // dataArr.push(data)
    // console.log(data);
    await page.waitForTimeout(150000);
    await browser.close();
})();