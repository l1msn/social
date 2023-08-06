import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React, {JSX, memo} from 'react';
import {SizeText, Text} from 'shared/ui/Text';
import {ArticleList, ArticleView} from 'entities/Article';
import {VStack} from 'widgets/Stack';
import useArticleRecommendationsList from '../../api/articleRecommendationsApi';
import Loader from 'widgets/Loader';

interface IArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList: React.FC<IArticleRecommendationsListProps> = memo((props: IArticleRecommendationsListProps): JSX.Element | null => {
    const {className} = props;
    const {t} = useTranslation();
    const {data, isLoading} = useArticleRecommendationsList(4);

    if (isLoading) {
        return <Loader/>;
    }

    if (!data) {
        return null;
    }

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text size={SizeText.L}
                title={t('Recommendations')}/>
            <ArticleList
                virtualized={false}
                target={'_blank'}
                view={ArticleView.SHELF}
                articles={data}
            />
        </VStack>
    );
});

export default ArticleRecommendationsList;
