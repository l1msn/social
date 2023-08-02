import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {articleReducer} from 'entities/Article/model/slice/articleSlice';
import {addCommentFormReducer} from 'features/AddCommentForm/model/slice/AddCommentFormSlice';
import articleDetailsPageReducer from 'pages/ArticleDetailsPage/model/slice';
import {articlePageReducer} from 'pages/ArticlePage/model/slice/articlePageSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlePageReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

function storeDecorator(state: DeepPartial<IStateSchema>, asyncReducer?: ReducersList) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducer}}>
                <StoryComponent/>
            </StoreProvider>
        );
    };
}

export default storeDecorator;
