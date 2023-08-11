import React, {JSX} from 'react';
import Page from '@/shared/ui/Page';
import RatingCard from '@/entities/Rating';


const MainPage: React.FC = (): JSX.Element => {
    return (
        <Page>
            <RatingCard
                title={'How do you like the article?'}
                feedbackTitle={'Leave feedback about the article'}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
