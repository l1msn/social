import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleText.module.scss';
import {IArticleTextBlock} from 'entities/Article/model/types/IArticle';
import {Text} from 'shared/ui/Text';

interface IArticleTextProps {
    className?: string,
    block: IArticleTextBlock;
}

const ArticleText: React.FC<IArticleTextProps> = memo(({block, className}: IArticleTextProps): JSX.Element => {
    return (
        <div className={classNames(cls.article, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map((paragraph) =>
                <Text key={paragraph} text={paragraph} className={cls.paragraphs}/>)}
        </div>
    );
});

export default ArticleText;


