import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React, {memo, useEffect} from 'react';
import {SizeText, Text} from 'shared/ui/Text';
import {ArticleList, ArticleView} from 'entities/Article';
import {VStack} from 'widgets/Stack';
import useArticleRecommendationsList from '../../api/articleRecommendationsApi';
import Loader from 'widgets/Loader';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface IArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList = memo((props: IArticleRecommendationsListProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const {data, isLoading} = useArticleRecommendationsList(4);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text size={SizeText.L}
                title={t('Recommendations')}/>
            <ArticleList
                target={'_blank'}
                view={ArticleView.SHELF}
                articles={data}
            />
        </VStack>
    );
});

export default ArticleRecommendationsList;
