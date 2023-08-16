import UserCommands from "./commands/UserCommads";

Cypress.Commands.add('login', UserCommands.login);

// @ts-ignore
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // @ts-ignore
      login(email?: string, password?: string): Chainable<void>
    }
  }
}
