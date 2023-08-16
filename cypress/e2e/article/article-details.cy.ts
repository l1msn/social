let currentArticleId: string = '';

describe('Article Details testing', () => {
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
    });
});
