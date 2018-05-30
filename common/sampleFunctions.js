var homePageLocators = require("../resources/homePageLocators");
var plpPageLocators = require("../resources/plpPageLocators");

module.exports = {
    globalSearch
};

function globalSearch(param) {
    browser.scroll(homePageLocators.footer);
    browser.scroll(homePageLocators.searchInput);
    browser.setValue(homePageLocators.searchInput, param);
    browser.click(homePageLocators.searchSubmit);
    expect(browser.getTitle()).to.contain(param);
    expect(browser.getText(plpPageLocators.searchItem)).to.contain(param);
}
