var clpPageLocators = require("../../resources/clpPageLocators");

describe.skip('Testing - Before Each in describe section', function() {

    it('Should have a title', function() {
        expect(browser.getTitle()).to.contain("Women's Clothes & Fashion");
    });

    it('Should have text women in breadcrumb', function() {
        expect(browser.element(clpPageLocators.breadcrumb).getText()).to.be.equal("Women");
    });

    beforeEach(function(done) {
        browser.url('https://www.johnlewis.com/women/c50000298?rdr=1');
    });

});