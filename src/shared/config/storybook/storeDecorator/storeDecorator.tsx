import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from '@/app/providers/StoreProvider';
import {loginReducer} from '@/features/authByUsername/testing';
import {articleReducer} from '@/entities/Article/testing';
import {addCommentFormReducer} from '@/features/addCommentForm/testing';
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/testing';
import {articlePageReducer} from '@/pages/ArticlePage/testing';
import {profileReducer} from '@/features/editableProfileCard/testing';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

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
