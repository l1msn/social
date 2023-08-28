import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import TextVariant from '../consts/TextVariant';
import TextAlign from '../consts/TextAlign';
import TextSize from '../consts/TextSize';

interface ITextProps {
    className?: string;
    title?: string | number;
    text?: string | number;
    size?: TextSize;
    variant?: TextVariant;
    align?: TextAlign;
    bold?: boolean;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

const Text: React.FC<ITextProps> = memo((props: ITextProps): JSX.Element => {
    const {
        className,
        title,
        text,
        bold = false,
        align = 'left',
        variant = 'primary',
        size = 'm',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
        <div
            className={classNames(cls.Text, { [cls.bold]: bold }, [
                className,
                cls[size],
                cls[align],
                cls[variant],
                sizeClass,
            ])}
        >
            {title && (
                <HeaderTag
                    data-testid={dataTestId + '.Header'}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={dataTestId + '.Paragraph'} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});

export default Text;
