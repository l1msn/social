import {DeepPartial} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider';
import getCounterValue from './getCounterValue';

describe('testing getCounterValue functional', () => {
    test('return right counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: {value: 1},
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(1);
    });
});
