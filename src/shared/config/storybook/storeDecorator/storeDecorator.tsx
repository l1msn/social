import {Story} from '@storybook/react';
import {StoreProvider, IStateSchema} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';

function storeDecorator(state: DeepPartial<IStateSchema>) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <StoreProvider initialState={state}>
                <StoryComponent/>
            </StoreProvider>
        );
    };
}

export default storeDecorator;
