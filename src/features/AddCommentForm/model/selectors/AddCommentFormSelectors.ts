import {IStateSchema} from '@/app/providers/StoreProvider';

class AddCommentFormSelectors {
    static getAddCommentFormError = (state: IStateSchema) => state.addCommentForm?.error;
    static getAddCommentFormText = (state: IStateSchema) => state.addCommentForm?.text ?? '';
}

export default AddCommentFormSelectors;
