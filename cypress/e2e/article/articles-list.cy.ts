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

describe('Articles list testing with API', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });
    it('Visit articles page with success load them', () => {
        cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'});
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
