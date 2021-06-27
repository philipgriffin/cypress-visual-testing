describe('Demo Testing', () => {
    it('can open a blog page', () => {
        cy.visit('http://localhost:1313/');

        cy.get('.post-entry:first').click();
        
        cy
        .get('.post-title')
        .should('be.visible')
        .contains('Web scraping to create an api in 3 minutes!');
    });

    it('visually check a post', () => {
        cy.visit('http://localhost:1313/');

        cy.get('.post-entry:first').click();
        
        cy
        .get('.post-title')
        .toMatchImageSnapshot({imageConfig: {"threshold": 0}});
    });
});