const puppeteer = require("puppeteer");
const db = require("../models");
const GS25 = db.GS25;

// ---------------- 웹 크롤링 작업 ----------------------------------------------------------------

// GS25_Fresh Food URL
const FreshUrl = "http://gs25.gsretail.com/gscvs/ko/products/youus-freshfood";
// GS25_PB URL
const DifferentUrl =
  "http://gs25.gsretail.com/gscvs/ko/products/youus-different-service";

// 상품 정보를 db에 저장하는 함수
// exports.scrapeSave = async () => {
//   // 1. scrapeProducts함수의 매개변수로 전달하기 위해 배열에 url을 넣어준다.
//   const urls = [FreshUrl, DifferentUrl];
//   // 크롤링할 url을 순차적으로 진행하기 위해 반복문에서 작업
//   for (const url of urls) {
//     console.log("---------------", url);
//     // 2. 웹 크롤링을 수행하는 함수를 실행하고, 반환된 값을 products에 담는다.
//     const products = await scrapeProducts(url);
//     console.log("@@@@@@@@@@@", products);
//     // 3. 웹 크롤링으로 얻은 정보를 saveDB함수의 매개변수로 전달해 DB에 담는다.
//     await saveDB(products);
//   }
// };

exports.scrapeSave = async () => {
  // ❗❗여기에 객체로 url 추가하면 된다❗❗
  const urls = [
    { url: FreshUrl, category: "FF" },
    { url: DifferentUrl, category: "PB" },
  ];

  for (const urlData of urls) {
    console.log("---------------", urlData.url);
    const products = await scrapeProducts(urlData.url);
    console.log("@@@@@@@@@@@", products);
    await saveDB(products, urlData.category);
  }
};

// 웹 크롤링을 통해 상품 정보를 저장하는 함수
const scrapeProducts = async (url) => {
  // 브라우저의 인스턴스 생성
  const browser = await puppeteer.launch({ headless: true });
  // 새로운 페이지를 열어 줌
  const page = await browser.newPage();
  // 타겟 URL로 이동
  await page.goto(url);
  // // 세부페이지가 로딩에 시간이 걸릴수도 있으니 기다려봐야하나? 근데 없어도 될듯?
  // await page.waitForTimeout(3000);

  // // await page.waitForSelector(productSelector);

  // await page.waitForFunction(
  //   `document.querySelectorAll(".prod_box").length > 0`
  // );

  // 각 상품에 대한 가장 부모영역의 css 값
  const productSelector = ".prod_box";
  // 각 상품에 대해 원하는 정보를 반환. 반환된 결과물은 products 배열로 저장
  const products = await page.$$eval(productSelector, (el, url) => {
    return el.map((e) => {
      const img = e.querySelector("p.img > img").getAttribute("src");
      const title = e.querySelector("p.tit").textContent;
      const price = e.querySelector("p.price > span.cost").textContent;

      return { title, img, price };
    });
  });
  // const products = await page.$$eval(productSelector, (el) => {
  //   return el.map((e) => {
  //     const img = e.querySelector("p.img > img").getAttribute("src");
  //     const title = e.querySelector("p.tit").textContent;
  //     const price = e.querySelector("p.price > span.cost").textContent;

  //     return { title, img, price };
  //   });
  // });
  // 웹 크롤링이 끝나면 브라우저 인스턴스를 닫는다.
  await browser.close();

  return products;
};

// 크롤링해온 정보를 db에 저장하는 함수. 크롤링한 정보를 매개변수로 받는다.
const saveDB = async (products, category) => {
  // 각 상품 정보를 처리하면서 db에 각 상품에 대한 정보를 저장한다.
  for (const product of products) {
    await GS25.create({
      name: product.title,
      img: product.img,
      price: product.price,
      category: category,
    });
  }
};

// -----------------------------------------------------------------------------------------------

exports.viewProducts = async (req, res) => {
  try {
    const products = GS25.findAll({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
