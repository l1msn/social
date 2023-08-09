import {Fragment, JSX, memo} from 'react';
import {Listbox as HListBox, Transition} from '@headlessui/react';
import cls from './ListBox.module.scss';
import popupCls from '../../../styles/popup.module.scss';
import Button from '@/shared/ui/Button';
import classNames from '@/shared/lib/classNames/classNames';
import IListBoxItems from '../consts/IListBoxItems';
import {HStack} from '@/widgets/Stack';
import {DropDownDirection} from '@/shared/types/ui';
import mapDirectionClass from '../../../styles/consts';

interface IListBoxProps {
    className?: string,
    items?: IListBoxItems[],
    value?: string,
    defaultValue?: string,
    onChange: <T extends string>(value: T) => void,
    readonly?: boolean,
    direction?: DropDownDirection,
    label?: string;
}


const ListBox: React.FC<IListBoxProps> = memo((props: IListBoxProps): JSX.Element => {
    const {className
        , items
        , value
        , defaultValue
        , onChange
        , readonly
        , label
        , direction = 'bottom left',
    } = props;

    return (
        <HStack gap={'4'}>
            {label && <span className={classNames(cls.label, {[cls.readonly]: readonly}, [className])}>{label + '>'}</span>}
            <HListBox
                as={'div'}
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])} value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <HListBox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
                        {items?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({active, selected}) => (
                                    <li className={classNames(cls.item, {[popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    }, [])}>
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
});

export default ListBox;
