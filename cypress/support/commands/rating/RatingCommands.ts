class RatingCommands {
    static setRate(rate: number = 5, feedback: string = 'feedback test') {
        cy.getByTestId('StarRating.' + rate).click();
        cy.getByTestId('RatingCard.Input').type(feedback);
        cy.getByTestId('RatingCard.Send').click();
    }
    static removeRate(articleId: string) {
        return cy.request({
            method: 'DELETE',
            url: `http://localhost:8000/article-ratings/${articleId}`,
            headers: {Authorization: 'Authorization'},
        });
    }
}

export default RatingCommands;
