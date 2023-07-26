import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleList, IArticle} from 'entities/Article/model';
import {ArticleBlockType, ArticleType} from 'entities/Article/model/types/IArticle';

interface IArticlePageProps {
    className?: string
}

const mockData: IArticle = {
    'id': '1',
    'title': 'TypeScript 5.0 and 4.9',
    'subtitle': 'Actual features',
    'img': 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
    'views': '1022',
    'createAt': '26.02.2022',
    'user': {
        id: '2',
        avatar: 'https://imgur.com/IyES7O4.png',
        username: 'username',
    },
    'type': [ArticleType.IT],
    'blocks': [
        {
            'id': '1',
            'type': ArticleBlockType.TEXT,
            'title': 'TypeScript 5.0 and 4.9: evaluate and compare changes',
            'paragraphs': [
                'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                'In this article, we\'ll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what\'s new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.',
            ],
        }],
} as IArticle;

const ArticlePage: React.FC<IArticlePageProps> = memo(({className}: IArticlePageProps): JSX.Element => {
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.article, {}, [className])}>
            <ArticleList isLoading={true} articles={
                new Array(16).fill(0).map(
                    (item, index) => ({
                        ...mockData,
                        id: index.toString(),
                    }),
                )
            }/>
        </div>
    );
});

export default ArticlePage;


