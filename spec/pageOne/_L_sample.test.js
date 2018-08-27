var sampleFunctions = require("../../common/sampleFunctions");
var homePageLocators =require("../../resources/homePageLocators");
var plpPageLocators = require("../../resources/plpPageLocators");

describe('Sample Journey', function() {

    before(function() {
        browser.url(domainName + '/');
    })

    it('should have the correct title', function() {
        expect(browser.getTitle()).to.contain('John Lewis');

    });

    it('should run search - demo for reusable code', function() {
        sampleFunctions.globalSearch("dress");
    });

});

describe('Long test case ', function() {

    before(function() {
        browser.url(domainName + '/');
    })

    it('should pass sample test', function() {
        let searchItem = 'dress';

        // Reusing search scenario 
        sampleFunctions.globalSearch(searchItem);
        expect(browser.getTitle()).to.contain(searchItem); 

        expect(browser.getTitle()).to.contain(searchItem); 
        let result = browser.element(plpPageLocators.searchHeading).getText();
        expect(result).to.contain(searchItem);

        // Hover over the first product image and then to the quick look button
        browser.moveToObject(plpPageLocators.productImage);
        browser.moveToObject(plpPageLocators.quickView);
        browser.click(plpPageLocators.quickView);

        // We can drop this - this is optional for demo purpose
        browser.waitForVisible(plpPageLocators.quickViewContainer);
        
        // This is important as the popup contnet is loading async 
        browser.waitForVisible(plpPageLocators.addToBasketCTA);
        browser.moveToObject(plpPageLocators.addToBasketCTA);

        // Button title before a size is selected
        expect(plpPageLocators.addToBasketCTABtnElement.getText()).to.contain('Choose a size first');

        browser.click(plpPageLocators.sizeLink);
        // Button title after a size is selected
        expect(plpPageLocators.addToBasketCTABtnElement.getText()).to.contain('Add to basket');
    });

});
