import React, {
    InputHTMLAttributes,
    JSX,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../../Stack';
import { Text } from '../../Text';
import InputSize from '../consts/InputSize';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    size?: InputSize;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
}

const Input: React.FC<IInputProps> = memo((props: IInputProps): JSX.Element => {
    const {
        className,
        readonly,
        autofocus,
        placeholder,
        value,
        label,
        size = 'm',
        onChange,
        addonRight,
        addonLeft,
        type = 'text',
        ...otherProps
    } = props;

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        onChange?.(e.target.value);
    }

    const [isFocus, setIsFocus] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    function onBlur(): void {
        setIsFocus(false);
    }

    function onFocus(): void {
        setIsFocus(true);
    }

    const mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocus,
        [cls.withAddonLeft]: Boolean(addonRight),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    return (
        <HStack max gap={'8'}>
            {label && <Text text={label} />}
            <div
                className={classNames(cls.InputWrapper, mods, [
                    className,
                    cls[size],
                ])}
            >
                {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
                <input
                    readOnly={readonly}
                    ref={ref}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    placeholder={placeholder}
                    {...otherProps}
                />
                {addonRight && (
                    <div className={cls.addonRight}>{addonRight}</div>
                )}
            </div>
        </HStack>
    );
});

export default Input;
