import React, {ChangeEvent, JSX, useMemo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import ISelectOptions from '../types/ISelectOptions';


interface ISelectProps<T extends string> {
    className?: string,
    label?: string,
    options?: ISelectOptions<T>[],
    value?: T,
    onChange?: (value: T) => void,
    readonly?: boolean;
}

const Select = <T extends string>(props: ISelectProps<T>): JSX.Element => {
    const {className, readonly, label, value, onChange, options} = props;

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        onChange?.(e.target.value as T);
    }

    const optionList = useMemo(() =>
        options?.map((option: ISelectOptions<T>) => (
            <option className={cls.option} key={option.value} value={option.value}>
                {option.content}
            </option>
        ))
    , [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={classNames(cls.label, {[cls.readonly]: readonly}, [className])}>{`${label}>`}</span>}
            <select disabled={readonly} onChange={onChangeHandler} className={cls.select} name="" id="">
                {optionList}
            </select>
        </div>
    );
};

export default Select;


