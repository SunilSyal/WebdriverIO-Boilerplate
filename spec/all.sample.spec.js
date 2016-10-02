describe('Testing - Sample Tests', function() {

    it('Should have a title', function() {
        browser.url('http://thetutorialhub.com/main');
        expect(browser.getTitle()).to.contain('The Tutorial Hub');
    });

    it('Should have a search text box', function() {
        browser.url('http://thetutorialhub.com/main');
        expect(browser.element('input[name="subscribe"]').getValue()).to.be.equal("Subscribe");
    });

});
