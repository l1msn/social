import {IStateSchema} from 'app/providers/StoreProvider';
import {addQueryParams, getQueryParams} from './addQueryParams';

describe('testing addQueryParams functional', () => {
    test('return one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('return two param', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toBe('?test=value&second=2');
    });

    test('return two param, one of them undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
