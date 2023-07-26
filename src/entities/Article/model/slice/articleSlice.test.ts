import {ArticleBlockType, ArticleType, IArticle} from 'entities/Article/model/types/IArticle';
import IArticleSchema from '../types/IArticleSchema';
import {articleReducer} from './articleSlice';
import fetchArticleById from 'entities/Article/model/services/fetchArticleById/fetchArticleById';

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
};

describe('testing articleSlice functional', () => {
    test('test fetch article service pending', () => {
        const state: DeepPartial<IArticleSchema> = {
            isLoading: false,
            data: undefined,
            error: undefined,
        };
        expect(articleReducer(state as IArticleSchema, fetchArticleById.pending)).
            toEqual({
                isLoading: true,
                error: undefined,
            });
    });

    test('test fetch article service fulfilled', () => {
        const state: DeepPartial<IArticleSchema> = {
            isLoading: false,
            data: undefined,
            error: undefined,
        };
        expect(articleReducer(state as IArticleSchema, fetchArticleById.fulfilled(mockData, '', ''))).
            toEqual({
                data: mockData,
                error: undefined,
                isLoading: false,
            });
    });
});
