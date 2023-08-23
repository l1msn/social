let profileId: string = '';

describe('Profile testing', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login().then((data) => {
            profileId = data.id.toString();
            cy.visit('/profile/' + data.id);
        });
    });
    it('Success load card', () => {
        cy.getByTestId('ProfileCard.Username').should('have.value', 'Darlingg');
    });
    it('Editing card', () => {
        const testValue: string = 'new Username';
        cy.updateProfile(testValue);
        cy.getByTestId('ProfileCard.Username').should('have.value', testValue);
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
});
