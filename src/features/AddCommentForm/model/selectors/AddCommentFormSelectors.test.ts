import {IStateSchema} from '@/app/providers/StoreProvider';
import AddCommentFormSelectors from './AddCommentFormSelectors';

const mockError: string = 'error here!';

describe('testing getProfileError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            addCommentForm: {
                error: mockError,
            },
        };
        expect(AddCommentFormSelectors.getAddCommentFormError(state as IStateSchema)).toEqual(mockError);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(AddCommentFormSelectors.getAddCommentFormError(state as IStateSchema)).toEqual(undefined);
    });
});

const mockText: string = 'text here!';

describe('testing getProfileError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            addCommentForm: {
                text: mockText,
            },
        };
        expect(AddCommentFormSelectors.getAddCommentFormText(state as IStateSchema)).toEqual(mockText);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(AddCommentFormSelectors.getAddCommentFormText(state as IStateSchema)).toEqual('');
    });
});
