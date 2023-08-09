import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from '@/app/providers/StoreProvider';
import {loginReducer} from '@/features/authByUsername/model/slice/loginSlice';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleReducer} from '@/entities/Article/model/slice/articleSlice';
import {addCommentFormReducer} from '@/features/addCommentForm/model/slice/AddCommentFormSlice';
import articleDetailsPageReducer from '@/pages/ArticleDetailsPage/model/slice';
import {articlePageReducer} from '@/pages/ArticlePage/model/slice/articlePageSlice';
import {profileReducer} from '@/features/editableProfileCard/model/slice/profileSlice';

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
