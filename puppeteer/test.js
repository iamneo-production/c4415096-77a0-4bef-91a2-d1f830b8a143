const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-daadfcfcefebafcffebae.examlyiopb.examly.io/astrozone');
        // await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#button', {timeout : 1500});

        console.log('TESTCASE:test_case1:success');
    }
     catch(e){
		console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-daadfcfcefebafcffebae.examlyiopb.examly.io/astrozone');
        // await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#button', {timeout : 1500});
		await page.click('#button');
		await page.waitForSelector('#home', {timeout : 1500});
		
        console.log('TESTCASE:test_case2:success');
    }
     catch(e){
		console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-daadfcfcefebafcffebae.examlyiopb.examly.io/astrozone');
        // await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#button', {timeout : 1500});
		await page.click('#button');
		await page.waitForSelector('#inp1', {timeout : 1200});
		await page.waitForSelector('#inp2', {timeout : 1200});
		await page.waitForSelector('#inp3', {timeout : 1200});
		await page.waitForSelector('#inp4', {timeout : 1200});
		await page.waitForSelector('#inp5', {timeout : 1200});
		
        console.log('TESTCASE:test_case3:success');
    }
     catch(e){
		console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();