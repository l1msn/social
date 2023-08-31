import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import DeprecatedCopyIcon from '@/shared/assets/icons/deprecated/copy-icon.svg';
import CopyIcon from '@/shared/assets/icons/redesigned/copy-20-20.svg';
import { ToggleFeatures } from '@/shared/features';
import { default as DeprecatedButton } from '../../../deprecated/Button';
import { ThemeButton } from '../../../deprecated/Input';
import Icon from '../../Icon';

interface ICodeProps {
    className?: string;
    codeText: string;
}

const Code: React.FC<ICodeProps> = memo(
    ({ className, codeText }: ICodeProps): JSX.Element => {
        const onCopy = useCallback(() => {
            navigator.clipboard.writeText(codeText);
        }, [codeText]);

        const DeprecatedCode = (
            <pre className={classNames(cls.code, {}, [className])}>
                <DeprecatedButton
                    onClick={onCopy}
                    className={cls.copyBtn}
                    theme={ThemeButton.CLEAR}
                >
                    <DeprecatedCopyIcon className={cls.copyIcon} />
                </DeprecatedButton>
                <code>{codeText}</code>
            </pre>
        );

        const RedesignedCode = (
            <pre className={classNames(cls.codeRedesigned, {}, [className])}>
                <code>{codeText}</code>
                <Icon
                    clickable
                    onClick={onCopy}
                    className={cls.copyBtn}
                    Svg={CopyIcon}
                />
            </pre>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                off={DeprecatedCode}
                on={RedesignedCode}
            />
        );
    },
);

export default Code;
