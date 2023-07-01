import {Story} from '@storybook/react';
import {Themes} from 'app/providers/ThemeProvider';

function themeDecorator(theme: Themes) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        );
    };
}

export default themeDecorator;
