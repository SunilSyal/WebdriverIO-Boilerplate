var SMALL = "small";
var ALL = "all";
var XSMALL = "xsmall";

exports.config = {

    host: 'localhost',
    port: 4444,

    specs: [
        'spec/**/' + ALL + '.*.spec.js'
    ],

    services: ['selenium-standalone'],

    // Patterns to exclude.
    exclude: [
        'spec/multibrowser/**',
        'spec/mobile/**'
    ],

    maxInstances: 3,

    capabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'chrome',
        width: SMALL,
        specs: [
            'spec/**/*' + SMALL + '.*.spec.js'
        ],
    }, {
        browserName: 'firefox',
        exclude: [
            'spec/sample*.*'
        ],
    }],

    sync: true,
    reporters: ['spec'],

    before: function(capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
        browser.url('http://thetutorialhub.com/main');

        switch (capabilities.width) {
            case SMALL:
                browser.setViewportSize({
                    width: 480,
                    height: 760
                })
                break;
        }
    }
}
