import IAddCommentFormSchema from '../types/IAddCommentFormSchema';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from './AddCommentFormSlice';

describe('testing AddCommentFormSlice functional', () => {
    test('test set text', () => {
        const state: DeepPartial<IAddCommentFormSchema> = {
            text: '',
        };
        expect(
            addCommentFormReducer(
                state as IAddCommentFormSchema,
                addCommentFormActions.setText('new text'),
            ),
        ).toEqual({
            text: 'new text',
        });
    });
});
