import { IUser } from '@/entities/User';

enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

enum ArticleBlockType {
    CODE = 'code',
    TEXT = 'text',
    IMAGE = 'image',
}

enum ArticleType {
    ALL = 'All',
    IT = 'IT',
    SCIENCE = 'Science',
    ECONOMICS = 'Economics',
}

interface IArticleBlockBase {
    id: string | number;
    type: ArticleBlockType;
}

interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

type ArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

interface IArticle {
    id: string | number;
    title: string;
    subtitle: string;
    img: string;
    user: IUser;
    views: number | string;
    createAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    move?: () => void;
}

export { ArticleType, ArticleBlockType, ArticleSortField };

export type {
    IArticle,
    ArticleBlock,
    IArticleCodeBlock,
    IArticleImageBlock,
    IArticleTextBlock,
};
