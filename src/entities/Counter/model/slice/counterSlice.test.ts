import {counterReducer} from 'entities/Counter';
import ICounterSchema from '../types/counterSchema';
import {counterActions} from './counterSlice';

describe('testing counterSlice functional', () => {
    test('decrement value', () => {
        const state: ICounterSchema = {value: 1};
        expect(counterReducer(state, counterActions.decrement)).toEqual({value: 0});
    });
    test('increment value', () => {
        const state: ICounterSchema = {value: 1};
        expect(counterReducer(state, counterActions.increment)).toEqual({value: 2});
    });
    test('empty value', () => {
        const state: ICounterSchema = undefined;
        expect(counterReducer(state, counterActions.increment)).toEqual({value: 1});
    });
});
