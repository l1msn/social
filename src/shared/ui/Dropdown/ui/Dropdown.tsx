import React, {Fragment, JSX} from 'react';
import cls from './Dropdown.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import {Menu} from '@headlessui/react';
import IDropdownItem from '../types/IDropdownItem';
import {DropDownDirection} from 'shared/types/ui';
import AppLink from 'shared/ui/AppLink';

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};


interface IDropdownProps {
    className?: string,
    items: IDropdownItem[],
    trigger?: React.ReactNode,
    direction?: DropDownDirection;
}

const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps): JSX.Element => {
    const {className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                {items.map((item) => {
                    const content = ({active}: {active: boolean}) => (
                        <button
                            type={'button'}
                            disabled={item.disabled}
                            className={classNames(cls.item, {[cls.active]: active, [cls.disabled]: item.disabled}, [])}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                disabled={item.disabled}
                                as={AppLink}
                                to={item.href}
                                key={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={item.content as string} disabled={item.disabled} as={Fragment}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default Dropdown;
