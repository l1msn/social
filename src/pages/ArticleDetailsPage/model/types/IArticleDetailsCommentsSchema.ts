import {EntityState} from '@reduxjs/toolkit';
import {IComment} from 'entities/Comment';

interface IArticleDetailsCommentsSchema extends EntityState<IComment>{
    isLoading?: boolean,
    error?: string,
}

export default IArticleDetailsCommentsSchema;
