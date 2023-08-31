import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import ThemeText from '../consts/ThemeText';
import AlignText from '../consts/AlignText';
import SizeText from '../consts/SizeText';

interface ITextProps {
    className?: string;
    title?: string | number;
    text?: string | number;
    size?: SizeText;
    theme?: ThemeText;
    align?: AlignText;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<SizeText, HeaderTagType> = {
    [SizeText.S]: 'h3',
    [SizeText.M]: 'h2',
    [SizeText.L]: 'h1',
};

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Text: React.FC<ITextProps> = memo((props: ITextProps): JSX.Element => {
    const {
        className,
        align = AlignText.LEFT,
        title,
        text,
        theme = ThemeText.PRIMARY,
        size = SizeText.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div
            className={classNames(cls.Text, {}, [
                className,
                cls[size],
                cls[align],
                cls[theme],
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
