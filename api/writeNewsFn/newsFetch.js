const https = require('https')

async function get_page(url) {
    let data = "";
    return new Promise((resolve) => {
        https.get(url, res => {

            res.on('data', chunk => { data += chunk }) 

            res.on('end', () => {

               resolve((data));

            })
        }) 
    })
}

async function getNews() {
    const result = await get_page('https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=Olympics&api-key='+process.env.APIKEY)
    .then(JSON.parse)
    .then(response => {
        return response;
    });
  
    let resultSet = [];
    result.response.results.forEach(function(item) {
      resultSet.push({
        webPublicationDate: item.webPublicationDate,
        webTitle: item.webTitle,
        webUrl: item.webUrl,
        fields: {
          thumbnail: item.fields.thumbnail,
        }
      });
    });
    return Promise.resolve(resultSet);
  }

module.exports = {
    getNews
}