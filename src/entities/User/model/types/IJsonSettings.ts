import Themes from '@/shared/consts/theme';

interface IJsonSettings {
    theme?: Themes;
    isFirstVisit?: boolean;
    isArticlesPageWasOpened?: boolean;
}

export default IJsonSettings;
