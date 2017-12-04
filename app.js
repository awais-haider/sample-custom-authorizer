
const generatePolicy = (principalId, effect, resource) => ({
  'principalId': principalId,
  'policyDocument': {
    'Version': '2012-10-17',
    'Statement': [{
      'Action': 'execute-api:Invoke',
      'Effect': effect,
      'Resource': resource
    }]
  }
})

const authorize = (event, context, callback) => {
  const {authorizationToken: token} = event
  console.log(`Received token ${token}, remove this log message before production`)
  callback(null, generatePolicy('user', 'Allow', event.methodArn))
}

module.exports = { handler: authorize }
