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

    callback(null, result);
  } catch (err) {
    callback(err);
  }
};