import {AsyncThunkAction} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.Mocked<any>;
    getState: () => IStateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}

export default TestAsyncThunk;
