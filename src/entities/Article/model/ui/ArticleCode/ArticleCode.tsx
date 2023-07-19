import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleCode.module.scss';

interface IArticleCodeProps {
    className?: string
}

const ArticleCode: React.FC<IArticleCodeProps> = ({className}: IArticleCodeProps): JSX.Element => {
    return (
        <div className={classNames(cls.article, {}, [className])}>

        </div>
    );
};

export default ArticleCode;


