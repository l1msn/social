import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleImage.module.scss';
import {IArticleImageBlock} from 'entities/Article/model/types/IArticle';
import {AlignText, Text} from 'shared/ui/Text';

interface IArticleImageProps {
    className?: string
    block: IArticleImageBlock
}

const ArticleImage: React.FC<IArticleImageProps> = memo(({className, block}: IArticleImageProps): JSX.Element => {
    return (
        <div className={classNames(cls.article, {}, [className])}>
            <img src={block.src} className={cls.image} alt={block.title}/>
            {block.title && (
                <Text title={block.title} align={AlignText.CENTER}/>
            )}
        </div>
    );
});

export default ArticleImage;


