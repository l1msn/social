import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import Themes from '@/shared/consts/theme';
import { setFeatureFlags } from '@/shared/features';
import { getAllFeatureFlags } from '@/shared/features/lib/setGetFeatures';

function themeRedesignedDecorator(theme: Themes) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        setFeatureFlags({
            ...getAllFeatureFlags(),
            isAppRedesigned: true,
        });
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app_redesigned ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
}

export default themeRedesignedDecorator;
