'use strict';

var AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1"
});

var ddb = new AWS.DynamoDB.DocumentClient();
var table = "guardian-news-service-dev";

module.exports.handler = async (event, context, callback) => {
  let result;
  try {
    result = await ddb.scan({
      TableName: table,
      Limit: 10
    }).promise();
    return {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(result),
  }

  } catch (err) {
    callback(err);
  }
};