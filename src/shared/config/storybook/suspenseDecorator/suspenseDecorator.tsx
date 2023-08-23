import { Story } from '@storybook/react';
import { Suspense } from 'react';

const suspenseDecorator = (StoryComponent: Story) => {
    return (
        <Suspense fallback={<div />}>
            <StoryComponent />
        </Suspense>
    );
};

export default suspenseDecorator;
