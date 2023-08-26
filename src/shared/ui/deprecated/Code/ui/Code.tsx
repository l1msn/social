import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import Button from '../../Button';
import cls from './Code.module.scss';
import CopyIcon from '../../../../assets/icons/deprecated/copy-icon.svg';
import ThemeButton from '../../Button/consts/ThemeButton';

interface ICodeProps {
    className?: string;
    codeText: string;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Code: React.FC<ICodeProps> = memo(
    ({ className, codeText }: ICodeProps): JSX.Element => {
        const onCopy = useCallback(() => {
            navigator.clipboard.writeText(codeText);
        }, [codeText]);

        return (
            <pre className={classNames(cls.code, {}, [className])}>
                <Button
                    onClick={onCopy}
                    className={cls.copyBtn}
                    theme={ThemeButton.CLEAR}
                >
                    <CopyIcon className={cls.copyIcon} />
                </Button>
                <code>{codeText}</code>
            </pre>
        );
    },
);

export default Code;
