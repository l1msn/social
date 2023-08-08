import {IStateSchema} from 'app/providers/StoreProvider';
import getAddCommentFormError from './getAddCommentFormError';

const mockError: string = 'error here!';

describe('testing getProfileError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            addCommentForm: {
                error: mockError,
            },
        };
        expect(getAddCommentFormError(state as IStateSchema)).toEqual(mockError);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getAddCommentFormError(state as IStateSchema)).toEqual(undefined);
    });
});
