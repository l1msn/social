import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from '@/app/providers/StoreProvider';
import {loginReducer} from '@/features/AuthByUsername/testing';
import {articleReducer} from '@/entities/Article/testing';
import {addCommentFormReducer} from '@/features/AddCommentForm/testing';
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/testing';
import {articlesPageReducer} from '@/pages/ArticlesPage/testing';
// eslint-disable-next-line l1msn-plugin/layer-imports
import {profileReducer} from '@/features/EditableProfileCard';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
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
