import { IStateSchema } from '@/app/providers/StoreProvider';
import { ArticleBlockType, ArticleType, IArticle } from '../types/IArticle';
import ArticleSelectors from './ArticleSelectors';

const mockData: IArticle = {
    id: '1',
    title: 'TypeScript 5.0 and 4.9',
    subtitle: 'Actual features',
    img: 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
    views: '1022',
    createAt: '26.02.2022',
    user: {
        id: '2',
        avatar: 'https://imgur.com/IyES7O4.png',
        username: 'username',
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'TypeScript 5.0 and 4.9: evaluate and compare changes',
            paragraphs: [
                'In mid-March 2023, Microsoft announced the release of TypeScript version 5.0. The developers expect a 10-20% performance boost from it, but since it all depends on the codebase and hardware characteristics, they strongly recommend trying these changes.',
                "In this article, we'll take a look at some of the changes in TypeScript 4.9 and 5.0 and compare what's new with previous versions. Using code examples, we will try to understand why they were added and how they simplify our life. The article will be useful for experienced developers who often use TypeScript in their work, and for beginners, as we will analyze in detail the solutions to some problems.",
            ],
        },
    ],
};

describe('testing getArticleData functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            article: {
                data: mockData,
            },
        };
        expect(ArticleSelectors.getArticleData(state as IStateSchema)).toEqual(
            mockData,
        );
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ArticleSelectors.getArticleData(state as IStateSchema)).toEqual(
            undefined,
        );
    });
});

describe('testing getArticleError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            article: {
                error: 'error',
            },
        };
        expect(ArticleSelectors.getArticleError(state as IStateSchema)).toEqual(
            'error',
        );
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ArticleSelectors.getArticleError(state as IStateSchema)).toEqual(
            '',
        );
    });
});

describe('testing getArticleIsLoading functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            article: {
                isLoading: false,
            },
        };
        expect(
            ArticleSelectors.getArticleIsLoading(state as IStateSchema),
        ).toEqual(false);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(
            ArticleSelectors.getArticleIsLoading(state as IStateSchema),
        ).toEqual(false);
    });
});
