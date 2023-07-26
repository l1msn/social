import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {articleReducer} from 'entities/Article/model/slice/articleSlice';
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import {addCommentFormReducer} from 'features/AddCommentForm/model/slice/AddCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addCommentForm: addCommentFormReducer,
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
