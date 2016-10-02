describe('Testing - Sample tests for small devices', function() {

    it('Should have a submit button', function() {
        var submit = browser.element('#searchform input[name="submit"]');
        expect(submit.getValue()).to.be.equal("Search");
    });

    it('Should view the Notofication page', function() {
        browser.click('input[name="subscribe"]');
        expect(browser.getTitle()).to.contain('Notification')
        expect(browser.element("#submit").getValue()).to.contain('Post Comment');
    });
});
