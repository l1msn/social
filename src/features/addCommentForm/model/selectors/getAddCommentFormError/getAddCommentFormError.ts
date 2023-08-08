import {IStateSchema} from 'app/providers/StoreProvider';

const getAddCommentFormError = (state: IStateSchema) => state.addCommentForm?.error;

export default getAddCommentFormError;
