import IArticleDetailsCommentsSchema from '../types/IArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import fetchCommentsByArticleId from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { IComment } from '@/entities/Comment';

const mockData: IComment[] = [
    {
        id: '1',
        text: 'very good',
        user: {
            username: 'username',
            avatar: 'none',
            id: '2',
        },
    },
    {
        id: '2',
        text: 'not bad',
        user: {
            username: 'admin',
            avatar: 'none',
            id: '1',
        },
    },
];

describe('testing loginSlice functional', () => {
    test('test fetch comments by article id pending', () => {
        const state: DeepPartial<IArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        };
        expect(
            articleDetailsCommentsReducer(
                state as IArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
            ids: [],
            entities: {},
        });
    });

    test('test fetch comments by article id fulfilled', () => {
        const state: DeepPartial<IArticleDetailsCommentsSchema> = {
            isLoading: true,
            error: undefined,
            ids: [],
            entities: {},
        };
        expect(
            articleDetailsCommentsReducer(
                state as IArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending('1', '1', mockData),
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
            ids: [],
            entities: {},
        });
    });
});
