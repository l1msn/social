import React, { Fragment, JSX, useMemo } from 'react';
import { Listbox as HListBox, Transition } from '@headlessui/react';
import cls from './ListBox.module.scss';
import popupCls from '../../../styles/popup.module.scss';
import Button from '../../../../Button';
import classNames from '@/shared/lib/classNames/classNames';
import IListBoxItems from '../consts/IListBoxItems';
import { DropDownDirection } from '@/shared/types/ui';
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow-bottom.svg';
import { HStack } from '../../../../Stack';
import Icon from '../../../../Icon';
import mapDirectionClass from '../../../../../deprecated/Popups/styles/consts';

interface IListBoxProps<T extends string> {
    className?: string;
    items?: IListBoxItems<T>[];
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

const ListBox = <T extends string>(props: IListBoxProps<T>): JSX.Element => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom left',
    } = props;

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );

    return (
        <HStack gap={'4'}>
            {label && (
                <span
                    className={classNames(
                        cls.label,
                        { [cls.readonly]: readonly },
                        [className],
                    )}
                >
                    {label}
                </span>
            )}
            <HListBox
                as={'div'}
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button
                    as={Button}
                    className={cls.trigger}
                    addonRight={<Icon Svg={ArrowIcon} />}
                    variant={'filled'}
                >
                    {selectedItem?.content ?? defaultValue}
                </HListBox.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <HListBox.Options
                        className={classNames(cls.options, {}, [
                            mapDirectionClass[direction],
                        ])}
                    >
                        {items?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(
                                            cls.item,
                                            {
                                                [popupCls.active]: active,
                                                [popupCls.disabled]:
                                                    item.disabled,
                                            },
                                            [],
                                        )}
                                    >
                                        {selected}
                                        {item.content}
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </Transition>
            </HListBox>
        </HStack>
    );
};

export default ListBox;
