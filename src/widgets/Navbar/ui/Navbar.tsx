import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

const Navbar: React.FC<INavbarProps> = ({className}: INavbarProps): JSX.Element => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
            </div>
        </div>
    );
};

export default Navbar;


