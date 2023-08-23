import FeatureFlags from '@/shared/types/featureFlags';
import React from 'react';
import { getFeatureFlags } from '../setGetFeatures';

interface IToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: React.ReactElement;
    off: React.ReactElement;
}

function ToggleFeatures(props: IToggleFeaturesProps): React.ReactElement {
    const { feature, on, off } = props;

    return getFeatureFlags(feature) ? on : off;
}

export default ToggleFeatures;
