import { IArticle } from '../../../../src/entities/Article';

const defaultArticle = {
    title: 'TEST title',
    subtitle: 'TEST subtitle',
    img: 'https://appmaster.io/api/_files/3DHUg7jMzvAyeByh528NuV/download/',
    views: '1',
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

class ArticleCommands {
    static createArticle(article?: IArticle) {
        return cy
            .request({
                method: 'POST',
                url: `http://localhost:8000/articles`,
                headers: { Authorization: 'Authorization' },
                body: article ?? defaultArticle,
            })
            .then((res) => res.body);
    }
    static deleteArticle(articleId: string) {
        return cy.request({
            method: 'DELETE',
            url: `http://localhost:8000/articles/${articleId}`,
            headers: { Authorization: 'Authorization' },
        });
    }
}

export default ArticleCommands;
