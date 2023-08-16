import selectByTestId from "../../helpers/selectByTestId";

describe('Routing testing', () => {
    describe('Not auth user', () => {
        it('Visit main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Visit profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Visit non-existent page', () => {
            cy.visit('/abcd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Auth user', () => {
        beforeEach(() => {
            cy.login('username', 'password');
        })
        it('Visit profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Visit articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
