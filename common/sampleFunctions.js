var homePageLocators = require("../resources/homePageLocators");
var plpPageLocators = require("../resources/plpPageLocators");

module.exports = {
    globalSearch
};

// A search will always be same for all test cases - hence writing a reusable function
function globalSearch(param) {

    // Adding a couple of scroll events for demo purpose
    browser.scroll(homePageLocators.footer);
    browser.scroll(homePageLocators.searchInput);

    browser.setValue(homePageLocators.searchInput, param);

    // Clicking submit loads a new page but we need not handle this async operation
    browser.click(homePageLocators.searchSubmit);
    
    // This line will be executed only when new page is loaded - that is the beauty of this framework
    expect(browser.getTitle()).to.contain(param);

    expect(browser.getText(plpPageLocators.searchItem)).to.contain(param);
}
