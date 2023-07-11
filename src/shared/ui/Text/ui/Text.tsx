import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import ThemeText from '../consts/ThemeText';


interface ITextProps {
    className?: string,
    title?: string,
    text?: string;
    theme?: ThemeText;
}

const Text: React.FC<ITextProps> = memo((props: ITextProps): JSX.Element => {
    const {className, title, text, theme = ThemeText.PRIMARY} = props;
    return (
        <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Text;


