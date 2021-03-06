/**
 * Stores all the configuration details for the server
 *
 */

var environment = {};

environment.staging  =  {
    httpPort: 3000,
    httpsPort: 3001,
    hashingSecret: 'thisIsASecret',
    publishableApiKey: '<STRIPE_PUBLIC_API_KEY>',
    secretApiKey: '<STRIPE_SECRET_API_KEY>',
    mailgunApiKey: '<MAILGUN_API_KEY>',
    mailgunUser: 'api',
    mailSource: 'Mailgun Sandbox <postmaster@sandbox859670e489f74e278b0d6d57cc96a415.mailgun.org>',
    templateGlobals:{
        appName: 'Online Pizza Ordering',
        companyName: 'NotARealCompany Inc.',
        yearCreated: '2018',
        baseUrl: 'http://localhost:3000/'
    }
}

environment.production = {
    httpPort: 5000,
    httpsPort: 5001,
    hashingSecret: 'thisIsASecret',
    publishableApiKey: '<STRIPE_PUBLIC_API_KEY>',
    secretApiKey: '<STRIPE_SECRET_API_KEY>',
    mailgunApiKey: '<MAILGUN_API_KEY>',
    mailgunUser: 'api',
    mailSource: 'Mailgun Sandbox <postmaster@sandbox859670e489f74e278b0d6d57cc96a415.mailgun.org>',
    templateGlobals:{
        appName: 'Online Pizza Ordering',
        companyName: 'NotARealCompany Inc.',
        yearCreated: '2018',
        baseUrl: 'http://localhost:5000/'
    }
}

var currentEnv = typeof(process.env.NODE_ENV) === 'string' ?
process.env.NODE_ENV.toLowerCase() : '';

var serverConfig = typeof(environment[currentEnv]) === 'object' ?  environment[currentEnv] : environment.staging;

module.exports = serverConfig