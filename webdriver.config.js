var specs = require("./specs");
var specArr = specs.getSpecs(process.argv);
global.domainName = "https://www.johnlewis.com/";

var argsInfo = "Page:: " + specs.fnGetArgValue(process.argv, "-p") + ", Breakpoint:: " + specs.fnGetArgValue(process.argv, "-b");

var capabilities = {
  large: [
    {
      name: "Browser:: Chrome, " + argsInfo,
      browserName: "chrome"
    }
  ],

  medium: [
    {
      name: "Browser:: Chrome, " + argsInfo,
      browserName: "chrome",
      chromeOptions: {
        mobileEmulation: {
          deviceMetrics: {
            width: 992,
            height: 1024,
            pixelRatio: 2
          }
        }
      }
    }
  ],

  small: [
    {
      name: "Browser:: Chrome, " + argsInfo,
      browserName: "chrome",
      chromeOptions: {
        mobileEmulation: {
          deviceMetrics: {
            width: 768,
            height: 1024,
            pixelRatio: 2
          }
        }
      }
    }
  ],

  xsmall: [
    {
      name: "Browser:: Chrome, " + argsInfo,
      browserName: "chrome",
      chromeOptions: {
        mobileEmulation: {
          deviceMetrics: {
            width: 480,
            height: 768,
            pixelRatio: 2
          }
        }
      }
    }
  ]
};

exports.config = {
  host: "localhost",
  port: 4444,

  //user: "dsingh88",
  //key: "9db73e0a-5870-4055-80df-c5ae6304ce9a",

  specs: specArr,

  //services: ['selenium-standalone', 'sauce'],
  services: ["selenium-standalone"],

  sauceConnect: false,

  maxInstances: 10,

  waitforTimeout: 15000,

  capabilities: capabilities[specs.fnGetArgValue(process.argv, "-b")],

  sync: true,

  reporters: ["spec", "junit", "allure"],

  mochaOpts: {
    timeout: 99999999
  },

  reporterOptions: {
    junit: {
      outputDir: "./"
    },
    allure: {
      outputDir: "allure-results"
    }
  },

  before: function() {
    var chai = require("chai");
    var chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);
    global.expect = chai.expect;
    chai.Should();
    browser.url("https://www.johnlewis.com/women/c50000298?rdr=1");
  }
};
