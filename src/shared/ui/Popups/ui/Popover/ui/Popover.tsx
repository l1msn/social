import {Transition, Popover as PopoverHeadless} from '@headlessui/react';
import React, {JSX} from 'react';
import {DropDownDirection} from '@/shared/types/ui';
import cls from './Popover.module.scss';
import mapDirectionClass from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';
import classNames from '@/shared/lib/classNames/classNames';


interface IPopoverProps {
    className?: string
    trigger?: React.ReactNode,
    direction?: DropDownDirection,
    children: React.ReactNode;
}

const Popover: React.FC<IPopoverProps> = (props: IPopoverProps): JSX.Element => {
    const {className,
        trigger,
        children,
        direction = 'bottom right',
    } = props;

    return (
        <PopoverHeadless className={classNames(cls.popover, {}, [className, popupCls.popup])}>
            <PopoverHeadless.Button as={'div'} className={popupCls.trigger}>
                {trigger}
            </PopoverHeadless.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <PopoverHeadless.Panel className={classNames(cls.panel, {}, [className, mapDirectionClass[direction]])}>
                    {children}
                </PopoverHeadless.Panel>
            </Transition>
        </PopoverHeadless>
    );
};

export default Popover;


