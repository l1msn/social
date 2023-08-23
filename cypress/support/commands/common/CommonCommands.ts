import selectByTestId from '../../../helpers/selectByTestId';

class CommonCommands {
    static getByTestId(testId: string) {
        return cy.get<string>(selectByTestId(testId));
    }
}

export default CommonCommands;
