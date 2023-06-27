import React, {JSX} from 'react';
import classNames from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLinkThemes from "shared/ui/AppLink/consts/AppLinkThemes";
import AppLink from "shared/ui/AppLink";

interface INavbarProps {
    className?: string
}

const Navbar: React.FC<INavbarProps> = ({className}: INavbarProps): JSX.Element => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkThemes.SECONDARY} to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink  theme={AppLinkThemes.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;



