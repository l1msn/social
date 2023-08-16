class CommentsCommands {
    static addComment(comment: string) {
        cy.getByTestId('AddCommentForm.Input').type(comment);
        cy.getByTestId('AddCommentForm.Button').click();
    }
}

export default CommentsCommands;
