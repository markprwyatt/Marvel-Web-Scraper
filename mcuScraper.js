const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe";

module.exports = rp(url)
  .then(function(html) {
    let wikiURLs = [];
    for (let i = 0; i < 89; i++) {
      wikiURLs.push($("th > i > a[title]", html)[i].attribs.title);
    }

    const results = wikiURLs.filter(item => !item.includes("Cinematic"));
    return results;
  })
  .catch(function(err) {
    console.log(err);
  });
