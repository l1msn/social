let currentArticleId: string = '';

describe('Article Details testing with API', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id.toString();
            cy.visit('/articles/' + currentArticleId);
        });
    });
    afterEach(() => {
        cy.deleteArticle(currentArticleId);
    });
    it('See article details page', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('See article recommendations', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Put comment', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Set star rating', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
        cy.removeRate(currentArticleId);
    });
});

describe('Article Details testing on stabs', () => {
    const stabArticleId: string = '1';

    beforeEach(() => {
        cy.login();
        cy.removeRate('1');
        cy.visit('/articles/' + stabArticleId);
    });

    it('Set star rating (on stabs)', () => {
        cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'});
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
        cy.removeRate(stabArticleId);
    });
});


