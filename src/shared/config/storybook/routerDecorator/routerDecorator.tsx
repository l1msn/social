import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const routerDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
};

export default routerDecorator;
