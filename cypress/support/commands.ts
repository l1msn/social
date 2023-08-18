import UserCommands from "./commands/user/UserCommads";
import {IUser} from '../../src/entities/User';
import CommonCommands from "./commands/common/CommonCommands";
import ProfileCommands from "./commands/profile/ProfileCommands";
import ArticleCommands from "./commands/article/ArticleCommands";
import {IArticle} from "../../src/entities/Article";
import CommentsCommands from "./commands/comments/CommentsCommands";
import RatingCommands from "./commands/rating/RatingCommands";
import * as process from "process";

// common
Cypress.Commands.add('getByTestId', CommonCommands.getByTestId);
// user
Cypress.Commands.add('login', UserCommands.login);
// profile
Cypress.Commands.add('updateProfile', ProfileCommands.updateProfile);
Cypress.Commands.add('resetProfile', ProfileCommands.updateProfile);
// article
Cypress.Commands.add('createArticle', ArticleCommands.createArticle);
Cypress.Commands.add('deleteArticle', ArticleCommands.deleteArticle);
// comments
Cypress.Commands.add('addComment', CommentsCommands.addComment);
// rate
Cypress.Commands.add('setRate', RatingCommands.setRate);
Cypress.Commands.add('removeRate', RatingCommands.removeRate);


// @ts-ignore
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // common
      getByTestId(testId: string): Chainable<string>
      // user
      login(email?: string, password?: string): Chainable<IUser>
      // profile
      updateProfile(newValue: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
      // article
      createArticle(article?: IArticle): Chainable<IArticle>
      deleteArticle(articleId: string): Chainable<Response<any>>
      // comments
      addComment(comment: string): Chainable<void>
      // star
      setRate(rate: number, feedback: string): Chainable<void>
      removeRate(articleId: string): Chainable<Response<any>>
    }
  }
}
