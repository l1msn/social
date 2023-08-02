import {createSelector} from '@reduxjs/toolkit';
import {getArticleData} from 'entities/Article';
import {getUserAuthData} from 'entities/User';

const getCanEditArticle = createSelector(getArticleData, getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);

export default getCanEditArticle;
