import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SettingsPage.module.scss';
import React, { JSX, memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import Page from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { ToggleFeatures } from '@/shared/features';

interface ISettingsPageProps {
    className?: string;
}

const SettingsPage: React.FC<ISettingsPageProps> = memo(
    (props: ISettingsPageProps): JSX.Element => {
        const { className } = props;
        const { t } = useTranslation();

        const DeprecatedSettingsPage = (
            <VStack gap={'16'}>
                <DeprecatedText title={t('Settings')} />
                <UiDesignSwitcher />
            </VStack>
        );

        const RedesignedSettingsPage = (
            <VStack gap={'16'}>
                <Text title={t('Settings')} />
                <UiDesignSwitcher />
            </VStack>
        );

        return (
            <Page className={classNames(cls.SettingsPage, {}, [className])}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedSettingsPage}
                    off={DeprecatedSettingsPage}
                />
            </Page>
        );
    },
);

export default SettingsPage;
