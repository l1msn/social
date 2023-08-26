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

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Input: React.FC<IInputProps> = memo((props: IInputProps): JSX.Element => {
    const {
        className,
        readonly,
        autofocus,
        placeholder,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }

    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

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

    function onSelect(e: any): void {
        setCaretPosition(e?.target?.selectionStart || 0);
    }

    const isCaretVisible = isFocus && !readonly;

    return (
        <div
            className={classNames(
                cls.InputWrapper,
                { [cls.readonly]: readonly },
                [className],
            )}
        >
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    readOnly={readonly}
                    ref={ref}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});

export default Input;
