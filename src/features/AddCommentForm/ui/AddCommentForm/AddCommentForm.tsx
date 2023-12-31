import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { Input as DeprecatedInput } from '@/shared/ui/deprecated/Input';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { useSelector } from 'react-redux';
import AddCommentFormSelectors from '../../model/selectors/AddCommentFormSelectors';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/AddCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/features';
import Button from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

interface IAddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: React.FC<IAddCommentFormProps> = memo(
    ({ className, onSendComment }: IAddCommentFormProps): JSX.Element => {
        const { t } = useTranslation('comment');

        const text = useSelector(AddCommentFormSelectors.getAddCommentFormText);

        const dispatch = useAppDispatch();

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChange('');
        }, [text, onSendComment, onCommentTextChange]);

        const DeprecatedAddCommentForm = (
            <HStack
                data-testid={'AddCommentForm'}
                justify={'between'}
                max
                className={classNames(cls.commentForm, {}, [className])}
            >
                <DeprecatedInput
                    data-testid={'AddCommentForm.Input'}
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Your comment...')}
                />
                <DeprecatedButton
                    data-testid={'AddCommentForm.Button'}
                    onClick={onSendHandler}
                    theme={ThemeButton.WITHLINE}
                >
                    {t('Send')}
                </DeprecatedButton>
            </HStack>
        );

        const RedesignedAddCommentForm = (
            <Card padding={'24'} border={'round'} max>
                <HStack
                    gap={'16'}
                    data-testid={'AddCommentForm'}
                    justify={'between'}
                    max
                    className={classNames(cls.commentFormRedesigned, {}, [
                        className,
                    ])}
                >
                    <Input
                        data-testid={'AddCommentForm.Input'}
                        className={cls.input}
                        value={text}
                        onChange={onCommentTextChange}
                        placeholder={t('Your comment...')}
                    />
                    <Button
                        data-testid={'AddCommentForm.Button'}
                        onClick={onSendHandler}
                        variant={'outline'}
                        className={cls.sendBtn}
                    >
                        {t('Send')}
                    </Button>
                </HStack>
            </Card>
        );

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterAmount>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedAddCommentForm}
                    off={DeprecatedAddCommentForm}
                />
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
