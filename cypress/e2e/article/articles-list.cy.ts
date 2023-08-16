describe('Articles list testing', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });
    it('Visit articles page with success load them', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
