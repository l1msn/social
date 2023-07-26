import React, {JSX, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {Input} from 'shared/ui/Input';
import cls from './AddCommentForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {useSelector} from 'react-redux';
import getAddCommentFormText from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import getAddCommentFormError from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {addCommentFormActions, addCommentFormReducer} from '../../model/slice/AddCommentFormSlice';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';

interface IAddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: React.FC<IAddCommentFormProps> = ({className, onSendComment}: IAddCommentFormProps): JSX.Element => {
    const {t} = useTranslation('comment');

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [text, onSendComment, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <div className={classNames(cls.commentForm, {}, [className])}>
                <Input className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t('Your comment...')}/>
                <Button onClick={onSendHandler} theme={ThemeButton.WITHLINE}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;


