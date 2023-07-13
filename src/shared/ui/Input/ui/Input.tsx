import React, {InputHTMLAttributes, JSX, memo, MutableRefObject, useEffect, useRef, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps{
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean;
}

const Input: React.FC<IInputProps> = memo((props: IInputProps): JSX.Element => {
    const {className, autofocus, placeholder, value, onChange, type = 'text', ...otherProps} = props;

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }

    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

    const refInput = useRef() as MutableRefObject<HTMLInputElement>;
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true);
            refInput.current?.focus();
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

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder &&
                (<div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>)
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={refInput}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
                {isFocus && (<span className={cls.caret} style={{left: `${caretPosition * 9}px`}} />)}
            </div>
        </div>
    );
});

export default Input;


