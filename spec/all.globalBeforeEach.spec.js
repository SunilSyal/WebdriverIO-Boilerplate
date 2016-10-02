describe('Testing - Before each in config file', function() {

    it('Should have a title', function() {
        expect(browser.getTitle()).to.contain('The Tutorial Hub');
    });

    it('Should have a search text box', function() {
        expect(browser.element('input[name="subscribe"]').getValue()).to.be.equal("Subscribe");
    });

});
