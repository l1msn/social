import {IStateSchema} from '@/app/providers/StoreProvider';
import getAddCommentFormText from './getAddCommentFormText';

const mockError: string = 'text here!';

describe('testing getProfileError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            addCommentForm: {
                text: mockError,
            },
        };
        expect(getAddCommentFormText(state as IStateSchema)).toEqual(mockError);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getAddCommentFormText(state as IStateSchema)).toEqual('');
    });
});
