import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLinkThemes from 'shared/ui/AppLink/consts/AppLinkThemes';
import AppLink from 'shared/ui/AppLink';
import {useTranslation} from 'react-i18next';

interface INavbarProps {
    className?: string
}

const Navbar: React.FC<INavbarProps> = ({className}: INavbarProps): JSX.Element => {
  const {t} = useTranslation('navbar');
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkThemes.SECONDARY} to={'/'} className={cls.mainLink}>{t('Main')}</AppLink>
        <AppLink theme={AppLinkThemes.SECONDARY} to={'/about'}>{t('About')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;


