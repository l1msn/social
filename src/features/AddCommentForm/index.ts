import IAddCommentFormSchema from './model/types/IAddCommentFormSchema';
import AboutPageLazy from './ui/AddCommentForm/AddCommentForm.lazy';
import { addCommentFormReducer } from './model/slice/AddCommentFormSlice';
import AddCommentFormSelectors from './model/selectors/AddCommentFormSelectors';

export { AddCommentFormSelectors, addCommentFormReducer };
export type { IAddCommentFormSchema };
export { AboutPageLazy as AddCommentForm };
