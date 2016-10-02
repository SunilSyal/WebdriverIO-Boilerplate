describe('Testing - Before Each in describe section', function() {

    it('Should have a title', function() {
        expect(browser.getTitle()).to.contain('The Tutorial Hub');
    });

    it('Should have a search text box', function() {
        expect(browser.element('input[name="subscribe"]').getValue()).to.be.equal("Subscribe");
    });

    beforeEach(function(done) {
        browser.url('http://thetutorialhub.com/main');
    });

});
