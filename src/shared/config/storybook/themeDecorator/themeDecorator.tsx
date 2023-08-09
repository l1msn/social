import {Story} from '@storybook/react';
import {ThemeProvider, Themes} from '@/app/providers/ThemeProvider';

function themeDecorator(theme: Themes) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent/>
                </div>
            </ThemeProvider>
        );
    };
}

export default themeDecorator;
