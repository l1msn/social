import React, {ChangeEvent, JSX, memo, useMemo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface ISelectOptions {
    value: string,
    content: string;
}

interface ISelectProps {
    className?: string,
    label?: string,
    options?: ISelectOptions[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean;
}

const Select: React.FC<ISelectProps> = memo((props: ISelectProps): JSX.Element => {
    const {className, readonly, label, value, onChange, options} = props;

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        onChange?.(e.target.value);
    }

    const optionList = useMemo(() =>
        options?.map((option: ISelectOptions) => (
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
});

export default Select;


