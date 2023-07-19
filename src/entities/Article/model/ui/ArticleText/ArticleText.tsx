import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleText.module.scss';

interface IArticleTextProps {
    className?: string
}

const ArticleText: React.FC<IArticleTextProps> = ({className}: IArticleTextProps): JSX.Element => {
    return (
        <div className={classNames(cls.article, {}, [className])}>

        </div>
    );
};

export default ArticleText;


