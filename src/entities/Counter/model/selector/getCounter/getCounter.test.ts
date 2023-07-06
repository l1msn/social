import getCounter from './getCounter';
import {DeepPartial} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider';

describe('testing getCounter functional', () => {
    test('return right counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: {value: 1},
        };
        expect(getCounter(state as IStateSchema)).toEqual({value: 1});
    });
});
