# sample-custom-authorizer

This project simulates an always authorizing [Custom Authorizer](http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html).

## Deployment

1. First deploy the package to S3, to assist in the next deployment step.
```
aws cloudformation package \
    --template-file cf-deploy.json \
    --s3-bucket <artifact-bucket-here> \
    --output-template-file cf-deploy-packaged.yaml
```

2. Next, deploy the stack to AWS, so that it can be executed.
```
aws cloudformation deploy \
    --template-file cf-deploy-packaged.yaml \
    --stack-name sample-custom-authorizer \
    --capabilities CAPABILITY_IAM
```

3. The cloudformation template outputs a variable called `AuthorizerARN` which contains the ARN of this lambda, which [follow-on lambda's](https://github.com/ocelotconsulting/lambda-gateway-hello) can use for authorization from the AWS API Gateway.
