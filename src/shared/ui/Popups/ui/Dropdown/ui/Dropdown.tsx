import React, {Fragment, JSX} from 'react';
import cls from './Dropdown.module.scss';
import popupCls from '../../../styles/popup.module.scss';
import classNames from '@/shared/lib/classNames/classNames';
import {Menu, Transition} from '@headlessui/react';
import IDropdownItem from '../types/IDropdownItem';
import {DropDownDirection} from '@/shared/types/ui';
import AppLink from '@/shared/ui/AppLink';
import mapDirectionClass from '../../../styles/consts';
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
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                    {items.map((item, index) => {
                        const content = ({active}: {active: boolean}) => (
                            <button
                                type={'button'}
                                disabled={item.disabled}
                                className={classNames(cls.item, {[popupCls.active]: active, [popupCls.disabled]: item.disabled}, [])}
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
                                    key={'dropdown-key' + index}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }

                        return (
                            <Menu.Item key={'dropdown-key' + index} disabled={item.disabled} as={Fragment}>
                                {content}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Dropdown;
