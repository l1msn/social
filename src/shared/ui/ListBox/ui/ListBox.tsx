import {JSX, Fragment} from 'react';
import {Listbox as HListBox} from '@headlessui/react';
import cls from './ListBox.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import IListBoxItems from '../consts/IListBoxItems';
import {HStack} from 'widgets/Stack';
import Button from 'shared/ui/Button';

type DropDownDirection = 'top' | 'bottom'

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

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

const Listbox: React.FC<IListBoxProps> = (props: IListBoxProps): JSX.Element => {
    const {className
        , items
        , value
        , defaultValue
        , onChange
        , readonly
        , label
        , direction = 'bottom',
    } = props;

    return (
        <HStack gap={'4'}>
            {label && <span className={classNames(cls.label, {[cls.readonly]: readonly}, [className])}>{label + '>'}</span>}
            <HListBox
                as={'div'}
                className={classNames(cls.ListBox, {}, [className])} value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({active, selected}) => (
                                <li className={classNames(cls.item, {[cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                }, [])}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};

export default Listbox;
