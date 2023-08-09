import {IStateSchema} from '@/app/providers/StoreProvider';

const getAddCommentFormText = (state: IStateSchema) => state.addCommentForm?.text ?? '';

export default getAddCommentFormText;
