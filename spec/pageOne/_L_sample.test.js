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

describe.skip('M&S Exercise', function() {

    before(function() {
        browser.url('http://www.marksandspencer.com/c/women/');
    })


    it('should pass sample test', function() {
        expect(browser.getTitle()).to.contain('Womenswear');  
        browser.scroll('.spotlight-carousel');

        expect(browser.element('.spotlight-carousel').getText()).to.contain('Love It For Less');
        browser.scroll('footer');

        let email = 'abc@abc.com';
        browser.setValue('.email-input', email);

        browser.click('button[name="email-newsletter"]');
        expect(browser.getTitle()).to.contain('News Letter');

        browser.waitForExist('iframe[id="M173"]');

        let my_frame = $('iframe[id="M173"]').value;
        browser.frame(my_frame);

        browser.waitForExist('#mns-email');
        expect(browser.element('#mns-email').getValue()).to.contain(email);
    });

});
