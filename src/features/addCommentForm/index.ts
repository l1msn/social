import IAddCommentFormSchema from './model/types/IAddCommentFormSchema';
import AboutPageLazy from './ui/AddCommentForm/AddCommentForm.lazy';
import getAddCommentFormText from './model/selectors/getAddCommentFormText/getAddCommentFormText';
import {addCommentFormReducer} from './model/slice/AddCommentFormSlice';

export {getAddCommentFormText, addCommentFormReducer};
export type {IAddCommentFormSchema};
export {AboutPageLazy as AddCommentForm};
