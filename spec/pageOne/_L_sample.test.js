var sampleFunctions = require("../../common/sampleFunctions");
var homePageLocators =require("../../resources/homePageLocators");
var plpPageLocators = require("../../resources/plpPageLocators");

describe('Sparks Sign In Journey', function() {

    before(function() {
        browser.url(domainName + '/');
    })


    it('should have the correct title', function() {
        this.timeout(0);
        expect(browser.getTitle()).to.contain('John Lewis');

    });

    it('should accept the email and move to contact us page', function() {
        this.timeout(0);
        sampleFunctions.globalSearch("dress");
    });

});
