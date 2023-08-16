class RatingCommands {
    static setRate(rate: number = 5, feedback: string = 'feedback test') {
        cy.getByTestId('StarRating.' + rate).click();
        cy.getByTestId('RatingCard.Input').type(feedback);
        cy.getByTestId('RatingCard.Send').click();
    }
}

export default RatingCommands;
