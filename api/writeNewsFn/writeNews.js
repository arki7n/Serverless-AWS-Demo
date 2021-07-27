'use strict';


var AWS = require("aws-sdk");
const newsService = require("./newsFetch");

AWS.config.update({
  region: "us-east-1"
});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var table = "guardian-news-service-dev";

module.exports.handler = async (event, context, callback) => {
  const result = await newsService.getNews();
  let dbItems = [];
  
  result.forEach(item => {
    dbItems.push({
      PutRequest: {
        Item: {
                 "webPublicationDate": { "S": item['webPublicationDate'] },
                 "webTitle": { "S": item['webTitle'] },
                 "webUrl": { "S": item['webUrl'] },
                 "thumbnail": { "S": item.fields.thumbnail }
          }
      }
    });
  });
  

  let params = {
      RequestItems: {
          'guardian-news-service-dev': dbItems
      }
  };
  let status;
  try {
      status = await ddb.batchWriteItem(params).promise();
      callback(null, status);
  } catch(err) {
      callback(err); 
  }
};