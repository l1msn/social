import React, {JSX, memo, useCallback} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import {Input} from '@/shared/ui/Input';
import cls from './AddCommentForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import {useSelector} from 'react-redux';
import AddCommentFormSelectors from '../../model/selectors/AddCommentFormSelectors';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {addCommentFormActions, addCommentFormReducer} from '../../model/slice/AddCommentFormSlice';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {HStack} from '@/shared/ui/Stack';

interface IAddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: React.FC<IAddCommentFormProps> = memo(({className, onSendComment}: IAddCommentFormProps): JSX.Element => {
    const {t} = useTranslation('comment');

    const text = useSelector(AddCommentFormSelectors.getAddCommentFormText);

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
            <HStack data-testid={'AddCommentForm'} justify={'between'} max className={classNames(cls.commentForm, {}, [className])}>
                <Input data-testid={'AddCommentForm.Input'} className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t('Your comment...')}/>
                <Button data-testid={'AddCommentForm.Button'} onClick={onSendHandler} theme={ThemeButton.WITHLINE}>{t('Send')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;


