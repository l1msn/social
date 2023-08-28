import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UiDesignSwitcher.module.scss';
import React, { JSX, memo, useCallback, useMemo, useState } from 'react';
import { ListBox as DeprecatedListBox } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import {
    getFeatureFlags,
    ToggleFeatures,
    updateFeatureFlags,
} from '@/shared/features';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
// eslint-disable-next-line l1msn-plugin/layer-imports
import PageLoader from '@/widgets/PageLoader';

interface IUiDesignSwitcherProps {
    className?: string;
}

const UiDesignSwitcher: React.FC<IUiDesignSwitcherProps> = memo(
    (props: IUiDesignSwitcherProps): JSX.Element => {
        const { className } = props;
        const { t } = useTranslation();

        const dispatch = useAppDispatch();

        const authData = useSelector(UserSelectors.getUserAuthData);

        const isAppRedesigned = getFeatureFlags('isAppRedesigned');

        const [isLoading, setIsLoading] = useState<boolean>(false);

        const items = useMemo(
            () => [
                {
                    content: t('New design'),
                    value: 'new',
                },
                {
                    content: t('Old design'),
                    value: 'old',
                },
            ],
            [t],
        );

        const onChangeStyle = useCallback(
            async (value: string) => {
                if (authData) {
                    setIsLoading((prevState) => !prevState);
                    await dispatch(
                        updateFeatureFlags({
                            userId: authData.id.toString(),
                            newFeatures: {
                                isAppRedesigned: value === 'new',
                            },
                        }),
                    ).unwrap();
                    setIsLoading((prevState) => !prevState);
                }
            },
            [authData, dispatch],
        );

        const DeprecatedUiDesignSwitcher = (
            <HStack max>
                {isLoading ? (
                    <PageLoader />
                ) : (
                    <DeprecatedListBox
                        label={t('Design UI')}
                        onChange={onChangeStyle}
                        value={isAppRedesigned ? 'new' : 'old'}
                        items={items}
                        className={classNames(
                            cls.ArticleRecommendationsList,
                            {},
                            [className],
                        )}
                    />
                )}
            </HStack>
        );

        const RedesignedUiDesignSwitcher = (
            <HStack max>
                {isLoading ? (
                    <PageLoader />
                ) : (
                    <ListBox
                        label={t('Design UI')}
                        onChange={onChangeStyle}
                        value={isAppRedesigned ? 'new' : 'old'}
                        items={items}
                        className={classNames(
                            cls.ArticleRecommendationsList,
                            {},
                            [className],
                        )}
                    />
                )}
            </HStack>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedUiDesignSwitcher}
                off={DeprecatedUiDesignSwitcher}
            />
        );
    },
);

export default UiDesignSwitcher;
