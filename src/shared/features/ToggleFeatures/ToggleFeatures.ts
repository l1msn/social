import IFeatureFlags from '@/shared/types/IFeatureFlags';
import React from 'react';
import { getFeatureFlags } from '../setGetFeatures';

interface IToggleFeaturesProps {
    feature: keyof IFeatureFlags;
    on: React.ReactElement;
    off: React.ReactElement;
}

function ToggleFeatures(props: IToggleFeaturesProps): React.ReactElement {
    const { feature, on, off } = props;

    return getFeatureFlags(feature) ? on : off;
}

export default ToggleFeatures;
