import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from 'app/providers/StoreProvider';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

function storeDecorator(state: DeepPartial<IStateSchema>, asyncReducer?: DeepPartial<ReducersMapObject<IStateSchema>>) {
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
