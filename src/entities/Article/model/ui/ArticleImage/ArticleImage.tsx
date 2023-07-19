import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleImage.module.scss';

interface IArticleImageProps {
    className?: string
}

const ArticleImage: React.FC<IArticleImageProps> = ({className}: IArticleImageProps): JSX.Element => {
    return (
        <div className={classNames(cls.article, {}, [className])}>

        </div>
    );
};

export default ArticleImage;


