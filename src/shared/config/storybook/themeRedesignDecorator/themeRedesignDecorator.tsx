import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import Themes from '@/shared/consts/theme';

function themeRedesignDecorator(theme: Themes) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app_redesigned ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
}

export default themeRedesignDecorator;
