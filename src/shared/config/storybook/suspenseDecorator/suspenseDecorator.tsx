import 'app/styles/index.scss';
import {Story} from '@storybook/react';
import {Suspense} from 'react';
import Loader from 'widgets/Loader';

const suspenseDecorator = (StoryComponent: Story) => {
    return (
        <Suspense fallback={<Loader/>}>
            <StoryComponent/>
        </Suspense>
    );
};

export default suspenseDecorator;
