import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleCode.module.scss';
import { IArticleCodeBlock } from '../../model/types/IArticle';
import Code from '@/shared/ui/redesigned/Code';

interface IArticleCodeProps {
    className?: string;
    block: IArticleCodeBlock;
}

const ArticleCode: React.FC<IArticleCodeProps> = memo(
    ({ className, block }: IArticleCodeProps): JSX.Element => {
        return (
            <div className={classNames(cls.articleCode, {}, [className])}>
                <Code codeText={block.code} />
            </div>
        );
    },
);

export default ArticleCode;
