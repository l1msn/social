import { useTranslation } from 'react-i18next';
import React, { JSX, memo, useCallback, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { JsonSelectors, saveJsonSettings } from '@/entities/User';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/deprecated/Popups';

interface IArticlePageGreetingProps {
    className?: string;
}

const ArticlePageGreeting: React.FC<IArticlePageGreetingProps> = memo(
    (props: IArticlePageGreetingProps): JSX.Element => {
        const { className } = props;
        const { t } = useTranslation();

        const [isOpen, setIsOpen] = useState<boolean>(false);

        const dispatch = useAppDispatch();

        const { useJsonSettings } = JsonSelectors.jsonSettings();

        const { isArticlesPageWasOpened } = useJsonSettings();

        useEffect(() => {
            if (!isArticlesPageWasOpened) {
                setIsOpen((prevState) => !prevState);
                dispatch(
                    saveJsonSettings({
                        isArticlesPageWasOpened: true,
                    }),
                );
            }
        }, [dispatch, isArticlesPageWasOpened]);

        const onClose = useCallback(() => {
            setIsOpen((prevState) => !prevState);
        }, []);

        const text = (
            <Text
                title={t('Welcome to the articles page!')}
                text={t(
                    'Here you can view and search articles related to your interests',
                )}
            />
        );

        if (isMobile) {
            return (
                <Drawer lazy isOpen={isOpen} onClose={onClose}>
                    {text}
                </Drawer>
            );
        }

        return (
            <Modal lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Modal>
        );
    },
);

export default ArticlePageGreeting;
