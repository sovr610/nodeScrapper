const puppeteer = require('puppeteer');

const express = require('express');

const cherrio = require('cherrio');

var compression = require('compression');

const pino_express = require('express-pino-logger');

const port = 3000;
const app = express();
app.use(compression());
const loggerPinoExpress = pino_express({
  prettyPrint: {
    colorize: true
  }
});
app.use(loggerPinoExpress);

async function main(website, cssClassSelector) {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(website); // The website you are gathering info

  const html = await page.content(); // get content from page via html

  const $ = cherrio.load(html); // set cherrio like how jquery works

  $(cssClassSelector).each((index, element) => console.log($(element).text())); // do some more stuff

  return 'data';
}

app.get('/getDataFromWebsite', async (req, res, next) => {
  try {
    main();
  } catch (e) {
    req.log.error(e);
    res.json({
      error: true
    });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;