import React, {JSX, memo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import Button from '@/shared/ui/Button';
import {useTranslation} from 'react-i18next';
import LangButton from '../consts/LangButton';
import RuIcon from '@/shared/assets/icons/lang-ru.svg';
import EnIcon from '@/shared/assets/icons/lang-en.svg';


interface ILangSwitcherProps {
    className?: string
}

const LangSwitcher: React.FC<ILangSwitcherProps> = memo(({className}: ILangSwitcherProps): JSX.Element => {
    const {i18n} = useTranslation();

    function toggleLang(): void {
        i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {i18n.language == LangButton.EN ? <EnIcon/> : <RuIcon/>}
        </Button>
    );
});

export default LangSwitcher;
