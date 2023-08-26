import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { default as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import LangButton from '../consts/LangButton';
import RuIcon from '@/shared/assets/icons/deprecated/lang-ru.svg';
import EnIcon from '@/shared/assets/icons/deprecated/lang-en.svg';
import { ToggleFeatures } from '@/shared/features';
import Icon from '@/shared/ui/redesigned/Icon';

interface ILangSwitcherProps {
    className?: string;
}

const LangSwitcher: React.FC<ILangSwitcherProps> = memo(
    ({ className }: ILangSwitcherProps): JSX.Element => {
        const { i18n } = useTranslation();

        function toggleLang(): void {
            i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en');
        }

        const DeprecatedLangSwitcher = (
            <ButtonDeprecated
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
                className={classNames(cls.LangSwitcher, {}, [className])}
            >
                {i18n.language == LangButton.EN ? <EnIcon /> : <RuIcon />}
            </ButtonDeprecated>
        );

        const RedesignedLangSwitcher = (
            <Icon
                Svg={i18n.language == LangButton.EN ? EnIcon : RuIcon}
                clickable
                onClick={toggleLang}
                className={classNames(cls.LangSwitcher, {}, [className])}
            />
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedLangSwitcher}
                off={DeprecatedLangSwitcher}
            />
        );
    },
);

export default LangSwitcher;
