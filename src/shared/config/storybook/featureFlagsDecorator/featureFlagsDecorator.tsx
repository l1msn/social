import { Story } from '@storybook/react';
import IFeatureFlags from '@/shared/types/IFeatureFlags';
import { setFeatureFlags } from '@/shared/features';

const featureFlagsDecorator =
    (features: IFeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };

export default featureFlagsDecorator;
