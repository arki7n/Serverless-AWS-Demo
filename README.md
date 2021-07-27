# Serverless-AWS-Demo
Serverless package demo for lambda, dynamodb, apigateway,cloudwatch cron expression

The current lambda function does 2 things:

1) Fetch news data and store in dynamodb table
2) Fetch stores news data.

Additional logic to do pagination, word searching from body article, scehma optimization seems to need more time.


Serverless: Stack update finished...
Service Information
service: guardian-news-service
stage: dev
region: us-east-1
stack: guardian-news-service-dev
resources: 18
api keys:
  None
endpoints:
  GET - https://n1vp1v7igk.execute-api.us-east-1.amazonaws.com/dev/news
functions:
  guardian-news-service-scrap: guardian-news-service-dev-guardian-news-service-scrap
  guardian-news-service-reader: guardian-news-service-dev-guardian-news-service-reader
layers:
  None
