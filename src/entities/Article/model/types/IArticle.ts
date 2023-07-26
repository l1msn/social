import {IUser} from 'entities/User';

enum ArticleBlockType {
    CODE = 'code',
    TEXT = 'text',
    IMAGE = 'image'
}

enum ArticleType {
    IT = 'IT',
    SCIENCE = 'Science',
    ECONOMICS = 'Economics'
}

interface IArticleBlockBase {
    id: string | number,
    type: ArticleBlockType
}

interface IArticleCodeBlock extends IArticleBlockBase{
    type: ArticleBlockType.CODE,
    code: string;
}

interface IArticleImageBlock extends IArticleBlockBase{
    type: ArticleBlockType.IMAGE,
    src: string,
    title?: string;
}

interface IArticleTextBlock extends IArticleBlockBase{
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[];
}

type ArticleBlock =
    IArticleCodeBlock |
    IArticleImageBlock |
    IArticleTextBlock;

interface IArticle {
    id: string | number,
    title: string,
    subtitle: string,
    img: string,
    user: IUser;
    views: number | string,
    createAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[],
    move?: () => void;
}

export {IArticle, ArticleType, ArticleBlockType, ArticleBlock, IArticleCodeBlock, IArticleImageBlock, IArticleTextBlock};
